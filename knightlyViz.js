let rawData = window.KnightlyData.positions;
let lat = (rawData.reduce((acc, data) => Math.max(data.lat, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lat, acc), Infinity)) / 2;
let lng = (rawData.reduce((acc, data) => Math.max(data.lng, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lng, acc), Infinity)) / 2;
const map = L.map('content').setView([42.3371177,-71.1107741], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: '',
		id: 'mapbox.streets'
}).addTo(map);
rawData.forEach((obj) => {
  L.marker(L.latLng(obj.lat, obj.lng)).addTo(map);
});
