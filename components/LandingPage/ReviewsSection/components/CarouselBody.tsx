/* eslint-disable @next/next/no-img-element */
import Pfp from "@/components/AssetComponents/Pfp";
import { ReviewType } from "@/utils/reviewsType";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/image";
import { getReviews } from "@/sanity/sanity-utils";
import React from "react";

const CarouselBody = async () => {
  const reviews = await getReviews();

  function sortReviews() {
    return reviews.sort((a: ReviewType, b: ReviewType) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  return (
    <Carousel className="flex items-center justify-center">
      <CarouselPrevious className="absolute top-1/2 left-0 lg:left-[2rem] xl:left-[8rem] transform -translate-y-1/2 z-10" />
      <CarouselContent className="flex space-x-4 p-8 lg:max-w-[55rem] xl:max-w-[69rem]">
        {sortReviews()
          .slice(0, 4)
          .map((review) => {
            const imageSrc = review.clientImage
              ? urlFor(review.clientImage).url()
              : "";
            return (
              <CarouselItem
                className="relative w-[292px] md:w-[350px] h-[429px] pl-0"
                key={review.firstName + review.lastName}
              >
                <div className="absolute inset-0 bg-white rounded-md" />
                <div className="relative z-10 p-4 flex flex-col justify-around h-full">
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
                    <img
                      src={urlFor(review.homeImage).url()}
                      alt={review.firstName}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselNext className="absolute top-1/2 right-0 lg:right-[2rem] xl:right-[8rem] transform -translate-y-1/2 z-10" />
    </Carousel>
  );
};

export default CarouselBody;
