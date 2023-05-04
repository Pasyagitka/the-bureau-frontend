// import Datepicker from "react-tailwindcss-datepicker";

import dayjs from "dayjs";
import { DatePicker } from "rsuite";

function CustomDatepicker({ value, defaultValue, handleValueChange }) {
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
    <DatePicker
      appearance="default"
      style={{ width: 200 }}
      shouldDisableDate={(date) => dayjs(date).isBefore(new Date())}
      isoWeek
      value={value}
      defaultValue={defaultValue}
      onChange={handleValueChange}
      format="dd MMM yyyy"
      placeholder="Дата монтажа"
      editable={false}
      oneTap
    />
  );
}

export default CustomDatepicker;
