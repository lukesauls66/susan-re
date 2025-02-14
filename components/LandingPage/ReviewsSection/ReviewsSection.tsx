import { getReviews } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Pfp from "@/components/AssetComponents/Pfp";

const ReviewsSection = async () => {
  const reviews = await getReviews();
  return (
    <Carousel className="bg-grey">
      <CarouselContent className="flex space-x-4 p-8">
        {reviews.map((review) => {
          const imageSrc = review.clientImage
            ? urlFor(review.clientImage).url()
            : "";
          return (
            <CarouselItem
              className="relative w-[350px] h-[500px] pl-0" // Fixed width and height
              key={review.firstName + review.lastName}
            >
              <div className="absolute inset-0 bg-white rounded-md" />
              <div className="relative z-10 p-4 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3>
                    {review.firstName} {review.lastName}
                  </h3>
                  <Pfp className="w-[1.5rem] h-[1.5rem]" imgSrc={imageSrc} />
                </div>
                <div className="text-grey">
                  <p className="line-clamp-4">{review.description}</p>
                </div>
                <div className="h-[200px] w-full">
                  {" "}
                  {/* Fixed height for image container */}
                  <img
                    src={urlFor(review.homeImage).url()}
                    alt={review.firstName}
                    className="w-full h-full object-cover rounded-md" // Make image cover the container
                  />
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ReviewsSection;
