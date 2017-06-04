let rawData = window.KnightlyData.positions;
// dates after 1/17/17 @ 11:05PM GMT
rawData = rawData.filter((el) => new Date(el.created_at).valueOf() > 1484694208617)
let lat = (rawData.reduce((acc, data) => Math.max(data.lat, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lat, acc), Infinity)) / 2;
let lng = (rawData.reduce((acc, data) => Math.max(data.lng, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lng, acc), Infinity)) / 2;
const map = L.map('content').setView([42.3371177,-71.1107741], 14);
// const map = L.map('content').setView([lng, lat], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWVtIiwiYSI6ImNpeHRodXRkbTAwMWszM251d2w0N2s1dzMifQ.hjAvtPzGfnA-YyPVe37PEQ', {
		maxZoom: 18,
		attribution: '',
		id: 'mapbox.streets'
}).addTo(map);
rawData.forEach((obj) => {
  L.marker(L.latLng(obj.lat, obj.lng)).addTo(map);
});
