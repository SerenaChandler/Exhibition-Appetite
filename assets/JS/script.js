var searchBtn = $(".searchButton");
// no location variable as we will prompt the user to share their location upon entering the webpage
var destination = $(".desination");
var transport = $(".transport");

var googleAPI = "https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters";

var fluAPI = "	http://api.flutrack.org/?s=feverANDcoughORfever";




$.ajax({
    url: googleAPI, 
    method: "GET"
}).then(function (response){
    console.log(response)
});