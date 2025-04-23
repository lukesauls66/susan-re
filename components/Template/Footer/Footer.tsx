import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-6 pb-8 px-5 lg:px-[4rem] xl:px-[6rem] flex flex-col md:flex-row-reverse md:justify-around lg:justify-between gap-5 justify-center items-center lg:text-xl w-full">
      <div className="flex flex-col items-start gap-2 w-320px">
        <h2 className="font-bold text-lg">Want to reach out?</h2>
        <p>6991 E Camelback Rd D-300, Scottsdale, AZ 85251</p>
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/susanlyman2021/"
          >
            <div className="bg-white rounded-sm">
              <FaSquareInstagram
                className="w-9 h-9 lg:w-11 lg:h-11"
                style={{
                  fill: "url(#instagramGradient)",
                }}
              />
            </div>
          </Link>
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
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-[5rem] w-320px">
        <img
          src="/images/transparentAZRE.png"
          alt="az warrior logo"
          className="w-[12rem] lg:w-[17rem]"
        />
        <img
          src="/images/exp-logo.PNG"
          alt="EXP Realty with logo"
          className="w-[12rem] lg:w-[15rem] bg-white"
        />
      </div>
    </div>
  );
};

export default Footer;
