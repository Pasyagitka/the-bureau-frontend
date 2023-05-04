import { RequestAccessoryDto } from "@/types/dto/request/requestAccessoriesDto";

function RequestAccessoriesItem({ accessory }: { accessory: RequestAccessoryDto }) {
  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-2">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-sm">{accessory.sku}</div>
          <div className="text-gray-600 text-sm">{accessory.name}</div>
        </div>
        <div className="text-gray-600 text-xs">{accessory.quantity}p</div>
      </div>
    </li>
  );
}

export default RequestAccessoriesItem;
