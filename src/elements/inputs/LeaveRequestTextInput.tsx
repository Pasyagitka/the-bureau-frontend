function LeaveRequestTextInput({
  placeholder,
  value,
  onChange,
  disabled,
}: {
  placeholder: string;
  value: string;
  onChange?: (e: unknown) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <div className=" relative ">
        <input
          type="text"
          id="user-info-name"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
          readOnly={disabled}
        />
      </div>
    </div>
  );
}

LeaveRequestTextInput.defaultProps = {
  onChange: () => null,
};

export default LeaveRequestTextInput;
