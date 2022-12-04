import BrigadierRequest from "@/components/brigadierRequest/BrigadierRequest";

function BrigadierRequests() {
  return (
    <div className="w-full bg-white p-12 rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Client Requests</p>
          <p className="text-2xl font-light text-gray-400">Description...</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        <BrigadierRequest
          address="Address"
          comment="You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything."
          stage={3}
        />
      </div>
    </div>
  );
}

export default BrigadierRequests;
