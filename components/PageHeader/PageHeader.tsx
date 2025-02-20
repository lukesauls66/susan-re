interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-10">
      <h1 className="text-red text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
