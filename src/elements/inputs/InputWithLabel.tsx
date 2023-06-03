/* eslint-disable jsx-a11y/label-has-associated-control */
function InputWithLabel({
  placeholder,
  label,
  onChange,
  defaultValue,
  value,
  type,
}: {
  placeholder: string;
  label: string;
  onChange: () => void;
  defaultValue?: string;
  value: string;
  type: string;
}) {
  return (
    <div>
      <div className="relative">
        <label className="block mb-2 text-sm font-medium text-gray-900 ">{label || placeholder}</label>
        <input
          type={type}
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
        />
      </div>
    </div>
  );
}

InputWithLabel.defaultProps = {
  defaultValue: "",
  type: "text",
};

export default InputWithLabel;
