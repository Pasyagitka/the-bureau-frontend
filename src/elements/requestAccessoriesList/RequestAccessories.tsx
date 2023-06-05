import { RequestAccessoryDto } from "@/types/dto/request/requestAccessoriesDto";
import RequestAccessoriesItem from "./RequestAccessoriesItem";

function RequestAccessories({ accessories = [] }: { accessories: Array<RequestAccessoryDto> }) {
  const listItems = accessories?.map((item) => <RequestAccessoriesItem key={item.id} accessory={item} />);

  return (
    <div className="container flex flex-col mx-auto items-center justify-center bg-white rounded-lg shadow mb-4">
      <ul className="flex flex-col divide divide-y w-11/12">{listItems}</ul>
    </div>
  );
}

export default RequestAccessories;
