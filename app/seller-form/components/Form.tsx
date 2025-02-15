"use client";
import React, { useState } from "react";
import CurrentLiving from "./formComponents/CurrentLiving";

const Form = () => {
  const [formIndex, setFormIndex] = useState(0);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   price: "",
  //   beds: "",
  //   baths: "",
  //   sqft: "",
  //   lotSize: "",
  //   yearBuilt: "",
  //   hoa: "",
  //   propertyType: "",
  //   parking: "",
  //   heating: "",
  //   cooling: "",
  //   description: "",
  //   photos: [],
  // });
  const inputDisplay = () => {
    switch (formIndex) {
      case 0:
        return <CurrentLiving />;
      case 1:
        return (
          <div>
            <h2>Step 2</h2>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip" />
            <button onClick={() => setFormIndex(2)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 3</h2>
            <input type="text" placeholder="Price" />
            <input type="number" placeholder="Beds" />
            <input type="number" placeholder="Baths" />
            <input type="number" placeholder="Sqft" />
            <input type="number" placeholder="Lot Size" />
            <input type="number" placeholder="Year Built" />
            <input type="number" placeholder="HOA" />
            <button onClick={() => setFormIndex(3)}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 4</h2>
            <input type="text" placeholder="Property Type" />
            <input type="text" placeholder="Parking" />
            <input type="text" placeholder="Heating" />
            <input type="text" placeholder="Cooling" />
            <textarea placeholder="Description" />
            <button onClick={() => setFormIndex(4)}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 5</h2>
            <input type="file" />
            <button onClick={() => setFormIndex(5)}>Next</button>
          </div>
        );
    }
  };
  return <form>{inputDisplay()}</form>;
};

export default Form;
