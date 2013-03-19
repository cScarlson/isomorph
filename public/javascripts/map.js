$('<link />', {
	rel: 'stylesheet',
	href: 'http://cdn.leafletjs.com/leaflet-0.4/leaflet.css'
}).appendTo('head');
$.getScript('http://cdn.leafletjs.com/leaflet-0.4/leaflet.js', function(){
	$(document).ready(function(){
		var map = L.map('map').setView([51.505, -0.09], 16);
		L.tileLayer('http://{s}.tile.cloudmade.com/9223fab3c1194c8893c7d6312bb25acf/997/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
			maxZoom: 18
		}).addTo(map);
		
		L.marker([51.5, -0.09]).addTo(map)
			.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
			.openPopup();
		var polygon = L.polygon([
			[51.509, -0.08],
			[51.503, -0.06],
			[51.51, -0.047]
		]).addTo(map);
		// make algorythm to outline neighborNetHood polygon, cody!
		
		var userLoc = map.locate({setView: true, zoom: 18}).getCenter(),
			userLatlng = userLoc.lat + ', ' + userLoc.lng;
		console.log('user location', userLatlng, userLoc);
		/**
		 * SET 'onUserLocReady' EVENT-TRIGGER THAT CONCURS WITH 'onSocketConnected' EVENT-TRIGGER!!!
		 */
		/**
		 * MAKE SERVER-SIDE ARRAY WHICH COLLECTS USER LOCATION JUST LIKE 'nicknames' ARRAY!!!
		 * PROBABLY WILL BE A Bridge-Pattern
		 */
		
	});
});
