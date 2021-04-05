var searchBtn = $(".searchButton");
// no location variable as we will prompt the user to share their location upon entering the webpage
var destination = $(".desination");
var transport = $(".transport");

var googleKey = 'AIzaSyDeiBrvVx6CsYF4J34xVFLvm1ObiiPKrdQ';

var googleAPI = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=milpitas&key=" + googleKey;

var fluAPI = "	http://api.flutrack.org/?s=feverANDcoughORfever";



// select option for mode of transport
$(document).ready(function(){
    $('select').formSelect();
  });




function test() {

    $.ajax({
        url: googleAPI, 
        method: "GET",
        dataType: 'jsonp',
        cache: false,
    }).then(function (response){
        console.log(response)
    });
    console.log(response)
}

// $.ajax({
//     url: Auto_Complete_Link, 
//     type: "GET",   
//     dataType: 'jsonp',
//     cache: false,
//     success: function(response){                          
//         alert(response);                   
//     }           
// });    
test()