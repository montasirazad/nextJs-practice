import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc-utils";

const TagPage = ({ params: { name } }) => {
  const docs = getDocuments();
  //console.log(docs);
  const matchedDocuments = getDocumentByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
