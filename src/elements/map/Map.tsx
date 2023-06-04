import { FullscreenControl, Placemark, YMaps, Map as YandexMap, ZoomControl } from "@pbe/react-yandex-maps";
import { requestStatusesColorsTable } from "@/types/enum/request-statuses.enum";
import { RequestDto } from "@/types/dto/request/requestDto";

function Map({ requests }: { requests: Array<RequestDto> }) {
  const placemarks = requests?.map((request) => (
    <Placemark
      key={request.id}
      geometry={[request.address.lat, request.address.lon]}
      properties={{ iconContent: `№${request.id}` }}
      options={{
        preset: `islands#${requestStatusesColorsTable[request.status]}StretchyIcon`,
        hasHint: true,
        openHintOnHover: true,
      }}
      onClick={() => window.open(`admin/requests/${Number(request.id)}`)}
    />
  ));
  return (
    <div className="container w-full my-6">
      <YMaps>
        <div className="my-6">
          <p className="text-2xl font-bold text-gray-700 mb-4">Заявки на карте</p>
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
