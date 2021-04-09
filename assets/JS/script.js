var searchBtn = $(".btn");
var searchHist = $('#prevSearch');

function renderButtons() {
    var storage = JSON.parse(localStorage.getItem('cities')) || [];
    for(var i = 0; i < storage.length; i++) {
        var dState = storage[i].info.endAddress.split(', ').splice(0, 2).join(', ');
        searchHist.append('<a class="col s12 m1 waves-effect waves-light btn history" data-prevSearch="search1">' + dState + '</a>');
    }
}

// .history { width: auto } in css
renderButtons();

// This listens for a click on the search button to begin the function
searchBtn.on('click', () => getDistance());



$('.history').on('click', (e) =>{
    console.log('hello');
    var storage = JSON.parse(localStorage.getItem('cities')) || [];
    for(var i = 0; i < storage.length; i++) {
        var dState = storage[i].info.endAddress.split(', ').splice(0, 2).join(', ');
        console.log(dState, e.target);
        if (e.target.textContent === dState) {
            generateInfoBox(storage[i].info);
            renderBusinesses(storage[i]);
            return;
        }
        
    }
})
// Begins function to retrieve the distance.
function getDistance(){
    
    // Requirements object for all inputs from the user
    var requirements = {
        origin: $('.originCity').val(),
        oState: $('.originState').val(),
        dCity: $('.destCity').val(),
        dState: $('.destState').val(),
        foodGenre: $('.foodGenre').val()
    };
    // Google API
    var googleAPI = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=' + requirements.origin + ',' + requirements.oState + '&destination=' + requirements.dCity + ',' + requirements.dState + '&key=AIzaSyCBZc_OSBv_nae-DTj4IXZ1x7Zb00XzcRQ';
        // If statements to make sure all fields are filled out
       if (requirements.origin === ''){ 
            swal({
                title: 'You did not enter an Origin!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            })       
        }else if(requirements.oState === '') {
            swal({
                title: 'You did not enter an Origin State!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            })
        }else if(requirements.dCity === ''){
            swal({
                title: 'You did not enter a Destination City!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            })
        }else if(requirements.dState === '') {
            swal({
                title: 'You did not enter a Destination State!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            })
        }else if(requirements.foodGenre === '') {
            swal({
                title: 'You did not enter a Favorite Food!',
                text: 'Please try again',
                icon: 'error',
                button: 'Try Again'
            })
        }else {
            swal({
                title:'Nice work you entered the requirements!',
                icon: 'success',
                button: 'Me Hungry!'
            })
            // Success! Start first request from google
            $.ajax({
                url: googleAPI,
                method: 'GET'
            }).then(function(response){
                console.log(response);
                // Appending list items for previous searches
                searchHist.append('<a class="col waves-effect waves-light btn history" style="width: auto" data-prevSearch="search1">' + requirements.dCity + ', ' + requirements.dState + '</a>');

                // Created object for all responses needed from user
                var infoBoxObj = {
                startAddress: response.routes[0].legs[0].start_address,
                endAddress: response.routes[0].legs[0].end_address,
                travelTime: response.routes[0].legs[0].duration.text,
                travelDist: response.routes[0].legs[0].distance.text
                };
                // Calling the functions to display the responses recieved
                generateInfoBox(infoBoxObj);
                testFood(infoBoxObj);
            })
            // Start food display
            function testFood(infoBoxObj){
                // Yelp API request
                var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=5&term='+ requirements.foodGenre + '&location=' + infoBoxObj.endAddress + '&';
                $.ajax({
                    url: yelpURL,
                    method: 'GET',
                    headers: {
                        authorization: "Bearer glAWlbbO8-yveIvnxPUtI62Kfbv9m3ozQ_YP3CwLIuzY3nRoTJkddG3iJi3TLiiDpzdBffPsdErIXn6Yuv5qdccoUZkEDu39rImm1UTEwPMVYikqkoAPtUdmK-dtYHYx"
                    }
                }).then(function(response){
                    console.log(response);
                    console.log(response.businesses, infoBoxObj);
                    var storage = JSON.parse(localStorage.getItem('cities')) || [];
                    storage.push({info:infoBoxObj, businesses:response.businesses});
                    localStorage.setItem('cities', JSON.stringify(storage));

                    // With the response recieved, appending and creating list items inside of the collapsible container
                    renderBusinesses(response);
                    
                })}
            }
        }   
            function renderBusinesses(response) {
                var foodContainer = $('#foodContainer');
                foodContainer.empty();
                for(var i = 0; i < response.businesses.length; i++) {
                    foodContainer.append(`
                <li ${i===0 ? 'class="active"':''}>
                    <div class="collapsible-header">
                        <i class="material-icons" style="color: #FC90A4;">push_pin</i>
                        ${response.businesses[i].name}
                    </div> 
                    <div class="collapsible-body row">
                        <div class="col s12 m4">
                            <img id="restImg1" class="responsive-img" src="${response.businesses[i].image_url}">
                        </div>
                        <div id="restDetails1" class="col s12 m8">
                            <p class="flow-text">${response.businesses[i].location.display_address}</p>
                            <p class="flow-text">Price Meter: ${response.businesses[i].price || 'None Provided'}</p>
                            <p class="flow-text">Rating: ${response.businesses[i].rating}/5</p>
                            <a class="flow-text" target="_blank" href="${response.businesses[i].url}">Visit!</a>
                        </div>
                    </div>
                </li>
                    `)
                }
            }
            // Start function to recieve distance from the Google API
            function generateInfoBox(infoBoxObj) {

                // Setting the container to empty, so results don't stack
                var disResult = $('#travelResults').append('<div>').addClass('card-body');
                disResult.empty();
                
                var partResult = disResult.append('<p>');
                disResult.append(partResult);
                // Appending newly created paragraph tags with each input the user provided.
                partResult.append('<p class="flow-text">' + '<i class="material-icons">person_pin</i>' + '  ' + infoBoxObj.startAddress + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">place</i>' + '</i>' + '  ' + infoBoxObj.endAddress + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">drive_eta</i>' + '  ' + infoBoxObj.travelTime + '</p>');
                partResult.append('<p class="flow-text">' + '<i class="material-icons">arrow_forward</i>' + '  ' + infoBoxObj.travelDist + '</p>');

            }