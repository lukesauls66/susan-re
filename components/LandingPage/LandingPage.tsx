import Header from "./Header";
import ReviewsSection from "./ReviewsSection";
import BlogSection from "./BlogSection";
import MissionStatementSection from "./MissionStatementSection";
import { getBlogs } from "@/sanity/sanity-utils";

const LandingPage = async () => {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <>
      <Header />
      <MissionStatementSection />
      <BlogSection />
      <ReviewsSection />
    </>
  );
};

export default LandingPage;
