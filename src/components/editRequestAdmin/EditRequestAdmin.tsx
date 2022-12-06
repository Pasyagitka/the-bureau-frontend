import Button from "@/elements/button/Button";
import Select from "@/elements/select/Select";

function EditRequestAdmin() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Edit request</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">All request details.</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Mounting date</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-3">
          <input type="date" />
        </dd>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <Select />
      </div>
      <div className="flex justify-evenly">
        <Button text="Save" />
        <Button text="Cancel" />
      </div>
    </div>
  );
}

export default EditRequestAdmin;