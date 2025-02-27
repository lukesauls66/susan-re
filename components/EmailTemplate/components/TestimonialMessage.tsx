import { TestimonialType } from "@/types/testimonialType";
import { Text, Section, Link } from "@react-email/components";
import React from "react";

type Props = {
  formData: TestimonialType;
};

function TestimonialMessage({ formData }: Props) {
  return (
    <>
      <Text className="text-center my-5 text-base text-gray-800">
        Please verify{" "}
        <strong>
          {formData.firstName} {formData.lastName}
        </strong>
        &apos;s testimonial in your studio
      </Text>
      <Section className="text-center my-5">
        <Link
          href={`${process.env.NEXT_PUBLIC_DOMAIN}/studio/structure/review`}
          className="bg-[#C8373E] text-white px-6 py-3 font-bold rounded no-underline"
        >
          Studio
        </Link>
      </Section>
      <Text className="text-center my-5 text-base text-gray-800">
        Once you verify, it will be displayed on your testimonials page.
      </Text>
      <Text className="text-center my-5 text-lg font-bold text-gray-800">
        <strong>
          {formData.firstName} {formData.lastName}
        </strong>
      </Text>
      <Text className="text-center my-5 text-base text-gray-800">
        {formData.description}
      </Text>
    </>
  );
}

export default TestimonialMessage;
