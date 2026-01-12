import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/blogs";

const Blogs = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Blog list</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <BlogItem title={blog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
