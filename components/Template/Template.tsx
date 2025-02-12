import NavBar from "./NavBar";
import Footer from "./Footer";

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Template;
