import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    { address: "centrumgrupa@kosciolzoe.pl", lat: 54.521144, lng: 18.539215 },
    { address: "witominogrupa@kosciolzoe.pl", lat: 54.497854, lng: 18.509674 },
    { address: "grabowekgrupa@kosciolzoe.pl", lat: 54.531846, lng: 18.497584 },
    { address: "karwinygrupa@kosciolzoe.pl", lat: 54.470571, lng: 18.494394 },
    {
      address: "dabrowagrupa@kosciolzoe.pl, dabrowa2grupa@kosciolzoe.pl",
      lat: 54.474104,
      lng: 18.462662,
    },
    { address: "oksywiegrupa@kosciolzoe.pl", lat: 54.553412, lng: 18.530834 },
    {
      address: "wiczlinogrupa@kosciolzoe.pl (grupa młodzieżowa 18-30 lat)",
      lat: 54.48901,
      lng: 18.426127,
    },
    {
      address: "srodmiesciegrupa@kosciolzoe.pl",
      lat: 54.347725,
      lng: 18.65651,
    },
    { address: "przymorzegrupa@kosciolzoe.pl", lat: 54.421152, lng: 18.586926 },
    { address: "oliwagrupa@kosciolzoe.pl", lat: 54.405072, lng: 18.532008 },
    { address: "wrzeszczgrupa@kosciolzoe.pl", lat: 54.375398, lng: 18.609347 },
    {
      address: "stogi-chelmgrupa@kosciolzoe.pl",
      lat: 54.361215,
      lng: 18.712592,
    },
    { address: "oruniagrupa@kosciolzoe.pl", lat: 54.328244, lng: 18.561576 },
    { address: "bojanogrupa@kosciolzoe.pl", lat: 54.465201, lng: 18.383528 },
    {
      address: "chwaszczynogrupa@kosciolzoe.pl",
      lat: 54.419031,
      lng: 18.402272,
    },
    { address: "redagrupa@kosciolzoe.pl", lat: 54.605312, lng: 18.34736 },
    { address: "rumiagrupa@kosciolzoe.pl", lat: 54.571053, lng: 18.387772

  },
    { address: "zukowogrupa@kosciolzoe.pl", lat: 54.342106, lng: 18.364899 },
  ];

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <div className="map-container">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ address, lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <p>{infoWindowData.address}</p>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
