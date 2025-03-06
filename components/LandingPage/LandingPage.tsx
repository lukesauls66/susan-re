import Header from "./Header";
import ReviewsSection from "./ReviewsSection";
import BlogSection from "./BlogSection";
import MissionStatementSection from "./MissionStatementSection";
import { getLandingPageData } from "@/sanity/sanity-utils";
import { LandingPageData } from "@/sanity/sanity-utils";

interface LandingPageProps {
  landingPageData: LandingPageData;
}

export async function getServerSideProps() {
  const landingPageData = await getLandingPageData();

  return {
    props: {
      landingPageData,
    },
  };
}

const LandingPage: React.FC<LandingPageProps> = ({ landingPageData }) => {
  console.log("landing page data", landingPageData);
  return (
    <>
      <Header landingPageData={landingPageData} />
      <MissionStatementSection />
      <ReviewsSection />
      <BlogSection />
    </>
  );
};

export default LandingPage;
