var searchBtn = $(".btn");
// no location variable as we will prompt the user to share their location upon entering the webpage;
// var googleAPI = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=milpitas&key=" + googleKey;

var fluAPI = "	http://api.flutrack.org/?s=feverANDcoughORfever";

// var googleKey = 'AIzaSyDeiBrvVx6CsYF4J34xVFLvm1ObiiPKrdQ';


// var googleAPI = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=` + origin + `,` + oState + `&destinations=` + dCity + `,` + dState + `&key=AIzaSyCBZc_OSBv_nae-DTj4IXZ1x7Zb00XzcRQ`;


searchBtn.on('click', () => getDistance())


function getDistance(){
    
    var origin = $('.originCity').val();
    var oState = $('.originState').val();
    var dCity = $('.destCity').val();
    var dState = $('.destState').val();
    
    var googleAPI = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + ',' + oState + '&destination=' + dCity + ',' + dState + '&key=AIzaSyCBZc_OSBv_nae-DTj4IXZ1x7Zb00XzcRQ';
    
    $.ajax({
        url: googleAPI,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        var disResult = $('#travelResults').append('<div>').addClass('card-body');
        disResult.empty();

        var partResult = disResult.append('<p>');
        disResult.append(partResult);

        partResult.append('<p>' + '<i class="material-icons">person_pin</i>' + 'Your starting location: ' + response.routes[0].legs[0].start_address + '</p>');
        partResult.append('<p>' + '<i class="material-icons">place</i>' + '</i>' + 'Your ending location: ' + response.routes[0].legs[0].end_address + '</p>');
        partResult.append('<p>' + '<i class="material-icons">drive_eta</i>' + 'Drive time: ' + response.routes[0].legs[0].duration.text + '</p>');
        partResult.append('<p>' + '<i class="material-icons">arrow_forward</i>' + 'Distance: ' + response.routes[0].legs[0].distance.text + '</p>');
        var tabBarEl = $('#tab-bar').append('<ul>').addClass('tabs');
        var tabsEl = tabBarEl.append('<a> href="#search1">' + dCity + '<a>');
        $(tabsEl).wrap('<li class="tab col"></li>');

    $.ajax({
        url: hotelAPI,
        method: 'GET'
    }).then(function(response){
        console.log(response)
    })})}







// Ending lat and long
// response.routes[0].legs[0].end_location.lat
// response.routes[0].legs[0].end_location.lng