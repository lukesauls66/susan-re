import PageHeader from "../PageHeader";
import BlogPageBody from "./BlogPageBody";

const BlogPage = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 xl:p-[3rem] flex flex-col items-center gap-4 lg:gap-8 xl:gap-[3.5rem]">
      <PageHeader title="Blog" />
      <BlogPageBody />
    </div>
  );
};

export default BlogPage;
