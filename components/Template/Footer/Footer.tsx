import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-grey w-full pt-6 pb-8 flex flex-col gap-5 justify-center items-center text-white">
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-bold text-lg">Want to reach out?</h2>
        <p>830 S Higley Rd, Gilbert, AZ 85296</p>
        <div className="flex gap-2">
          <FaPhoneAlt className="mt-1" />
          <p>(+1) 602-732-0402</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <img src="/images/azwarriorlogo2.svg" alt="az warrior logo" />
        <img
          src="/images/Logo2.svg"
          alt="Keller Williams Integrity First Realty with logo"
          className="w-[16rem] bg-white"
        />
      </div>
    </div>
  );
};

export default Footer;
