function RegisterTextInput({
  placeholder,
  label,
  value,
  onChange,
}: {
  placeholder?: string;
  label: string;
  value: string;
  onChange: (e: unknown) => void;
}) {
  return (
    <div className="relative w-full mb-3">
      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        {label}
      </label>
      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        placeholder={placeholder || label}
        defaultValue={value}
        value={value || ""}
        style={{ transition: "all .15s ease" }}
        onChange={onChange}
      />
    </div>
  );
}

export default RegisterTextInput;
