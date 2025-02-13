import { getBlogs } from "@/sanity/sanity-utils";

const BlogSection = async () => {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col items-center justify-between">
      <h3 className="text-red underline underline-offset-[.5rem]">Blog</h3>
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default BlogSection;
