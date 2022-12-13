import TabItem from "./TabItem";

function Tab() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 w-full h-fit">
      <TabItem title="Accessories" link="accessories" image="https://img.icons8.com/emoji/512/nut-and-bolt.png" />
      <TabItem title="Tools" link="tools" image="https://img.icons8.com/3d-fluency/512/full-tool-storage-box-.png" />
      <TabItem
        title="Equipment"
        link="equipment"
        image="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-radiator-interior-flaticons-flat-flat-icons.png"
      />
    </ul>
  );
}

export default Tab;
