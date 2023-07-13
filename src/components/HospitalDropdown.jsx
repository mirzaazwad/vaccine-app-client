import React, { useEffect, useState } from "react";
import axios from "axios";

const HospitalDropdown = ({ onSelect }) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const getHospitals = async () => {
    try {
      const response = await axios.get(
        "https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/hospital/view_hospitals"
      );
      setDropdownOptions(response.data.hospital_info || response.data.data);
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  useEffect(() => {
    getHospitals();
  }, []);

  const handleSelectHospital = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = dropdownOptions.find(
      (option) => option._id === selectedValue
    );
    if (selectedOption) {
      onSelect(selectedOption._id);
      console.log(selectedOption.hospital_name);
    }
  };

  return (
    <>
      <label
        htmlFor="hospitalDropdown"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select a hospital
      </label>
      <select
        id="hospitalDropdown"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleSelectHospital}
      >
        <option value="" disabled selected>
          Choose a hospital
        </option>
        {dropdownOptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.hospital_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default HospitalDropdown;
