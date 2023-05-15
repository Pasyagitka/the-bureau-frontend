import SubmitButton from "@/elements/buttons/SubmitButton";
import InputWithLabel from "@/elements/inputs/InputWithLabel";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, update } from "@/redux/actions/stage";
import { changePassword } from "@/redux/actions/users";
import { useEffect, useState } from "react";

function SettingsPage() {
  const dispatch = useAppDispatch();

  function loadAll() {
    dispatch(getAll());
  }
  useEffect(loadAll, [dispatch]);

  const mountingSettings = useAppSelector((state) => state.stages.stages);

  const [clean, setClean] = useState();
  const [rough, setRough] = useState();
  const [both, setBoth] = useState();

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const handleSubmit = () => {
    if (mountingSettings[0].mountingPrice !== clean)
      dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(clean) } }));
    if (mountingSettings[1].mountingPrice !== rough)
      dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(rough) } }));
    if (mountingSettings[2].mountingPrice !== both)
      dispatch(update({ id: mountingSettings[0].id, data: { mountingPrice: Number(both) } }));
    if (oldPassword && newPassword) {
      dispatch(changePassword({ changePasswordDto: { oldPassword, newPassword } }));
    }
  };

  useEffect(() => {
    setClean(mountingSettings[0]?.mountingPrice);
    setRough(mountingSettings[1]?.mountingPrice);
    setBoth(mountingSettings[2]?.mountingPrice);
  }, [mountingSettings]);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg min-h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Изменение настроек</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Изменение настроек приложения</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Данные для входа</h3>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <InputWithLabel
            placeholder="Старый пароль"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <InputWithLabel
            placeholder="Новый пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6 my-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Цены на монтажные работы</h3>
        {/* <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{mountingSettingsInputs}</div> */}
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <InputWithLabel
            placeholder={mountingSettings[0]?.stage}
            label={`${mountingSettings[0]?.stage} (цена за монтаж одного прибора)`}
            defaultValue={clean}
            value={clean}
            onChange={(e) => setClean(e.target.value)}
          />
          <InputWithLabel
            placeholder={mountingSettings[1]?.stage}
            label={`${mountingSettings[1]?.stage} (цена за монтаж одного прибора)`}
            defaultValue={rough}
            value={rough}
            onChange={(e) => setRough(e.target.value)}
          />
          <InputWithLabel
            placeholder={mountingSettings[2]?.stage}
            label={`${mountingSettings[2]?.stage} (цена за монтаж одного прибора)`}
            defaultValue={both}
            value={both}
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

export default SettingsPage;
