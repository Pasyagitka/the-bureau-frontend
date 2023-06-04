/* eslint-disable jsx-a11y/label-has-associated-control */
import { SelectPicker } from "rsuite";

function Select({
  label,
  data,
  value,
  defaultValue,
  searchable,
  cleanable,
  disabledItemValues,
  onChange,
}: {
  label: string;
  data: unknown;
  value: Array<unknown>;
  defaultValue?: unknown;
  searchable?: boolean;
  cleanable?: boolean;
  disabledItemValues?: [];
  onChange: () => void;
}) {
  return (
    <>
      <label className="block mb-2 text-sm">{label}</label>
      <SelectPicker
        value={value}
        searchable={searchable}
        cleanable={cleanable}
        onChange={onChange}
        defaultValue={defaultValue}
        data={data}
        block
        placeholder={label}
        disabledItemValues={disabledItemValues}
      />
    </>
  );
}

Select.defaultProps = {
  defaultValue: null,
  searchable: true,
  cleanable: false,
  disabledItemValues: [],
};

export default Select;
