import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");
const fileNames = fs.readdirSync(postsDirectory);

export function getDocuments() {
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const pathName = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(pathName, "utf8");
    const matterResult = matter(fileContents);

    console.log(matterResult.data);
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
}

export async function getDocumentContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
