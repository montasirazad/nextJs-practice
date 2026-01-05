import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentByAuthor(docs, name);
  //console.log(matchedDocuments);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default AuthorPage;
