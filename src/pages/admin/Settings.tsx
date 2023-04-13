import SubmitButton from "@/elements/buttons/SubmitButton";
import Input from "@/elements/inputs/Input";

function Settings() {
  const handleSubmit = () => {};
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Изменение настроек</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Изменение настроек приложения</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Данные для входа</h3>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <Input placeholder="Пароль администоратора" />
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6 my-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Цены на монтажные работы</h3>
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
          <Input placeholder="Черновая отделка" label="Черновая отделка (цена за прибор)" />
          <Input placeholder="Чистовая отделка" label="Чистовая отделка (цена за прибор)" />
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
