import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
const postDirectory = path.join(process.cwd(), "docs");
const fileNames = readdirSync(postDirectory);

export const getDocument = () => {
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });
};
