"use client";

import { useRouter } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    toggleSidebar();
    router.push(path);
  };

  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-grey text-lg md:text-2xl xl:text-3xl font-bold transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } w-[11rem] md:w-[18rem] xl:w-[24rem] py-4 px-2 md:py-[3rem] md:px-4 z-40`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center gap-10">
            <a
              href="#"
              onClick={() => handleNavigation("/buyer-form")}
              className="text-white hover:text-red hover:scale-10"
            >
              Home Search
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/seller-form")}
              className="text-white hover:text-red hover:scale-10"
            >
              Home Valuation
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/testimonials")}
              className="text-white hover:text-red hover:scale-10"
            >
              Testimonials
            </a>
            <a
              href="#"
              onClick={() => handleNavigation("/blog")}
              className="text-white hover:text-red hover:scale-10"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              onClick={() => handleNavigation("/about")}
              className="text-white hover:text-red hover:scale-10"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default SideBar;
