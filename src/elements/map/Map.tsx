import { useAppDispatch, useAppSelector } from "@/hooks";
import { getRequestGeocodeYandex } from "@/redux/actions/requests";
import { FullscreenControl, Placemark, YMaps, Map as YandexMap } from "@pbe/react-yandex-maps";

function Map({ requests }: { requests: Array }) {
  const dispatch = useAppDispatch();

  function getGeocode() {
    dispatch(getRequestGeocodeYandex(searchQuery));
  }
  // useEffect(getGeocode, [requests]);

  const { coords } = useAppSelector((state) => state.requests);

  const placemarks = requests?.map((request) => {
    const [y, x] = coords.split(" ");
    <Placemark geometry={[x, y]} />;
  });
  return (
    <div className="container w-full my-6">
      <YMaps>
        <div className="my-6">
          <p className="text-2xl font-bold text-gray-800 mb-4">Заявки на карте</p>
          <YandexMap
            defaultState={{ center: [53.902284, 27.561831], zoom: 12 }}
            width="100%"
            height="500px"
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            <Placemark
              geometry={[53.86286, 27.530309]}
              properties={{ iconContent: "№25" }}
              options={{ preset: "islands#darkGreenStretchyIcon" }}
            />
            ;{placemarks}
            <FullscreenControl />
          </YandexMap>
        </div>
      </YMaps>
    </div>
  );
}

export default Map;
