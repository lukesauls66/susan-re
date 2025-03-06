import Header from "./Header";
import ReviewsSection from "./ReviewsSection";
import BlogSection from "./BlogSection";
import MissionStatementSection from "./MissionStatementSection";
import { LandingPageData } from "@/sanity/sanity-utils";

interface LandingPageProps {
  landingPageData: LandingPageData;
}

const LandingPage: React.FC<LandingPageProps> = ({ landingPageData }) => {
  return (
    <>
      <Header landingPageData={landingPageData} />
      <MissionStatementSection landingPageData={landingPageData} />
      <ReviewsSection />
      <BlogSection />
    </>
  );
};

export default LandingPage;
