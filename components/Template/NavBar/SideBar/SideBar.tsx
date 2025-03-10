import Link from "next/link";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-grey text-lg md:text-2xl xl:text-3xl font-bold transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } w-[11rem] md:w-[18rem] xl:w-[24rem] py-4 px-2 md:py-[3rem] md:px-4 z-40`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center gap-10">
            <Link
              href="/buyer-form"
              onClick={toggleSidebar}
              className="text-white hover:text-red hover:scale-110 transition-transform duration-200"
            >
              Buyers
            </Link>
            <Link
              href="/seller-form"
              onClick={toggleSidebar}
              className="text-white hover:text-red hover:scale-110 transition-transform duration-200"
            >
              Sellers
            </Link>
            <Link
              href="/testimonials"
              onClick={toggleSidebar}
              className="text-white hover:text-red hover:scale-110 transition-transform duration-200"
            >
              Testimonials
            </Link>
          </div>
          <div className="flex flex-col items-center gap-10">
            <Link
              href="/events"
              onClick={toggleSidebar}
              className="text-white hover:text-red hover:scale-110 transition-transform duration-200"
            >
              Events
            </Link>
            <Link
              href="/about"
              onClick={toggleSidebar}
              className="text-white hover:text-red hover:scale-110 transition-transform duration-200"
            >
              About Us
            </Link>
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
