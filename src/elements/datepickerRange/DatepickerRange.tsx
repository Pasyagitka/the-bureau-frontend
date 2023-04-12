import Datepicker from "react-tailwindcss-datepicker";

function DatepickerRange({ value, handleValueChange }) {
  return (
    <Datepicker
      placeholder="Дата монтажа"
      primaryColor="lime"
      value={value}
      onChange={handleValueChange}
      startFrom={new Date()}
      useRange={false}
      asSingle
    />
  );
}

export default DatepickerRange;
