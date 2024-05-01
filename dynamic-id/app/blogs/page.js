import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/data";

const Blogs = () => {
  return (
    <div className="p-5">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`}>
          <BlogItem blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
