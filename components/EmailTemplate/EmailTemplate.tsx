interface EmailTemplateProps {
  contentType: "buyer" | "seller" | "testimonial";
  //   formData: {propertyType: string} | {} | {};
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => {
  return <h1>email</h1>;
};

export default EmailTemplate;
