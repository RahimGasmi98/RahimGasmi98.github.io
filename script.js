// ═══ تعريف الخريطة مرة واحدة فقط ═══
var map = L.map('map', {
  center: [36.7538, 3.0588],
  zoom: 13,
  zoomControl: false,
  attributionControl: false
});

// ═══ إضافة الخريطة الرمادية ═══
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 19
}).addTo(map);

// ═══ المطاعم ═══
var restaurants = [
  {name: "مطعم الأميرة", lat: 36.7538, lng: 3.0588},
  {name: "مطعم الفلافل", lat: 36.7545, lng: 3.0600},
  {name: "مطعم الكسكسي", lat: 36.7525, lng: 3.0550}
];

restaurants.forEach(function(r) {
  L.marker([r.lat, r.lng]).addTo(map)
    .bindPopup('<b>' + r.name + '</b>');
});
