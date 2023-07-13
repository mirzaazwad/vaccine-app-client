import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const promiseOptions = async (inputValue) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/generic_medicine/search/${inputValue}`
    );
    const data = await response.json();

    const options = data.map((option) => ({
      value: option.generic_hospital_id,
      label: option.generic_hospital_name,
    }));

    return options;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const OnKeySearchDropdown = ({ onSelect }) => {
  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.value); // Call the onChange prop with the selected value
  };

  return (
    <>
      <AsyncSelect loadOptions={promiseOptions} onChange={handleSelect} />
    </>
  );
};

export default OnKeySearchDropdown;
