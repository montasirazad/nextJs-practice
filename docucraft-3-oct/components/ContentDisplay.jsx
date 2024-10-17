import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  console.log(documentContent);
  return (
    // <h1>{id}</h1>
    <article className="prose dark:prose-invert">
      <h1> </h1>
      <div>
        <span>
          Published On:
          {/* {documentContent.date} */}
        </span>{" "}
        by <Link href={`/author/ `}>{/* {documentContent.author} */}</Link>{" "}
        under the{" "}
        <Link href={`/categories/ `}>{/* {documentContent.category} */}</Link>{" "}
        category.
      </div>
      <div></div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;
