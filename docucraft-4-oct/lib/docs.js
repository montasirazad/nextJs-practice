import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const fullPath = path.join(process.cwd(), "docs");
const fileNames = readdirSync(fullPath);

export function getDocuments() {
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const filePath = path.join(fullPath, fileName);
    const fileContent = readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);
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
  const filePath = path.join(fullPath, `${id}.md`);
  const fileContent = readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  const htmlContent = await remark().use(html).process(matterResult.content);
  const contentHtml = htmlContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
