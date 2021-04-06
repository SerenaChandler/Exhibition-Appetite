var searchBtn = $(".searchButton");
// no location variable as we will prompt the user to share their location upon entering the webpage;
// var googleAPI = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=milpitas&key=" + googleKey;

// var fluAPI = "	http://api.flutrack.org/?s=feverANDcoughORfever";

var googleKey = 'AIzaSyDeiBrvVx6CsYF4J34xVFLvm1ObiiPKrdQ';

var origin = $('#originCity').val();
var oState = $('#originState').val();
var dCity = $('#destCity').val();
var dState = $('#destState').val();

var googleAPI = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin},${oState}&destinations=${dCity},${dState}&key=${googleKey}`

fetch(googleAPI).then(res => res.json()).then(data => {
  var info = (data.rows[0].elements[0])
  console.log(info.distance.text)
})