import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs"
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  );
};

export default Tag;
