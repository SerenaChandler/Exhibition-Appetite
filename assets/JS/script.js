var searchBtn = $(".btn");
var searchHist = $('#prevSearch');
// var historyEl = $('#tab-bar');
// var tabBarEl = $('.tabs');
// var recentSearch = [];

// This listens for a click on the search button to begin the function
searchBtn.on('click', () => getDistance());

// Begins function to retrieve the distance.
function getDistance(){
    
    var requirements = {
        origin: $('.originCity').val(),
        oState: $('.originState').val(),
        dCity: $('.destCity').val(),
        dState: $('.destState').val(),
        foodGenre: $('.foodGenre').val()
    };
    var googleAPI = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=' + requirements.origin + ',' + requirements.oState + '&destination=' + requirements.dCity + ',' + requirements.dState + '&key=AIzaSyCBZc_OSBv_nae-DTj4IXZ1x7Zb00XzcRQ';
    
       if (requirements.origin === ''){ 
            swal({
                title: 'You did not enter an Origin!',
                text: 'Please try again',
                icon: 'error'
            })       
        }else if(requirements.oState === '') {
            swal({
                title: 'You did not enter an Origin State!',
                text: 'Please try again',
                icon: 'error'
            })
        }else if(requirements.dCity === ''){
            swal({
                title: 'You did not enter a Destination City!',
                text: 'Please try again',
                icon: 'error'
            })
        }else if(requirements.dState === '') {
            swal({
                title: 'You did not enter a Destination State!',
                text: 'Please try again',
                icon: 'error'
            })
        }else if(requirements.foodGenre === '') {
            swal({
                title: 'You did not enter a Favorite Food!',
                text: 'Please try again',
                icon: 'error'
            })
        }else {
            swal({
                title:'Nice work you entered the requirements!',
                icon: 'success'
            })
        
            $.ajax({
                url: googleAPI,
                method: 'GET'
            }).then(function(response){
                console.log(response);

                // <a class="col s12 m1 waves-effect waves-light btn" data-prevSearch>button</a>
                searchHist.append('<a class="col s12 m1 waves-effect waves-light btn" data-prevSearch="search1">' + requirements.dState + '</a>');

                // var searchName = $('#tab-bar').addClass('list-item');
                // var localStore = JSON.parse(localStorage.getItem('recentSearches')) || [];
                // localStore.push(requirements);
                // var storage = [...new Set(localStore)];
                // if(storage.length === localStore.length) {
                //     var listItem = $('<li>').text(requirements.origin + ' To: '  + requirements.dCity + ' for some: ' + requirements.foodGenre);
                //     listItem.on('click', function(event){
                //         getDistance($(this).text());
                //     })
                // searchName.append(listItem);
                // localStorage.setItem('recentSearches', JSON.stringify(localStore));
                // }
                    // '<li>' + requirements.origin + ' To: '  + requirements.dCity + ' for some: ' + requirements.foodGenre + '</li>');

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

                var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term='+ requirements.foodGenre + '&location=' + infoBoxObj.endAddress + '&';
                $.ajax({
                    url: yelpURL,
                    method: 'GET',
                    headers: {
                        authorization: "Bearer glAWlbbO8-yveIvnxPUtI62Kfbv9m3ozQ_YP3CwLIuzY3nRoTJkddG3iJi3TLiiDpzdBffPsdErIXn6Yuv5qdccoUZkEDu39rImm1UTEwPMVYikqkoAPtUdmK-dtYHYx"
                    }
                }).then(function(response){
                    console.log(response);
                    
                    var foodContainer = $('#foodContainer');
                    foodContainer.empty();
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
                
                partResult.append('<p class="flow-text">' + '<i class="material-icons">person_pin</i>' + '  ' + infoBoxObj.startAddress + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">place</i>' + '</i>' + '  ' + infoBoxObj.endAddress + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">drive_eta</i>' + '  ' + infoBoxObj.travelTime + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">arrow_forward</i>' + '  ' + infoBoxObj.travelDist + '</p>');

            }}
            
            // function renderList() {
            //     var localStore = JSON.parse(localStorage.getItem('recentSearches')) || [];
            //     var searchName = $('#tab-bar').addClass('list-item');
            //     for(i = 0; i < localStore.length; i++) {
            //         var listItem = $('<li>').text();
            //         listItem.on('click', function(event){
            //             getDistance($(this).text());
            //         })
            //         searchName.append(listItem);
            
            //     }
            // }
            // renderList();