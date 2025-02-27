import React from "react";
import Title from "./sharedComponents/Title";
import Link from "next/link";

interface ThankYouDisplayProps {
  contentType: "seller" | "buyer";
}

const ThankYouDisplay: React.FC<ThankYouDisplayProps> = ({ contentType }) => {
  return (
    <div className="text-center flex flex-col items-center gap-4">
      <Title>Thank You for Your Interest!</Title>

      <div className="text-white">
        <p className="text-lg">
          We&apos;ve received your information and we will be in touch with you
          shortly.
        </p>

        <div className="p-6 bg-[#e9e9e9] rounded-lg text-black">
          <p className="font-medium mb-2">What happens next?</p>
          <ul className="text-left space-y-2 list-disc list-inside">
            <li>We&apos;ll review your preferences</li>
            {contentType === "buyer" ? (
              <li>Match you with properties that fit your criteria</li>
            ) : null}
            <li>Contact you to discuss options</li>
            <li>Schedule viewings at your convenience</li>
          </ul>
        </div>
      </div>
      <Link
        className="p-4 bg-red text-white hover:bg-red/60 rounded-md"
        href="/"
      >
        Back to the Home Page
      </Link>
    </div>
  );
};

export default ThankYouDisplay;
