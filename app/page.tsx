import LandingPage from "@/components/LandingPage";
import { getLandingPageData, LandingPageData } from "@/sanity/sanity-utils";

export default async function Home() {
  const landingPageData: LandingPageData = await getLandingPageData();

  return <LandingPage landingPageData={landingPageData} />;
}
