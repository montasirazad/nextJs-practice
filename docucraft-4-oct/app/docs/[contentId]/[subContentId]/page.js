import ContentDisplay from "@/components/ContentDisplay";

const SubContent = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default SubContent;
