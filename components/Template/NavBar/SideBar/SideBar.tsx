"use client";

import { useRouter } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-grey text-lg sm:text-2xl xl:text-3xl font-bold transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } w-[11rem] md:w-[280px] py-4 px-2 z-40`}
      ></div>
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
