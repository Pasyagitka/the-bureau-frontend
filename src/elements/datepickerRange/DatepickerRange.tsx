// import Datepicker from "react-tailwindcss-datepicker";

import { DatePicker } from "rsuite";

function DatepickerRange({ value, handleValueChange }) {
  return (
    // <Datepicker
    //   placeholder="Дата монтажа"
    //   primaryColor="lime"
    //   value={value}
    //   onChange={handleValueChange}
    //   startFrom={new Date()}
    //   useRange={false}
    //   asSingle
    // />
    <DatePicker style={{ width: 200 }} isoWeek value={value} onChange={handleValueChange} />
  );
}

export default DatepickerRange;
