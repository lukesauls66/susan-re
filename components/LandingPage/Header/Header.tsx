import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative w-full">
      <div className="w-full max-h-[40rem] overflow-hidden">
        <img src="/images/AZsky.webp" alt="AZ sky" className="w-full" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-between w-[12rem] md:w-[18rem] xl:w-[24rem] h-full py-2 sm:py-4 md:pb-[4rem] md:pt-[8rem] lg:pb-[6rem] lg:pt-[12rem] xl:pb-[8rem] xl:pt-[16rem]">
          <p className="font-bold text-white text-center sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl">
            Find your dream home in Arizona
          </p>
          <div className="flex gap-4">
            <Button className="font-semibold lg:text-lg xl:text-2xl p-[2rem] w-full">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/seller-form"
              >
                Selling Your Property?
              </Link>
            </Button>
            <Button className="font-semibold lg:text-lg xl:text-2xl p-[2rem] w-full">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="/buyer-form"
              >
                Looking To Buy?
              </Link>
            </Button>
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
