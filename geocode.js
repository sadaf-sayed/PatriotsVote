// Define your polling locations with pre-defined latitudes and longitudes
const pollingLocations = [
  { name: "Mt. Vernon Governmental Center", address: "2511 Parkers Lane Alexandria, 22306", lat: 38.85411945, lon: -77.07698375239924 },
  { name: "Fairfax County Government Center", address: "12000 Government Center Pkwy Fairfax 22035", lat: 38.7416188, lon: -77.35682190755682 },
  { name: "North County Governmental Center", address: "1801 Cameron Glen Drive Reston, 20190", lat: 38.9632474, lon: -77.36028261845259},
  { name: "Burke Centre Library", address: "5935 Freds Oak Road, Burke 22015", lat: 38.7874391, lon: -77.31712384341408 },
  { name: "Centreville Regional Library", address: "14200 St. Germain Drive, Centreville 20121", lat: 38.83746025, lon: -77.44085763433782 },
  { name: "Franconia Governmental Center", address: "6121 Franconia Rd, Alexandria 22310", lat: 38.78092565, lon: -77.14795225046302 },
  { name: "Great Falls Library", address: "9830 Georgetown Pike, Great Falls 22066", lat: 38.9983211, lon: -77.28695566577616 },
  { name: "Herndon-Fortnightly Library", address: "768 Center Street, Herndon 20170", lat: 38.971830499999996, lon: -77.38710277994139 },
  { name: "Lorton Community Center", address: "9520 Richmond Highway, Lorton 22079", lat: 38.69870605, lon: -77.21363995621178 },
  { name: "Mason Governmental Center", address: "6507 Columbia Pike, Annandale 22003", lat: 38.837531850000005, lon: -77.16393220376068 }
];


// Geocode address and find the nearest polling location
function geocodeAddress() {
    var address = document.getElementById('addressInput').value;
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            var userLocation = data[0];
            var userLat = parseFloat(userLocation.lat);
            var userLon = parseFloat(userLocation.lon);

            let nearestLocation = null;
            let shortestDistance = Infinity;

            pollingLocations.forEach(location => {
                let distance = getDistance(userLat, userLon, location.lat, location.lon);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    nearestLocation = location;
                }
            });

          if (nearestLocation) {
              // Update the textbox with the nearest polling place's information, prefixed with "Polling Location: "
              document.getElementById('nearestPollingPlace').value = `Polling Location: ${nearestLocation.name}, ${nearestLocation.address}`;

              // Optionally, add a marker for the nearest location
              map.eachLayer(function(layer) {
                  if (!!layer.toGeoJSON) {
                      map.removeLayer(layer);
                  }
              });
              L.marker([nearestLocation.lat, nearestLocation.lon]).addTo(map)
                  .bindPopup(`${nearestLocation.name}<br>${nearestLocation.address}`)
                  .openPopup();
              map.setView([nearestLocation.lat, nearestLocation.lon], 13);
          }
        } else {
            alert("Your address was not found.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while looking up the address.");
    });
}

// Haversine formula to calculate distance
function getDistance(lat1, lon1, lat2, lon2) {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    var R = 6371; // Earth radius in km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}
