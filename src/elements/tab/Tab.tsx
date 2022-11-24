import TabItem from "./TabItem";

function Tab() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 w-full h-fit">
      <TabItem title="Accessories" link="accessories" />
      <TabItem title="Tools" link="tools" />
      <TabItem title="Equipment" link="equipment" />
    </ul>
  );
}

export default Tab;
