import LandingPage from "@/components/LandingPage";
import EmailTemplate from "@/components/EmailTemplate";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="flex flex-col gap-8 items-center">
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
          }}
        />
        <EmailTemplate
          contentType="seller"
          formData={{
            propertyType: "Condo",
            squareFeet: "1500",
            indoorSizeArea: 1200,
            houseCondition: "Good",
            zipCode: "10001",
            phoneNumber: "987-654-3210",
            emailAddress: "jane.doe@example.com",
            consent: true,
            firstName: "Jane",
            lastName: "Doe",
          }}
        />
        <EmailTemplate
          contentType="testimonial"
          formData={{
            isVerified: true,
            firstName: "Alice",
            lastName: "Smith",
            clientImage: "/images/clients/alice_smith.jpg",
            homeImage: "/images/homes/home1.jpg",
            date: "2025-02-21",
            description:
              "Working with Susan was an absolute pleasure. She was professional, knowledgeable, and always available to answer our questions. Thanks to her expertise, we found our dream home in no time.",
          }}
        />
      </div>
    </>
  );
}
