import React from "react";
import Form from "./components/Form";
import FormHeader from "./components/FormHeader";

const page = () => {
  return (
    <div className="max-w-[30rem] mx-auto flex flex-col gap-8 p-6 mb-[2rem] bg-blue rounded-md text-white shadow-md">
      <FormHeader />
      <Form />
    </div>
  );
};

export default page;
