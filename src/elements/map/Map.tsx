import { FullscreenControl, YMaps, Map as YandexMap } from "@pbe/react-yandex-maps";

function Map() {
  return (
    <div className="container w-full my-12">
      <YMaps>
        <div className="my-12">
          <p className="text-2xl font-bold text-gray-800 mb-4">Заявки на карте</p>
          <YandexMap
            defaultState={{ center: [53.902284, 27.561831], zoom: 12 }}
            width="100%"
            height="500px"
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            <FullscreenControl />
          </YandexMap>
        </div>
      </YMaps>
    </div>
  );
}

export default Map;
