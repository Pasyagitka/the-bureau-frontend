import SubmitButton from "@/elements/buttons/SubmitButton";
import Input from "@/elements/inputs/Input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, update } from "@/redux/actions/stage";
import { useEffect, useState } from "react";

function Settings() {
  const dispatch = useAppDispatch();

  function loadAll() {
    dispatch(getAll());
  }
  useEffect(loadAll, [dispatch]);

  const mountingSettings = useAppSelector((state) => state.stages.stages);

  const handleSubmit = async () => {
    console.log(mountingSettings[0].mountingPrice, clean);
    if (mountingSettings[0].mountingPrice !== clean)
      await dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(clean) } }));
    if (mountingSettings[1].mountingPrice !== rough)
      await dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(rough) } }));
    if (mountingSettings[2].mountingPrice !== both)
      await dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(both) } }));
  };

  const [clean, setClean] = useState();
  const [rough, setRough] = useState();
  const [both, setBoth] = useState();

  useEffect(() => {
    setClean(mountingSettings[0]?.mountingPrice);
    setRough(mountingSettings[1]?.mountingPrice);
    setBoth(mountingSettings[2]?.mountingPrice);
  }, [mountingSettings]);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Изменение настроек</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Изменение настроек приложения</p>
      </div>
      {/* <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Данные для входа</h3>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <Input placeholder="Пароль администоратора" />
        </div>
      </div> */}
      <div className="px-4 py-5 sm:px-6 my-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Цены на монтажные работы</h3>
        {/* <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{mountingSettingsInputs}</div> */}
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <Input
            placeholder={mountingSettings[0]?.stage}
            label={`${mountingSettings[0]?.stage} (цена за монтаж одгого прибора)`}
            defaultValue={clean}
            onChange={(e) => setClean(e.target.value)}
          />
          <Input
            placeholder={mountingSettings[1]?.stage}
            label={`${mountingSettings[1]?.stage} (цена за монтаж одгого прибора)`}
            defaultValue={rough}
            onChange={(e) => setRough(e.target.value)}
          />
          <Input
            placeholder={mountingSettings[2]?.stage}
            label={`${mountingSettings[2]?.stage} (цена за монтаж одгого прибора)`}
            defaultValue={both}
            onChange={(e) => setBoth(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div className="flex justify-evenly my-6">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default Settings;
