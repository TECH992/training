## `About name property`

### [name] within square brackets is the computed property name. It means that the property name is not fixed but will be determined by the value of the name variable

### value on the right side of the colon : is the value you want to assign to the property

### For example, `if name has the value "email"`, [name]: `value effectively becomes "email": value.` So, it dynamically sets or updates the property in the object with the name specified by the name variable, and assigns it the value as its value
## `api integration for location`
 ## `React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error("Geolocation is not available in this browser");
    }

    function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      // Call the reverse geocoding function with the coordinates
      reverseGeocode(latitude, longitude);
    }
    
    function errorCallback(error) {
      console.error(`Error: ${error.message}`);
    }
    
    function reverseGeocode(latitude, longitude) {
    console.log(latitude, longitude)
      // Replace 'YOUR_API_KEY' with your actual API key
      const apiKey = 'AIzaSyD-tShZAVFog2sIEIZQzTDK7gGuZoh-qNE';
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    
      fetch(apiUrl)
        .then((response) => {
        console.log(response)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === 'OK' && data.results.length > 0) {
            const locationName = data.results[0].formatted_address;
            console.log(`Current Location: ${locationName}`);
          } else {
            console.error('No results found for reverse geocoding.');
          }
        })
        .catch((error) => {
          console.error('Error during reverse geocoding:', error);
        });
    }
  }, []); // Empty dependency array to run this effect only once
## ---------------------React-Router------------
`useNavigate() (state (state we are using data transefering through route ), path)`
`usePrams(it will help you to access data from urlParameter)`
`useLocation()(using retrieve state (state we are using data transferring through route ) Value from router)`
`useRouter() (Create Router)`
`Navigate (redirect to any route,state (state we are using data transferring through route ))`
`BrowserRouter`
`outlet(inject children into parent using  nesting route)`
`Route (create route, have to props 1. path=define your route path. 2.Element:here you have to define your component. whenever you call route path . it will render your defined element component)`
`Routes(define or Wrap all route inside route)`
`NavLink (sate, to( to will help to redirect using path), style((isActive)),)`
`Link(state, to( to will help to redirect using path) style((isActive)))`
`Nesting Route(Call Route inside Route)`
