import BrigadierRequestItem from "@/components/brigadier/brigadierRequestsList/BrigadierRequestItem";
import { BrigadierRequestDto } from "@/types/dto/request/brigadierRequestDto";

function BrigadierRequestList({
  requests,
  handleDownload,
}: {
  requests: BrigadierRequestDto[];
  handleDownload: () => void;
}) {
  const listItems = requests.map((request) => (
    <BrigadierRequestItem key={request.id} request={request} handleDownload={() => handleDownload(request.id)} />
  ));

  return (
    <div className="w-full bg-white p-2 md:p-12 rounded">
      <div className="header flex items-end justify-between md:mb-8">
        <div className="title">
          <p className="md:text-4xl text-xl font-bold text-gray-700 mb-4">Заявки</p>
          <p className="md:text-xl text-sm font-light text-gray-400">
            Здесь отображаются назначенные вам заявки. Для обновления статуса заявки и загрузки отчетности для контроля
            качества нажмите на иконку карандаша. Для загрузки отчета по заявке в .docx нажмите зеленую иконку
            скачивания.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {listItems.length > 0 ? (
          listItems
        ) : (
          <p className="md:text-xl text-sm font-light text-gray-400">Здесь будут отображаться назначенные вам заявки</p>
        )}
        {/* <BrigadierRequest
          address="Address"
          comment="You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything."
          stage={3}
        /> */}
      </div>
    </div>
  );
}

export default BrigadierRequestList;
