var searchBtn = $(".btn");
// no location variable as we will prompt the user to share their location upon entering the webpage;
// var googleAPI = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=milpitas&key=" + googleKey;

// var fluAPI = "	http://api.flutrack.org/?s=feverANDcoughORfever";

var googleKey = 'AIzaSyDeiBrvVx6CsYF4J34xVFLvm1ObiiPKrdQ';

var origin = 'Vacaville'
var oState = 'California'
var dCity = 'New York City'
var dState = 'New York'

var googleAPI = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin},${oState}&destinations=${dCity},${dState}&key=AIzaSyCBZc_OSBv_nae-DTj4IXZ1x7Zb00XzcRQ`

$.ajax({
    url: googleAPI,
    method: 'GET'
}).then(function(response){
    console.log(response)
})













// fetch(googleAPI).then(res => res.json()).then(data => {
//   var info = (data.rows[0].elements[0])
//   console.log(info.distance.text)
// })