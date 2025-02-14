import CarouselBody from "./components/CarouselBody";
import ReviewsTitle from "./components/ReviewsTitle";

const ReviewsSection = async () => {
  return (
    <section className="bg-grey">
      <ReviewsTitle />
      <CarouselBody />
    </section>
  );
};

export default ReviewsSection;
