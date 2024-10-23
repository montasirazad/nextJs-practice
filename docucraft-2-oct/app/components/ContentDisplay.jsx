import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  //console.log(documentContent);
  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>
          Published On:{documentContent.date} by{" "}
          <Link href={`/authors/${documentContent.author}`}>
            {documentContent.author}
          </Link>{" "}
          under the{" "}
          <Link href={`/categories/${documentContent.category}`}>
            {documentContent.category}
          </Link>{" "}
          category.
        </span>
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      ></div>
    </article>
  );
};

export default ContentDisplay;
