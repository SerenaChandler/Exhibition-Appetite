

var disResult = $('#travelResults').append('<div>').addClass('card-body');
        disResult.empty();

        var partResult = disResult.append('<p>');
        disResult.append(partResult);

        partResult.append('<p>' + 'Your starting location: ' + response.origin_addresses[0] + '</p>');
        partResult.append('<p>' + '<i class="endFlag fas fa-flag-checkered">' + '</i>' + 'Your ending location: ' + response.destination_addresses[0] + '</p>');
        partResult.append('<p>' + 'Drive time: ' + response.rows[0].elements[0].duration.text + '</p>');
        partResult.append('<p>' + 'Distance: ' + response.rows[0].elements[0].distance.text + '</p>');


var tabsEl = tabBarEl.append('<li>' + dCity + '<li>').addClass('tab col')





var tabBarEl = $('#tab-bar').append('<ul>').addClass('tabs');
var tabsEl = tabBarEl.append('<a> href="#search1">' + dCity + '<a>')
$(tabsEl).wrap('<li class="tab col"></li>')




var tabsEl = tabBarEl.append('<a> href="#' + dCity + '">' + dCity + '<a>')