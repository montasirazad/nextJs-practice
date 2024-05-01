const BlogItem = ({ blog }) => {
  return (
    <div className="mt-4">
      <h2 className="m-1">{blog.name}</h2>
    </div>
  );
};

export default BlogItem;
