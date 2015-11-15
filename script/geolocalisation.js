/**
 * Created by BENATHMANE on 09/11/2015.
 */
var displayCoords, myAddress;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        displayCoords.innerHTML="Geolocation API not supported by your browser.";
    }
}


// Called when position is available
function showPosition(position) {
    showOnGoogleMap(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

}

var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;

function initialize() {

    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(48.859064, 2.341718);
    var mapOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    document.getElementById('map_canvas').style.visibility='hidden';
}

function showOnGoogleMap(latlng) {

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                map.setZoom(11);
                marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);

                // Display address as text in the page
                document.getElementById('map_canvas').style.visibility='visible';
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
}