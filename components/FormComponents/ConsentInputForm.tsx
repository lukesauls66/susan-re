import React from "react";
import { Input } from "../ui/input";
import { HiMail } from "react-icons/hi";

type Props = {
  formValues: {
    phoneNumber: string;
    emailAddress: string;
    consent: boolean;
    kwConsent: boolean;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConsentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ConsentInputForm = (props: Props) => {
  const { formValues, handleConsentChange, handleInputChange } = props;

  const concentStyles = `flex items-start gap-2 text-sm border-solid border-white border-2 p-4 rounded-lg cursor-pointer hover:shadow-md hover:border-red`;
  const checkboxStyles = `p-2 rounded border-2 border-white appearance-none cursor-pointer 
  checked:bg-[#C8373E] checked:border-[#C8373E] bg-white transition-colors relative
  after:content-['✓'] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 
  after:-translate-y-1/2 after:text-white after:opacity-0 checked:after:opacity-100 
  after:text-sm after:font-bold`;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          type="tel"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number (XXX-XXX-XXXX)"
          className="w-full p-4 text-black bg-[#e9e9e9] rounded-lg"
          maxLength={12}
        />
      </div>
      <div className="space-y-2 relative">
        <HiMail
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
        <Input
          type="email"
          name="emailAddress"
          value={formValues.emailAddress}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-full p-4 pl-10 text-black bg-[#e9e9e9] rounded-lg"
        />
      </div>
      <div className="space-y-4 text-white">
        <label className={concentStyles}>
          <input
            type="checkbox"
            name="consent"
            checked={formValues.consent}
            onChange={handleConsentChange}
            className={checkboxStyles}
          />
          <span>
            By checking this box, you agree to our Terms of Use and acknowledge
            your personal information will be handled in accordance with our
            Privacy Policy . I&apos;m also happily subscribing to your
            newsletter.
          </span>
        </label>

        <label className={concentStyles}>
          <input
            type="checkbox"
            name="kwConsent"
            checked={formValues.kwConsent}
            onChange={handleConsentChange}
            className={checkboxStyles}
          />
          <span>
            By checking this box, you agree that a Keller Williams® agent may
            contact you at the telephone number and email address you provided,
            even if your number is on a federal, state, or internal Do Not Call
            list, and may send marketing calls and texts to you using an
            automated system for selection or dialing of numbers or pre-recorded
            or artificial voice messages that relate to real estate products or
            services. Your consent is not required to purchase products or
            services. You may unsubscribe at any time.
          </span>
        </label>
      </div>
    </div>
  );
};

export default ConsentInputForm;
