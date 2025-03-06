import LandingPage from "@/components/LandingPage";
import { getLandingPageData, LandingPageData } from "@/sanity/sanity-utils";

interface HomeProps {
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

export default function Home({ landingPageData }: HomeProps) {
  return <LandingPage landingPageData={landingPageData} />;
}
