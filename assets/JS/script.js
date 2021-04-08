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
        var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term='+ foodGenre + '&location=' + infoBoxObj.endAddress + '&';
        $.ajax({
            url: yelpURL,
            method: 'GET',
            headers: {
                authorization: "Bearer glAWlbbO8-yveIvnxPUtI62Kfbv9m3ozQ_YP3CwLIuzY3nRoTJkddG3iJi3TLiiDpzdBffPsdErIXn6Yuv5qdccoUZkEDu39rImm1UTEwPMVYikqkoAPtUdmK-dtYHYx"
            }
        }).then(function(response){
            console.log(response);
            
            var foodContainer = $('#foodContainer');
            foodContainer.append('<li class="active">' + '<div class="collapsible-header">' + '<i class="material-icons" style="color: #FC90A4;">push_pin</i>' + response.businesses[0].name + '</div>' + '<div class="collapsible-body row">' + '<div class="col s12 m4">' + '<img id="restImg1" class="responsive-img" src="' + response.businesses[0].image_url + '">' + '</div>' + '<div id="restDetails1" class="col s12 m8">' + '<p class="flow-text">' + response.businesses[0].location.display_address + '</p>' + '<p class="flow-text">' + 'Price Meter: ' + response.businesses[0].price + '</p>' + '<p class="flow-text">' + 'Rating: ' + response.businesses[0].rating + '/5' + '</p>' + '<a class="flow-text" target="_blank" href="' + response.businesses[0].url + '">Visit!</a>'  + '</div' + '<div>' + '</li>');
            foodContainer.append('<li>' + '<div class="collapsible-header">' + '<i class="material-icons" style="color: #FC90A4;">push_pin</i>' + response.businesses[1].name + '</div>' + '<div class="collapsible-body row">' + '<div class="col s12 m4">' + '<img id="restImg2" class="responsive-img" src="' + response.businesses[1].image_url + '">' + '</div>' + '<div id="restDetails2" class="col s12 m8">' + '<p class="flow-text">' + response.businesses[1].location.display_address + '</p>' + '<p class="flow-text">' + 'Price Meter: ' + response.businesses[1].price + '</p>' + '<p class="flow-text">' + 'Rating: ' + response.businesses[1].rating + '/5' + '</p>' + '<a class="flow-text" target="_blank" href="' + response.businesses[1].url + '">Visit!</a>' + '</div' + '<div>' + '</li>');
            foodContainer.append('<li>' + '<div class="collapsible-header">' + '<i class="material-icons" style="color: #FC90A4;">push_pin</i>' + response.businesses[2].name + '</div>' + '<div class="collapsible-body row">' + '<div class="col s12 m4">' + '<img id="restImg3" class="responsive-img" src="' + response.businesses[2].image_url + '">' + '</div>' + '<div id="restDetails3" class="col s12 m8">' + '<p class="flow-text">' + response.businesses[2].location.display_address + '</p>' + '<p class="flow-text">' + 'Price Meter: ' + response.businesses[2].price + '</p>' + '<p class="flow-text">' + 'Rating: ' + response.businesses[2].rating + '/5' + '</p>' + '<a class="flow-text" target="_blank" href="' + response.businesses[2].url + '">Visit!</a>' + '</div' + '<div>' + '</li>');
            foodContainer.append('<li>' + '<div class="collapsible-header">' + '<i class="material-icons" style="color: #FC90A4;">push_pin</i>' + response.businesses[3].name + '</div>' + '<div class="collapsible-body row">' + '<div class="col s12 m4">' + '<img id="restImg4" class="responsive-img" src="' + response.businesses[3].image_url + '">' + '</div>' + '<div id="restDetails4" class="col s12 m8">' + '<p class="flow-text">' + response.businesses[3].location.display_address + '</p>' + '<p class="flow-text">' + 'Price Meter: ' + response.businesses[3].price + '</p>' + '<p class="flow-text">' + 'Rating: ' + response.businesses[3].rating + '/5' + '</p>' + '<a class="flow-text" target="_blank" href="' + response.businesses[3].url + '">Visit!</a>' + '</div' + '<div>' + '</li>');
            foodContainer.append('<li>' + '<div class="collapsible-header">' + '<i class="material-icons" style="color: #FC90A4;">push_pin</i>' + response.businesses[4].name + '</div>' + '<div class="collapsible-body row">' + '<div class="col s12 m4">' + '<img id="restImg5" class="responsive-img" src="' + response.businesses[4].image_url + '">' + '</div>' + '<div id="restDetails5" class="col s12 m8">' + '<p class="flow-text">' + response.businesses[4].location.display_address + '</p>' + '<p class="flow-text">' + 'Price Meter: ' + response.businesses[4].price + '</p>' + '<p class="flow-text">' + 'Rating: ' + response.businesses[4].rating + '/5' + '</p>' + '<a class="flow-text" target="_blank" href="' + response.businesses[4].url + '">Visit!</a>' + '</div' + '<div>' + '</li>');
            
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
