function TextInput({ placeholder, value }: { placeholder: string; value: string }) {
  return (
    <div>
      <div className=" relative ">
        <input
          type="text"
          id="user-info-name"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
}

export default TextInput;
