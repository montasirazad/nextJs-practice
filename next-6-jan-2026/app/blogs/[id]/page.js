import blogs from "@/app/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}
// console.log(generateStaticParams());
function SingleBlog({ params }) {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id == id);

  return (
    <div>
      <h1 className="font-bold">{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
}

export default SingleBlog;
