import React, { useState } from "react";
import countryCodeData from "./countryCodeData";
import Select, { components } from "react-select";

const customStyles = {
  option: (provided, state) => ({
    width: 300,
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: 70,
    fontSize: "15px",
    padding: "0 0 0 0",
    height: "47px",
  }),
  indicatorSeparator:
    (styles) => ({ display: 'none' }),
}

const CountryInput = () => {
  const countryCode = countryCodeData;
  const [code, setCode] = useState(countryCode[97].dial_code);

  const onchangeSelect = (item) => {
    setCode(item.dial_code);
  };
  const options = countryCodeData;
  const SingleValue = (props) => (
    <components.SingleValue {...props}>
      {props.data.dial_code}
    </components.SingleValue>
  );

  return (
    <div className="select_country">
      <Select
        styles={customStyles}
        onChange={onchangeSelect}
        options={options}
        components={{ SingleValue }}
        getOptionValue={(option) => option.dial_code}
        getOptionLabel={(option) => option.name + " " + option.dial_code}
        defaultValue={countryCode[97]}
      />
    </div>
  );
};

export default CountryInput;
