import ReviewsSection from "./ReviewsSection";
import BlogSection from "./BlogSection";
import MissionStatementSection from "./MissionStatementSection";
import { Button } from "../ui/button";
import { getBlogs } from "@/sanity/sanity-utils";

const LandingPage = async () => {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <>
      <div className="relative w-screen">
        <img src="/images/AZsky.webp" alt="AZ sky" className="w-screen" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-between w-[12rem] md:w-[18rem] xl:w-[24rem] h-full py-2 sm:py-4 md:pb-[4rem] md:pt-[8rem] lg:pb-[6rem] lg:pt-[12rem] xl:pb-[8rem] xl:pt-[16rem]">
            <p className="font-bold text-white text-center sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl">
              Find your dream home in Arizona
            </p>
            <Button className="font-semibold lg:text-lg xl:text-2xl xl:h-[3rem] xl:w-[14rem]">
              Let&apos;s Explore
            </Button>
            <img
              src="/images/Logo2.svg"
              alt="Keller Williams Legal Logo"
              className="bg-white md:hidden"
            />
          </div>
        </div>
      </div>
      <MissionStatementSection />
      <BlogSection />
      <ReviewsSection />
    </>
  );
};

export default LandingPage;
