/* eslint-disable jsx-a11y/label-has-associated-control */
import { SelectPicker } from "rsuite";

function Select({
  label,
  data,
  value,
  defaultValue,
  onChange,
}: {
  label: string;
  data: unknown;
  value: Array<unknown>;
  defaultValue?: unknown;
  onChange: () => void;
}) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
      <SelectPicker
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        data={data}
        block
        placeholder={label}
      />
    </>
  );
}

Select.defaultProps = {
  defaultValue: null,
};

export default Select;
