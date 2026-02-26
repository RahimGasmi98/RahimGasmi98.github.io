var map = L.map('map').setView([36.7538, 3.0588], 13);

// إضافة خريطة OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// مثال على بعض المطاعم
var restaurants = [
    {name:"مطعم الأميرة", lat:36.7538, lng:3.0588},
    {name:"مطعم الفلافل", lat:36.7545, lng:3.0600},
    {name:"مطعم الكسكسي", lat:36.7525, lng:3.0550}
];

restaurants.forEach(r => {
    L.marker([r.lat, r.lng]).addTo(map)
     .bindPopup(`<b>${r.name}</b>`);
});
