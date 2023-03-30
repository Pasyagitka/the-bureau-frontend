function SubmitButton({ title, handleSubmit }: { title: string; handleSubmit: () => void }) {
  return (
    <button
      type="button"
      onClick={() => handleSubmit()}
      className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    >
      {title}
    </button>
  );
}

export default SubmitButton;
