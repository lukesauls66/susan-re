import Header from "./Header";
import ReviewsSection from "./ReviewsSection";
import BlogSection from "./BlogSection";
import MissionStatementSection from "./MissionStatementSection";

const LandingPage = async () => {
  return (
    <>
      <Header />
      <MissionStatementSection />
      <ReviewsSection />
      <BlogSection />
    </>
  );
};

export default LandingPage;
