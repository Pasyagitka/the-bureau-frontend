import { RequestDto } from "@/types/dto/requestDto";
import { FullscreenControl, Placemark, YMaps, Map as YandexMap, ZoomControl } from "@pbe/react-yandex-maps";
import { colors } from "@/elements/calendar/Calendar";

function Map({ requests }: { requests: Array<RequestDto> }) {
  const placemarks = requests?.map((request) => (
    <Placemark
      key={request.id}
      geometry={[request.address.lat, request.address.lon]}
      properties={{ iconContent: `№${request.id}` }}
      options={{ preset: `islands#${colors[request.status]}StretchyIcon` }}
    />
  ));
  return (
    <div className="container w-full my-6">
      <YMaps>
        <div className="my-6">
          <p className="text-2xl font-bold text-gray-800 mb-4">Заявки на карте</p>
          <YandexMap
            defaultState={{ center: [53.902284, 27.561831], zoom: 12 }}
            width="100%"
            height="750px"
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            {placemarks}
            <FullscreenControl />
            <ZoomControl />
          </YandexMap>
        </div>
      </YMaps>
    </div>
  );
}

export default Map;
