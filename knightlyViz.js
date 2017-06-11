let rawData = window.KnightlyData.positions;
// dates after 1/17/17 @ 11:05PM GMT
rawData = rawData.filter((el) => new Date(el.created_at).valueOf() > 1484694208617)
let lat = (rawData.reduce((acc, data) => Math.max(data.lat, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lat, acc), Infinity)) / 2;
let lng = (rawData.reduce((acc, data) => Math.max(data.lng, acc), -180) + rawData.reduce((acc, data) => Math.min(data.lng, acc), Infinity)) / 2;

const map = new GMaps({
  div: '#map',
  lat,
  lng
});

rawData.forEach((el) => {
  map.addMarker({
    lat: el.lat,
    lng: el.lng
  })
});
map.fitZoom();
map.refresh();
