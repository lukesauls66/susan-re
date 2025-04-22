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
            className="h-[3.5rem] w-[7rem] sm:h-[4.5rem] sm:w-[9rem] md:h-[5.5rem] md:w-[10rem] lg:h-[7rem] lg:w-[13rem] xl:h-[8.5rem] xl:w-[16rem]"
          />
        </Link>
        <img
          src="/images/exp-logo.PNG"
          alt="EXP Realty with logo"
          className="hidden md:block md:w-[8rem] lg:w-[9rem]"
        />
      </div>
      <div>
        <Hamburger />
      </div>
    </div>
  );
};

export default NavBar;
