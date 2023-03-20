/* eslint-disable consistent-return */
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import BrigadierItem from "./BrigadierItem";

function BrigadierList({
  brigadiers = [],
  handleRemove,
  handleApprove,
}: {
  brigadiers: Array<BrigadierDto>;
  handleRemove: () => void;
  handleApprove: () => void;
}) {
  const listItems = brigadiers.map((brigadier) => {
    if (!brigadier?.user?.isActivated) return;
    return (
      <BrigadierItem
        key={brigadier.id}
        brigadier={brigadier}
        handleClick={() => handleRemove(brigadier?.user?.id)}
        clickTitle="Заблокировать"
      />
    );
  });
  const notApprovedlistItems = brigadiers.map((brigadier) => {
    if (brigadier?.user?.isActivated) return;
    return (
      <BrigadierItem
        key={brigadier.id}
        brigadier={brigadier}
        handleClick={() => handleApprove(brigadier?.user?.id)}
        clickTitle="Подтвердить"
      />
    );
  });
  return (
    <div className="w-full bg-white p-12 container  rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Бригадир</p>
          <p className="text-2xl font-light text-gray-400">Описание...</p>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{notApprovedlistItems}</div>
      </div>
      <hr />
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
      </div>
    </div>
  );
}

export default BrigadierList;
