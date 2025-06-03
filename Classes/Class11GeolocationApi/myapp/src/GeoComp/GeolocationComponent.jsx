const GeolocationComponent = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({ ...location, error: 'Geolocation is not supported by your browser.' });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ ...location, error: error.message });
        }
      );
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Geolocation Example</h2>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Get My Location
      </button>
      {location.latitude && location.longitude && (
        <div className="mt-4">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      {location.error && (
        <p className="text-red-500 mt-2">Error: {location.error}</p>
      )}
    </div>
  );
};

export default GeolocationComponent