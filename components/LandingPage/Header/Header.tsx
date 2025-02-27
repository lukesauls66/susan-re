import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative w-full">
      <div className="w-full max-h-[40rem] overflow-hidden">
        <img
          src="/images/AZsky.webp"
          alt="AZ sky"
          className="w-full h-[18rem] md:h-[25rem] lg:h-[30rem] xl:h-[40rem]"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-between w-[12rem] md:w-[18rem] xl:w-[24rem] h-full py-2 sm:py-4 md:pb-[4rem] md:pt-[5rem] lg:pb-[5rem] lg:pt-[7rem] xl:pb-[8rem] xl:pt-[10rem]">
          <p className="font-bold text-white text-center sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl">
            Find your dream home in Arizona
          </p>
          <div className="flex flex-col gap-2 lg:gap-5 w-[10rem] md:w-[13rem] lg:w-full">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/seller-form"
              className="md:h-[3rem] lg:h-[4rem] w-full"
            >
              <Button className="md:h-[3rem] lg:h-[4rem] w-full">
                Selling Your Property?
              </Button>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/buyer-form"
              className="md:h-[3rem] lg:h-[4rem] w-full"
            >
              <Button className="md:h-[3rem] lg:h-[4rem] w-full">
                Looking To Buy?
              </Button>
            </Link>
          </div>
          <img
            src="/images/Logo2.svg"
            alt="Keller Williams Legal Logo"
            className="bg-white md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
