import blogs from "@/app/data/data";

export function generateStaticParams() {
  return blogs.map((blog) => {
    id: blog.id;
  });
}

const SingleBlog = ({ params }) => {
  const { id } = params;
  console.log('rendering single blog');
  const blog = blogs.find((blog) => blog.id === id);
  //console.log(blog);
  return (
    <div>
      <h1 className="text-xl font-bold">{blog.name}</h1>
      <p className="mt-1">{blog.description}</p>
    </div>
  );
};

export default SingleBlog;
