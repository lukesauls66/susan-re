import { Review, Blog } from "@/sanity/sanity-utils";
import Pfp from "@/components/AssetComponents/Pfp";
import { urlFor } from "@/lib/image";

interface ReviewsContentProps {
  displayedContent: Review[] | Blog[];
}

const ReviewsContent: React.FC<ReviewsContentProps> = ({
  displayedContent,
}) => {
  return (
    <>
      {displayedContent.map((review, index) => {
        const reviewItem = review as Review;
        const imageSrc = reviewItem.clientImage
          ? urlFor(reviewItem.clientImage).url()
          : "";

        return (
          <div
            className={`bg-gray-200 rounded-md p-2 md:p-4 xl:p-6 max-w-[40rem] lg:max-w-[75rem] ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}
            key={reviewItem.firstName + reviewItem.lastName}
          >
            <div className="flex items-center justify-between">
              <h3 className="md:text-lg lg:text-xl xl:text-2xl">
                {reviewItem.firstName} {reviewItem.lastName}
              </h3>
              <Pfp className="size-[1.5rem] lg:size-[2rem]" imgSrc={imageSrc} />
            </div>
            <br />
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-8">
              <div className="text-grey w-full">
                <p className="lg:text-lg xl:text-xl">
                  {reviewItem.description}
                </p>
              </div>
              <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full">
                <img
                  src={urlFor(reviewItem.homeImage).url()}
                  alt={reviewItem.firstName}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewsContent;
