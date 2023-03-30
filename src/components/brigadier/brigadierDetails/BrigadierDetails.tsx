import AccentButton from "@/elements/buttons/AccentButton";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import DetailsItem from "../../request/requestDetails/DetailsItem";

function BrigadierInfo({ brigadier }: { brigadier: BrigadierDto }) {
  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12" />
      <div className="title">
        <p className="text-4xl font-bold text-gray-800 mb-4">Информация о бригадире</p>
        {/* <p className="text-2xl font-light text-gray-400">Description...</p> */}
        <AccentButton to={`update/${brigadier.id}`} title="Редактировать" />
      </div>
      <div className="border-t border-gray-200 mt-4">
        <dl>
          <DetailsItem
            title="ФИО"
            value={`${brigadier.surname} ${brigadier.firstname} ${brigadier.patronymic}`}
            isDark
          />
          <DetailsItem title="Контактный номер" value={`+${brigadier.contactNumber}`} />
        </dl>
      </div>
    </div>
  );
}

export default BrigadierInfo;
