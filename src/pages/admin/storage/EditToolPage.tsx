import SubmitButton from "@/elements/buttons/SubmitButton";
import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/stage";
import { update, get } from "@/redux/actions/storage/tools";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditToolPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [name, setName] = useState<string | null>();
  const [stageId, setStageId] = useState<number | null>();

  const { tool } = useAppSelector((state) => state.tools);

  const { stages } = useAppSelector((state) => state.stages);
  const stagesList = stages.map((i) => ({
    value: i.id,
    label: i.stage,
  }));

  useEffect(() => {
    dispatch(getAll());
    dispatch(get(Number(params.id)));
  }, [dispatch]);

  useEffect(() => {
    setName(tool.name);
    setStageId(tool.stageId);
  }, [tool]);

  const handleSubmit = async () => {
    const res = await dispatch(update({ id: params.id, updateToolDto: { name, stageId } }));
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
              <h1 className="text-gray-600">Редактировать инструмент</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
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

export default EditToolPage;
