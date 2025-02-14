/* eslint-disable @next/next/no-img-element */
import MissionHeader from "./Components/MissionHeader";
import ReadMoreButton from "./Components/ReadMoreButton";

const MissionStatementSection = async () => {
  return (
    <section className="md:flex gap-4 w-full items-center p-4">
      <div className="hidden md:block w-1/2 h-full">
        <img
          className="object-cover"
          src="/images/assets/AZ-RE-1.png"
          alt="Mission Image"
        />
      </div>
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start gap-6">
        <MissionHeader />
        <p className="text-start">
          OUR MISSION IS TO FIERCELY PROTECT YOUR REAL ESTATE GOALS WITH EXPERT
          GUIDANCE, INTEGRITY, AND A RELENTLESS COMMITMENT TO YOUR
          SUCCESS—MAKING EVERY STEP IN ARIZONA REAL ESTATE SEAMLESS, SECURE, AND
          EMPOWERING.
        </p>
        <div className="w-full">
          <ReadMoreButton />
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection;
