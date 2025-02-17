import ReviewsPageHeader from "./ReviewsPageHeader";
import ReviewsPageBody from "./ReviewsPageBody";

const ReviewsPage = () => {
  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <ReviewsPageHeader />
      <ReviewsPageBody />
    </div>
  );
};

export default ReviewsPage;
