Template.dashboard.rendered = function() {
	
};


Template.dashboard.onRendered(function() {
  GoogleMaps.load();
});


Template.dashboard.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(42.9793380,-78.8155150),
        zoom: 15
      };
    }
  }
});

Template.dashboard.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var myLatLng = {lat: 42.9793380, lng: -78.8155150};
    var marker = new google.maps.Marker({
      position: myLatLng,
      title: 'WE ARE HERE!!',
      map: map.instance
    });
  });
});



