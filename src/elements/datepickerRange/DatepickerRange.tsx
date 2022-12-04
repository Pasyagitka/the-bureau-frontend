import Datepicker from "react-tailwindcss-datepicker";

function DatepickerRange({ value, handleValueChange }) {
  return <Datepicker placeholder="Set mounting date" primaryColor="lime" value={value} onChange={handleValueChange} />;
}

export default DatepickerRange;
