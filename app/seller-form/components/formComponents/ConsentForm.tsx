import React from "react";

type Props = {
  setFormData: React.Dispatch<
    React.SetStateAction<{
      phoneNumber: string;
      emailAddress: string;
    }>
  >;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
};

function ConsentForm({}: Props) {
  return <div>ConsentForm</div>;
}

export default ConsentForm;
