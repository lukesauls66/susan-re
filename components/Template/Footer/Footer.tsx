import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-grey/80 pt-6 pb-8 px-5 flex flex-col md:flex-row-reverse md:justify-around gap-5 justify-center items-center text-white lg:text-xl w-full">
      <div className="flex flex-col items-start gap-2 w-320px">
        <h2 className="font-bold text-lg">Want to reach out?</h2>
        <p>830 S Higley Rd, Gilbert, AZ 85296</p>
        <div className="flex gap-2">
          <FaPhoneAlt className="mt-1" />
          <p>(+1) 602-732-0402</p>
        </div>
        <div className="flex justify-between items-center w-full pt-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61566563807162"
          >
            <div className="bg-white p-1 rounded-full">
              <FaFacebook className="w-7 h-7 lg:w-9 lg:h-9 text-[#1877F2]" />
            </div>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@azwarriorrealtor?lang=en"
          >
            <div className="bg-white p-1 rounded-full">
              <FaTiktok className="w-7 h-7 lg:w-9 lg:h-9 text-black" />
            </div>
          </Link>
          <div className="bg-white rounded-sm">
            <FaSquareInstagram
              className="w-9 h-9 lg:w-11 lg:h-11"
              style={{
                fill: "url(#instagramGradient)",
              }}
            />
          </div>
          <svg width="0" height="0">
            <linearGradient
              id="instagramGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#feda75", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#fa7e1e", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#d62976", stopOpacity: 1 }}
              />
            </linearGradient>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 w-320px">
        <img
          src="/images/transparentAZRE.png"
          alt="az warrior logo"
          className="w-[12rem] h-[5rem] lg:w-[17rem] lg:h-[7rem]"
        />
        <img
          src="/images/Logo2.svg"
          alt="Keller Williams Integrity First Realty with logo"
          className="w-[16rem] lg:w-[19rem] bg-white"
        />
      </div>
    </div>
  );
};

export default Footer;
