import { Button } from "../ui/button";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 xl:gap-6 justify-center items-center">
      <h1 className="text-red text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
        {title}
      </h1>
      <Button
        variant={"outline"}
        className="md:text-lg xl:text-2xl xl:p-6 hover:bg-red hover:text-primary-foreground hover:shadow hover:rounded-lg"
      >
        <Link href="/testimonials/post">Make a Testimonial</Link>
      </Button>
    </div>
  );
};

export default PageHeader;
