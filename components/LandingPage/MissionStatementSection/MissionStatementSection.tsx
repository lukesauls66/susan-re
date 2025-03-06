/* eslint-disable @next/next/no-img-element */
import MissionHeader from "./Components/MissionHeader";
import ReadMoreButton from "./Components/ReadMoreButton";
import { LandingPageData } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/lib/image";

interface MissionStatementSectionProps {
  landingPageData: LandingPageData;
}

const MissionStatementSection: React.FC<MissionStatementSectionProps> = ({
  landingPageData,
}) => {
  return (
    <section className="md:flex gap-4 w-full items-center p-4 md:min-h-[40rem]">
      <div className="hidden md:block w-1/2 h-full">
        <img
          className="object-cover"
          src={urlFor(landingPageData.aboutImage).url()}
          alt="Mission Image"
        />
      </div>
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start gap-6">
        <MissionHeader landingPageData={landingPageData} />
        <p className="text-start">{landingPageData.aboutDescription}</p>
        <div className="w-full">
          <ReadMoreButton />
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection;
