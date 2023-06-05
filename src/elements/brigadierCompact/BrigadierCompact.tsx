import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import noImage from "images/noImage.png";

function BrigadierCompact({ brigadier }: { brigadier: BrigadierDto }) {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4 w-36 mx-auto">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <a className="block relative">
            <img
              alt="profil"
              src={brigadier.avatarUrl || noImage}
              className="mx-auto object-cover rounded-full h-16 w-16 "
            />
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-gray-600 text-sm font-medium">
            {`${brigadier?.surname} ${brigadier?.firstname} ${brigadier?.patronymic}`}
          </span>
          <span className="text-gray-400 text-xs">
            {(brigadier?.contactNumber && `+${brigadier?.contactNumber}`) || ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BrigadierCompact;
