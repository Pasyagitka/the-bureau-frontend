let image = "https://play-lh.googleusercontent.com/AmKSpZt_rynhOO0ID1eS0gqeW3DFzoH6KNZkAAgepQ0t9MDRQTmil-nlY5GqkZ_7El0";

function BrigadierSmall() {
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4 w-36">
      <div className="flex-col  flex justify-center items-center">
        <div className="flex-shrink-0">
          <a href="/" className="block relative">
            <img alt="profil" src={image} className="mx-auto object-cover rounded-full h-16 w-16 " />
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <span className="text-gray-600 text-sm font-medium">S.A. Siarheyeu</span>
          <span className="text-gray-400 text-xs">Your brigadier</span>
        </div>
      </div>
    </div>
  );
}

export default BrigadierSmall;
