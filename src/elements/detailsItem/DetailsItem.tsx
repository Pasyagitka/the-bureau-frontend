function DetailsItem({ title, value, isDark }: { title: string; value: string; isDark?: boolean }) {
  return (
    <div
      className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:text-lg sm:px-6 ${isDark ? "bg-gray-50" : "bg-white"}`}
    >
      <dt className="text-sm font-medium md:text-lg text-gray-500">{title || ""}</dt>
      <dd className="mt-1 text-sm md:text-lg text-gray-900 sm:col-span-2 sm:mt-0">{value || ""}</dd>
    </div>
  );
}

DetailsItem.defaultProps = {
  isDark: false,
};

export default DetailsItem;
