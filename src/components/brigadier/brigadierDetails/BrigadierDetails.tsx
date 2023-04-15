import AccentButton from "@/elements/buttons/AccentButton";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import noImage from "images/noImage.png";
import DetailsItem from "../../request/requestDetails/DetailsItem";

function BrigadierInfo({ brigadier }: { brigadier: BrigadierDto }) {
  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12" />
      <div className="title">
        <p className="text-4xl font-bold text-gray-800 mb-4">Личная информация</p>
        {/* <p className="text-2xl font-light text-gray-400">Description...</p> */}
        <AccentButton to="update" title="Редактировать" />
      </div>
      <div className="border-t border-gray-200 mt-4">
        <div className="flex flex-row">
          <div className="flex flex-col w-full">
            <DetailsItem
              title="ФИО"
              value={`${brigadier.surname} ${brigadier.firstname} ${brigadier.patronymic}`}
              isDark
            />
            <DetailsItem title="Email" value={brigadier?.user?.email} />
            <DetailsItem title="Контактный номер" value={`+${brigadier.contactNumber}`} isDark />
          </div>
          <div
            className="w-1/3 bg-contain bg-center"
            style={{
              backgroundImage: `url(${brigadier?.avatarUrl || noImage})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BrigadierInfo;
