let map, directionsService, directionsRenderer;
let sourceAutocomplete, desAutocomplete;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 24.4539, lng: 54.3773 },
        zoom: 13
    });
    google.maps.event.addListener(map, "click", function(event) {
        this.setOptions({ scrollwheel: true });
    });
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    sourceAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('source')
    );
    desAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('destination')
    );
}

function calcRoute() {
    var source = document.getElementById('source').value;
    var dest = document.getElementById('destination').value;

    let request = {
        origin: source,
        destination: dest,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
            const distance = result.routes[0].legs[0].distance.value / 1000; // in km
            const fare = calculateFare(distance);
            displayFare(distance, fare);
        }
    });
}

function calculateFare(distance) {
    const farePerKm = 1.82;
    const minimumFare = 12.0;
    const fare = distance * farePerKm;
    return fare < minimumFare ? minimumFare : fare;
}

function displayFare(distance, fare) {
    document.getElementById('modalDistance').innerText = `Total Distance: ${distance.toFixed(2)} km`;
    document.getElementById('modalFare').innerText = `Taxi Fare: AED ${fare.toFixed(2)}`;
    $('#fareModal').modal('show'); // Trigger the modal
}

Math.toRadians = function(degrees) {
    return degrees * Math.PI / 180;
};
