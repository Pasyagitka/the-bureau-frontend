import SecondaryButton from "@/elements/buttons/SecondaryButton";
import SubmitButton from "@/elements/buttons/SubmitButton";
import InputWithLabel from "@/elements/inputs/InputWithLabel";
import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { create, exportAccessories, importAccessories } from "@/redux/actions/storage/accessories";
import { getAll } from "@/redux/actions/storage/equipment";
import { CreateAccessoryDto } from "@/types/dto/storage/accessories/createAccessoryDto";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Uploader } from "rsuite";
import documentIcon from "icons/document.png";
import { toast } from "react-toastify";

function CreateAccessoryPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { equipment } = useAppSelector((state) => state.equipment);

  const [name, setName] = useState();
  const [equipmentId, setEquipmentId] = useState(null);
  const [sku, setSku] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const equipmentList = equipment.map((i) => ({ label: i.type, value: i.id }));

  const handleSubmit = async () => {
    const item: CreateAccessoryDto = {
      sku,
      name,
      price,
      quantity: Number(quantity),
      equipmentId: Number(equipmentId),
    };
    const res = await dispatch(create(item));
    if (!res.error) {
      navigate(-1);
    }
  };

  const handleImport = async () => {
    let updateImportResult = null;
    if (fileInfo?.length > 0) {
      const formData = new FormData();
      formData.append(`file`, fileInfo[0].blobFile, fileInfo[0].name);
      updateImportResult = await dispatch(importAccessories({ file: formData }));
    } else {
      toast.error("Загрузите файл");
    }
  };

  const handleDownload = () => {
    dispatch(exportAccessories());
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Добавить комплектующие</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className="flex flex-col w-full gap-5 justify-between">
                <div className="flex flex-row">
                  <Uploader
                    listType="picture-text"
                    fileList={fileInfo}
                    accept="text/csv"
                    onChange={setFileInfo}
                    action=""
                    autoUpload={false}
                    draggable
                    className="w-full"
                  >
                    <SecondaryButton title="Выбрать файл .csv" style={{ width: "100%" }} />
                  </Uploader>
                  <div className="h-content">
                    <SubmitButton title="Импорт" handleSubmit={() => handleImport()} />
                  </div>
                </div>
                <SecondaryButton icon={documentIcon} title="Экспорт в .csv" onClick={() => handleDownload()} />
              </div>
              <InputWithLabel placeholder="Артикул" onChange={(e) => setSku(e.target.value)} />
              <InputWithLabel placeholder="Наименование" onChange={(e) => setName(e.target.value)} />
              <InputWithLabel placeholder="Цена за единицу" onChange={(e) => setPrice(e.target.value)} />
              <InputWithLabel placeholder="Количество" onChange={(e) => setQuantity(e.target.value)} />
              <div>
                <div className=" relative ">
                  <Select data={equipmentList} value={equipmentId} onChange={setEquipmentId} label="оборудование" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccessoryPage;
