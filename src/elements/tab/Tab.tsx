import accessoryIcon from "icons/nut-and-bolt.png";
import toolIcon from "icons/full-tool-storage-box-.png";
import equipmentIcon from "icons/external-radiator-interior-flaticons-flat-flat-icons.png";
import TabItem from "./TabItem";

function Tab() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 w-full h-fit">
      <TabItem title="Комплектующие" link="accessories" image={accessoryIcon} />
      <TabItem title="Инструменты" link="tools" image={toolIcon} />
      <TabItem title="Оборудование" link="equipment" image={equipmentIcon} />
    </ul>
  );
}

export default Tab;
