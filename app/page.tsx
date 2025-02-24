import EmailTemplate from "@/components/EmailTemplate";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage />
      <EmailTemplate
        contentType="buyer"
        formData={{
          propertyType: "Single Family Home",
          timeFrame: 6,
          zipCode: "90210",
          rooms: 4,
          priorities: ["Garage", "Swimming Pool", "Large Backyard"],
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "123-456-7890",
          emailAddress: "john.doe@example.com",
          consent: true,
          kwConsent: true,
        }}
      />
    </>
  );
}
