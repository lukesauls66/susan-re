import Link from "next/link";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex items-center gap-[5rem] lg:gap-[8rem]">
        <Link href="/" className="flex items-center">
          <img
            src="/images/azwarriorlogo.png"
            alt="AZ Warrior logo"
            className="h-[3.5rem] w-[7rem] sm:h-[4.5rem] sm:w-[9rem] md:h-[5.5rem] md:w-[10rem] lg:h-[7rem] lg:w-[13rem] xl:h-[7.5rem] xl:w-[15rem] 2xl:h-[8.5rem] 2xl:w-[17rem]"
          />
        </Link>
        <img
          src="/images/Logo2.svg"
          alt="Keller Williams Integrity First Realty with logo"
          className="hidden md:block md:w-[14rem] md:mt-5 lg:w-[17rem] lg:mt-7"
        />
      </div>
      <div>
        <Hamburger />
      </div>
    </div>
  );
};

export default NavBar;
