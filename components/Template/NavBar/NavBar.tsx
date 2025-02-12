import Link from "next/link";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 pl-4 pr-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/azwarriorlogo.png"
            alt="AZ Warrior logo"
            className="h-[3.5rem]"
          />
        </Link>
        <div className="hidden md:flex md:flex-col md:gap-2">
          <div className="flex gap-2">
            <img
              src="/images/KWIFLogo.jpg"
              alt="Keller Williams Integrity First Reality"
              className="h-[2.5rem] w-[4rem]"
            />
            <img
              src="/images/triplelogo.jpeg"
              alt="Realtor, MLS, and Equal Housing Opportunity logo"
              className="h-[2.5rem] w-[4rem]"
            />
          </div>
          <p className="text-[.5rem]">
            Each office is independently owned and operated
          </p>
        </div>
      </div>
      <div>
        <Hamburger />
      </div>
    </div>
  );
};

export default NavBar;
