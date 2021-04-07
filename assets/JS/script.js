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
        var infoBoxObj = {
          startAddress: response.routes[0].legs[0].start_address,
          endAddress: response.routes[0].legs[0].end_address,
          travelTime: response.routes[0].legs[0].duration.text,
          travelDist: response.routes[0].legs[0].distance.text
        };
        generateInfoBox(infoBoxObj);
        testFood(infoBoxObj);
    })
    function testFood(infoBoxObj){
        var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term=sushi&location=' + infoBoxObj.endAddress + '&';
        $.ajax({
            url: yelpURL,
            method: 'GET',
            headers: {
                authorization: "Bearer glAWlbbO8-yveIvnxPUtI62Kfbv9m3ozQ_YP3CwLIuzY3nRoTJkddG3iJi3TLiiDpzdBffPsdErIXn6Yuv5qdccoUZkEDu39rImm1UTEwPMVYikqkoAPtUdmK-dtYHYx"
            }
        }).then(function(response){
        console.log(response)
        // var foodBoxObj = {
        //     foodImage = response.businesses[i].image_url,
        // 
        // 
        // 
            
        // }
    })}}



    function generateInfoBox(infoBoxObj) {
        var disResult = $('#travelResults').append('<div>').addClass('card-body');
        disResult.empty();

        var partResult = disResult.append('<p>');
        disResult.append(partResult);

        partResult.append('<p>' + '<i class="material-icons">person_pin</i>' + 'Your starting location: ' + infoBoxObj.startAddress + '</p>');
        partResult.append('<p>' + '<i class="material-icons">place</i>' + '</i>' + 'Your ending location: ' + infoBoxObj.endAddress + '</p>');
        partResult.append('<p>' + '<i class="material-icons">drive_eta</i>' + 'Drive time: ' + infoBoxObj.travelTime + '</p>');
        partResult.append('<p>' + '<i class="material-icons">arrow_forward</i>' + 'Distance: ' + infoBoxObj.travelDist + '</p>');
        var tabBarEl = $('#tab-bar').append('<ul>').addClass('tabs');
        var tabsEl = tabBarEl.append('<a href="#' + infoBoxObj.endAddress + '">' + infoBoxObj.endAddress + '</a>').addClass('tab col');
        $(tabsEl).wrap('<li class="tab col"></li>');
    }

    // function generateFoodBox(foodBoxObj)





// Ending lat and long
// response.routes[0].legs[0].end_location.lat
// response.routes[0].legs[0].end_location.lng





// Name of business at the very top
// Image of the business
// Address of the business
// Price
// Rating