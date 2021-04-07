var searchBtn = $(".btn");
searchBtn.on('click', () => getDistance())


function getDistance(){
    
    var origin = $('.originCity').val();
    var oState = $('.originState').val();
    var dCity = $('.destCity').val();
    var dState = $('.destState').val();
    var foodGenre = $('.foodGenre').val();
    
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
        console.log(response);
            for(var i=0; i < response.businesses.length; i++){
                $('#fluResults').append('<p class="flow-text">' + response.businesses[i].name + '</p>' + '<img class="responsive-img circle" src="' + response.businesses[i].image_url + '"></img>' + '<p class="flow-text">' + response.businesses[i].location.display_address + '</p>' + '<p class="flow-text">' + response.businesses[i].price + '</p>' + '<p class="flow-text">' + response.businesses[i].rating + '</p>');
            }
    })}
}
    
    
    
    function generateInfoBox(infoBoxObj) {
        var disResult = $('#travelResults').append('<div>').addClass('card-body');
        disResult.empty();
        
        var partResult = disResult.append('<p>');
        disResult.append(partResult);
        
        partResult.append('<p class="flow-text">' + '<i class="material-icons">person_pin</i>' + 'Your starting location: ' + infoBoxObj.startAddress + '</p>');
        partResult.append('<p class="flow-text">' + '<i class="material-icons">place</i>' + '</i>' + 'Your ending location: ' + infoBoxObj.endAddress + '</p>');
        partResult.append('<p class="flow-text">' + '<i class="material-icons">drive_eta</i>' + 'Drive time: ' + infoBoxObj.travelTime + '</p>');
        partResult.append('<p class="flow-text">' + '<i class="material-icons">arrow_forward</i>' + 'Distance: ' + infoBoxObj.travelDist + '</p>');
        var tabBarEl = $('#tab-bar').append('<ul>').addClass('tabs');
        var tabsEl = tabBarEl.append('<a href="#' + infoBoxObj.endAddress + '">' + infoBoxObj.endAddress + '</a>').addClass('tab col');
        $(tabsEl).wrap('<li class="tab col"></li>');
    }
    
    // function generateFoodBox(foodBoxObj) {
        //     foodResult = $('#fluResults').append('<div>').addClass('card-body');
        //     foodResult.empty();
        //     var eachFood = foodResult.append('<p>');
        //     foodResult.append(eachFood);
        
        
        //     eachFood.append('<p class="flow-text">' + foodBoxObj.foodName + '</p>');
        // }
        
        // var foodBoxObj = { 
        //     foodName: response.businesses[i].name,
        //     foodAddress: response.businesses[i].location.display_address,
        //     foodImage: response.businesses[i].image_url,
        //     foodPrice: response.businesses[i].price,
        //     foodRating: response.businesses[i].rating
        // };
        
        


// Ending lat and long
// response.routes[0].legs[0].end_location.lat
// response.routes[0].legs[0].end_location.lng





// Name of business at the very top
// Image of the business
// Address of the business
// Price
// Rating