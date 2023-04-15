import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import noImage from "images/noImage.png";

function BrigadierItem({
  brigadier,
  clickTitle,
  handleClick,
}: {
  brigadier: BrigadierDto;
  clickTitle: string;
  handleClick: () => void;
}) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-full w-11/12 md:w-100 cursor-pointer">
      <div className="flex max-w-md bg-white shadow-lg h-full rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${brigadier.avatarUrl || noImage})`,
          }}
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {brigadier.surname} {brigadier.firstname} {brigadier.patronymic}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">{brigadier?.user?.email}</p>
          <p className="mt-2 text-gray-600 text-sm">+{brigadier.contactNumber}</p>
          <div className="flex item-center justify-between mt-3">
            {/* <h1 className="text-gray-700 font-bold text-xl">бригадир</h1> */}
            <button type="button" onClick={() => handleClick()}>
              {clickTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrigadierItem;
