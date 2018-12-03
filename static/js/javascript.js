// Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Google Maps
function initMap() {

var press = {
info: '<strong>The Fleet Street Press</strong><br>\
    6 min walk from LSE Library<br>\
    <a href="http://www.presscoffee.london/">Visit the Website</a>',
lat: 51.513632,
long: -0.111626
};

var lundenwic = {
info: '<strong>Lundenwic</strong><br>\
    5 min walk from Clement House<br>\
    <a href="http://www.lundenwic.com/">Visit the Website</a>',
lat: 51.512895,
long: -0.118598
};

var fleet = {
info: '<strong>Fleet River Bakery</strong><br>\
    4 min walk from NAB<br>\
    <a href="http://fleetriverbakery.com/">Visit the Website</a>',
lat: 51.516843,
long: -0.119066
};

var cake = {
info: '<strong>London Review Cake Shop</strong><br>\
    10 min walk from NAB<br>\
    <a href="https://www.londonreviewbookshop.co.uk/cake-shop">Visit the Website</a>',
lat: 51.518513,
long: -0.124292
};

var drury = {
info: '<strong>Drury 188-189</strong><br>\
    10 min walk from Old Building<br>\
    <a href="http://www.drury188189.co.uk/">Visit the Website</a>',
lat: 51.516124,
long: -0.123997
};

var prufrock = {
info: '<strong>Prufrock</strong><br>\
    10 min walk from 32 Lincolns Inn<br>\
    <a href="https://www.prufrockcoffee.com/">Visit the Website</a>',
lat: 51.519895,
long: -0.109519
};

var poetry = {
info: '<strong>The Poetry Cafe</strong><br>\
    10 min walk from Old Building<br>\
    <a href="http://poetrysociety.org.uk/poetry-cafe/">Visit the Website</a>',
lat: 51.515043,
long: -0.124047
};

var department = {
info: '<strong>Department of Coffee and Social Affairs</strong><br>\
    10 min walk from 32 Lincolns Inn<br>\
    <a href="https://departmentofcoffee.com/">Visit the Website</a>',
lat: 51.519400,
long: -0.109011
};

var sheep = {
info: '<strong>Black Sheep Coffee</strong><br>\
    10 min walk from LSE library<br>\
    <a href="http://www.leavetheherdbehind.com/">Visit the Website</a>',
lat: 51.516924,
long: -0.108957
};

var locations = [
[press.info, press.lat, press.long, 0],
[lundenwic.info, lundenwic.lat, lundenwic.long, 1],
[fleet.info, fleet.lat, fleet.long, 2],
[cake.info, cake.lat, cake.long, 3],
[drury.info, drury.lat, drury.long, 4],
[prufrock.info, prufrock.lat, prufrock.long, 5],
[poetry.info, poetry.lat, poetry.long, 6],
[department.info, department.lat, department.long, 7],
[sheep.info, sheep.lat, sheep.long, 8],
];

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 15,
center: new google.maps.LatLng(51.5144, -0.1174),
mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow({});

var marker, i;

for (i = 0; i < locations.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4],locations[i][5],locations[i][6],locations[i][7],locations[i][8]),
map: map
});

google.maps.event.addListener(marker, 'click', (function (marker, i) {
return function () {
  infowindow.setContent(locations[i][0]);
  infowindow.open(map, marker);
}
})(marker, i));
}
}
