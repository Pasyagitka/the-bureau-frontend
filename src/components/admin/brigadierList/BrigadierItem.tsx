import Rating from "@/elements/rating/Rating";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";

const url = "https://thumbs.dreamstime.com/b/construction-worker-11554512.jpg";

function BrigadierItem({ brigadier, handleRemove }: { brigadier: BrigadierDto; handleRemove: () => void }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-11/12 md:w-100 cursor-pointer m-auto">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(${url})`,
          }}
        />
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{brigadier.surname}</h1>
          <p className="mt-2 text-gray-600 text-sm">{brigadier.email}</p>
          <p className="mt-2 text-gray-600 text-sm">{brigadier.contactNumber}</p>
          <Rating />
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">...</h1>
            <button type="button" onClick={() => handleRemove()}>
              Block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrigadierItem;
