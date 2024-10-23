import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc-utils";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default CategoryPage;
