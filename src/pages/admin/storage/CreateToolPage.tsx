import SubmitButton from "@/elements/buttons/SubmitButton";
import InputWithLabel from "@/elements/inputs/InputWithLabel";
import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/stage";
import { create } from "@/redux/actions/storage/tools";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateToolPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [stageId, setStageId] = useState(1);

  const { stages } = useAppSelector((state) => state.stages);
  const stagesList = stages.map((i) => ({
    value: i.id,
    label: i.stage,
  }));

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const handleSubmit = async () => {
    const res = await dispatch(create({ name, stageId }));
    if (!res.error) {
      navigate(-1);
    }
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Добавить инструмент</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <InputWithLabel placeholder="наименование" onChange={(e) => setName(e.target.value)} />
              <Select
                data={stagesList}
                value={stageId}
                defaultValue={stageId}
                onChange={setStageId}
                searchable={false}
                label="стадия отделки"
              />
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateToolPage;
