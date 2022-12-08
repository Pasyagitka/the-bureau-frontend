import RequestEquipment from "@/components/request/requestEquipment/RequestEquipment";
import BrigadierSmall from "@/elements/brigadierSmall/BrigadierSmall";
import RequestTimeline from "@/elements/requestTimeline/RequestTimeline";
import StageBadge from "@/elements/stageBadge/StageBadge";

function ClientRequestItem({ address, comment, stage }: { address: string; comment: string; stage: number }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-between">
        <div className="w-2/6 p-4">
          <RequestEquipment />
        </div>
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{address}</h1>
          <p className="mt-2 text-gray-600 text-sm">{comment}</p>
          <div className="flex flex-wrap items-center gap-2 my-5">
            <StageBadge stage={stage} />
          </div>
          <div className="flex item-center justify-between mt-3">
            <RequestTimeline />
          </div>
        </div>
        <div className="w-1/6 p-4">
          <BrigadierSmall />
        </div>
      </div>
    </div>
  );
}

export default ClientRequestItem;
