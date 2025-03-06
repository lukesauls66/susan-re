import LandingPage from "@/components/LandingPage";
import { getLandingPageData, LandingPageData } from "@/sanity/sanity-utils";

// interface HomeProps {
//   landingPageData: LandingPageData;
// }

// export async function getServerSideProps() {
//   const landingPageData = await getLandingPageData();

//   return {
//     props: {
//       landingPageData,
//     },
//   };
// }

export default async function Home() {
  const landingPageData: LandingPageData = await getLandingPageData();

  return <LandingPage landingPageData={landingPageData} />;
}
