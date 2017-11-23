/* global google */
(function() {
    var markerImage = new google.maps.MarkerImage(
            '../img/contacts/map-marker.svg',
            new google.maps.Size(46, 57),
            new google.maps.Point(0, 0),
            new google.maps.Point(23, 57)
        );
		var objects = [
            {
                str: 'Test!',
                coords: new google.maps.LatLng(59.945396, 30.382825)
            },
            {
                str: 'Test2!',
                coords: new google.maps.LatLng(59.888716, 30.311712)
            },
            {
                str: 'Test3!',
                coords: new google.maps.LatLng(59.971920, 30.313874)
            },
            {
                str: 'Test4!',
                coords: new google.maps.LatLng(59.917428, 30.491673)
            }
        ];
		var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            scrollwheel: false,
            center: {
                lat: 59.939764,
                lng: 30.350236                
            }
        })
		for (var i = 0; i < objects.length; i++) {
    	var placeMark = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: objects[i].coords,
            icon: markerImage,
            map: map,
            title: objects[i].str
        })
    }
})()

// var map;
// var center = {lat: 59.939764, lng: 30.350236};
// function initMap() {    
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: center,
//         zoom: 8,
//         scrollwheel: false,
//     });
// }
// google.maps.event.addDomListener(window, 'load', initMap);