//Global Variable
var MAPAPP = {};
MAPAPP.markers = [];
MAPAPP.currentInfoWindow;
MAPAPP.pathName = window.location.pathname;

$(document).ready(function() {
    initialize();
    populateMarkers(MAPAPP.pathName);
});


function initialize() {
    var center = new google.maps.LatLng(37.536475, -77.430496);
    var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center,
    };
    this.map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
};


function populateMarkers(dataType) {
    apiLoc = typeof apiLoc !== 'undefined' ? apiLoc : '/data/' + dataType + '.json';
    // AJAX Call
    $.getJSON(apiLoc, function(data) {
        
        //Map Markers
        $.each(data, function(i, ob) {
            var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(this.location.coordinates[0], this.location.coordinates[1]),
                name: this.name,
                details: this.details,
                website: this.website,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
    	
            var content = '<h1 class="mt0"><a href="' + marker.website + '" target="_blank" title="' + marker.name + '">' + marker.name + '</a></h1><p>' + marker.details + '</p>';
        	marker.infowindow = new google.maps.InfoWindow({
            	content: content,
            	maxWidth: 400
            });
    	
            google.maps.event.addListener(marker, 'click', function() {
                if (MAPAPP.currentInfoWindow) MAPAPP.currentInfoWindow.close();
                marker.infowindow.open(map, marker);
                MAPAPP.currentInfoWindow = marker.infowindow;
            });
            MAPAPP.markers.push(marker);
        });
    });
};
