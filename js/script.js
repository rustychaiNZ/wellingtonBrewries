console.log('Wellington Brewries');
// Brewries locations
var breweries = [
	{
		id : 101,
		name : 'Panhead',
		longAndLat : {lat:-41.131073, lng:175.067505},
		area : 'Upper Hutt',
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Panhead Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li></ul></div></div></div>',
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 102,
		name : 'Boneface',
		area : 'Upper Hutt',
		longAndLat : {lat:-41.130121, lng: 175.068525},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Boneface Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li><li>11am - 9pm</li></ul></div></div></div>',
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 103,
		name : 'Kereru',
		area : 'Upper Hutt',
		longAndLat : {lat: -41.129686, lng: 175.072361},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Kereru Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>9am - 4pm</li><li>9am - 4pm</li><li>9am - 4pm</li><li>10am - 5pm</li><li>10am - 5pm</li></ul></div></div></div>',
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 4pm', '9am - 4pm', '9am - 4pm', '10am - 5pm', '10am - 5pm']
	},
	{
		id : 104,
		name : 'Heyday Beer Co',
		area : 'Wellington CBD',
		longAndLat : {lat: -41.295940, lng: 174.773553},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Heyday Beer Co Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 11pm</li><li>3pm - 11pm</li><li>11am - 10pm</li><li>11am - 10pm</li><li>11am - 12am</li><li>11am - 12am</li><li>11am - 9pm</li></ul></div></div></div>',
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 11pm', '3pm - 11pm', '11am - 10pm', '11am - 10pm', '11am - 12am', '11am - 12am', '11am - 9pm']
	},
	{
		id : 105,
		name : 'Garage Project Cellar Door',
		area : 'Wellington CBD',
		longAndLat : {lat: -41.294491, lng: 174.767862},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Garage Project Cellar Door Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>12pm - 7pm</li><li>12pm - 8.30pm</li><li>12pm - 8.30pm</li><li>12pm - 8.30pm</li><li>10am - 9.30pm</li><li>10am - 9.30pm</li><li>12pm - 7pm</li></ul></div></div></div>',
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['12pm - 7pm', '12pm - 8.30pm', '12pm - 8.30pm', '12pm - 8.30pm', '10am - 9.30pm', '10am - 9.30pm', '12pm - 7pm']
	},
	{
		id : 106,
		name : 'Parrotdog Brewery',
		area : 'Wellington East',
		longAndLat : {lat: -41.326756, lng: 174.799773},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Parrotdog Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 7pm</li><li>1pm - 7pm</li><li>11am - 8pm</li><li>11am - 8pm</li><li>12pm - 6pm</li></ul></div></div></div>',
		openDays : ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 7pm', '1pm - 7pm', '11am - 8pm', '11am - 8pm', '12pm - 6pm']
	},
	{
		id : 107,
		name : 'Baylands',
		area : 'Lower Hutt',
		longAndLat : {lat: -41.225268, lng: 174.873098},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Baylands Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>9am - 5.30pm</li><li>9am - 5.30pm</li><li>9am - 5.30pm</li><li>9am - 5.30pm</li><li>11am - 5.30pm</li></ul></div></div></div>',
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '11am - 5.30pm']
	},
	{
		id : 108,
		name : 'Double Vision Brewing',
		area : 'Wellington East',
		longAndLat : {lat: -41.309406, lng: 174.821354},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Double Vision Brewing Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 10.30pm</li><li>3pm - 11.30pm</li><li>12pm - 11.30pm</li><li>12pm - 9.00pm</li></ul></div></div></div>',
		openDays : ['Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 10.30pm', '3pm - 11.30pm', '12pm - 11.30pm', '12pm - 9.00pm'] 
	},
	{
		id : 109,
		name : 'Whistling Sisters Beer Co',
		area : 'Wellington CBD',
		longAndLat : {lat: -41.294065, lng: 174.777728},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Whistling Sisters Beer Co Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>3pm - 12am</li><li>3pm - 12.00am</li><li>13pm - 12am</li><li>11:30am – 1am</li><li>10am - 1am</li><li>10am - 12am</li></ul></div></div></div>',
		openDays : ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 12am', '3pm - 12.00am', '3pm - 12am', '11:30am – 1am', '10am - 1am', '10am - 12am'] 
	},
	{
		id : 110,
		name : 'Fork and Brewer',
		area : 'Wellington CBD',
		longAndLat : {lat: -41.289235, lng: 174.775628},
		openCard : '<div id="breweryInfo" class="text-primary"><div class="brewery-header"><h2>Fork and Brewer Brewery</h2></div><div class="brewery-iWindow-body row"><div class="col-6"><h4>Open Days</h3><ul class="list-open-hours"><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul></div><div class="col-6"><h4>Opening Hours</h3><ul class="list-open-hours"><li>11.30am - 11pm</li><li>11.30am - 12am</li><li>11.30am - 12am</li><li>11.30am - 12am</li><li>11.30am - 10pm</li><li>11.30am - 12am</li><li>11.30am - 10pm</li></ul></div></div></div>',
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['11.30am - 11pm', '11.30am - 12am', '11.30am - 12am', '11.30am - 12am', '11.30am - 10pm', '11.30am - 12am', '11.30am - 10pm'] 
	}
];
var i;

// Hide and show map
$('#revealMap').hide();
$('#revealMap').on('click', function(){
	$('#map').show();
	$('#hideMap').show();
	$('#revealMap').hide();
});
$('#hideMap').on('click', function(){
	$('#map').hide();
	$('#hideMap').hide();
	$('#revealMap').show();
});

/*
	1) Create config.json file inside js folder
	2) Remove the your key from script tag in the index.html 
	3) replace the key with 'YourKey' in index.html
	4) Comment out script tag for google map plugin
	5) ignore js/config.json in '.gitignore' plain text file
	6) Include script src="js/config.json"></script> before bottom 'script.js'
	7) Then access the key in js/script.js file
*/

// accessing apiKey from config.json
// apiKey = '[{"key" : "yourKeyGoesHere"}]';
var myKey = JSON.parse(apiKey); // Convert JSON data into js object
console.log(myKey[0].key);

// Dynamically creating the script element
var script = document.createElement('script');
// Giving the src attribute to the google plug in from external json file
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
// Appending to the body of index.html
document.getElementsByTagName('body')[0].appendChild(script); 

// Creating map
var breweryMap;
// Function that places the map and it's markers
function initMap() {
	// Sets the options for the brewery map
	var options = {
		zoom: 11,
		center: {lat:-41.241098 ,lng:174.824240}
	}
	// Initialises the google map so that it displays on the web page
	breweryMap = new google.maps.Map(document.getElementById('map'), options);

	// Loop through markers
	for(i=0; i<breweries.length;i++){
		// Adds all of the markers from the brewery array
		addMarkers(breweries[i]);
	}
}

// Creating marker object
var allMarkers = [];
// Add marker function
function addMarkers(props){
	// Creates the marker variable
	var marker = new google.maps.Marker({
		// Positions the marker to where the brewery is located
		position: props.longAndLat,
		// adds the marker to the specific map
		map: breweryMap,
		// Gives the map a title
		title: props.name,
		// Adds the card to be displayed when an icon is clicked
		content: props.openCard,
		area : props.area,
		openDays: [props.openDays]
	});
	console.log(marker.openDays);
	// Pushes all markers to an array
	allMarkers.push(marker);
	// Checks to see if there is a card that can be displayed
	if(props.openCard){
		var infoWindow = new google.maps.InfoWindow({
			// Takes card of icon that has been clicked
			content: props.openCard
		});
		// On click, diplays the selected card
		marker.addListener('click', function(){
			// Works out which map and marker was clicked
			infoWindow.open(map, marker)
		});
	}
}

/*
	-- Filtering functions --
*/

// Function that calls on the variables created in the filter by area function
function clearMarkers(filterByArea){
	// Loops through all of the markers 
	for(var i=0; i < allMarkers.length; i++){
		// Allows all of the markers to be displayed if filter is reset
		if(filterByArea == 'all'){
			// Reveals all markers on map
			allMarkers[i].setMap(breweryMap);
		}
		// If the filtered area isn't selected, hides the markers in those areas
		else if(filterByArea !== allMarkers[i].area){
			// Hides markers that don't fit the filtered criteria
			allMarkers[i].setMap(null);
		} 
		// Updates the map when another filter is selected
		else{
			// Reveals all markers on map and then loop resets and hides markers that don't fit the paramaters
			allMarkers[i].setMap(breweryMap);
		}
	}
}

// Waits for user to select an area to filter by and then calls on the function to filter
document.getElementById('sortArea').addEventListener('change', filterByArea);
// document.getElementById('sortOpenDays').addEventListener('change', filterByDays);

// Filtering by area
function filterByArea(){
	// Takes the selected value that the user has chosen and stores it inside of the variable
	var selectedArea = document.getElementById('sortArea').value;
	clearMarkers(selectedArea);
}
// Filter by open days
function filterByDays(){
	var selectedDays = document.getElementById('sortOpenDays').value;
	clearMarkers(selectedDays);
	console.log(selectedDays);
}

// Function to reset the selected open days
function resetSelectedDays(){
	document.getElementById('checkMon').checked = false;
	document.getElementById('checkTue').checked = false;
	document.getElementById('checkWed').checked = false;
	document.getElementById('checkThu').checked = false;
	document.getElementById('checkFri').checked = false;
	document.getElementById('checkSat').checked = false;
	document.getElementById('checkSun').checked = false;
}
document.getElementById('clearOpenDaysBtn').addEventListener('click', function(){
	resetSelectedDays();
});



// Redundant first attempt

	// Works out the location of the marker
	// var panHeadLocation = {lat: breweries[0].latitude, lng: breweries[0].longtitude};
	// var BonefaceLocation = {lat: breweries[1].latitude, lng: breweries[1].longtitude};
	// var kereruLocation = {lat: breweries[2].latitude, lng: breweries[2].longtitude};
	// var heydayBeerCoLocation = {lat: breweries[3].latitude, lng: breweries[3].longtitude};
	// var garageProjectLocation = {lat: breweries[4].latitude, lng: breweries[4].longtitude};
	// var parrotdogLocation = {lat: breweries[5].latitude, lng: breweries[5].longtitude};
	// var baylandsBreweryLocation = {lat: breweries[6].latitude, lng: breweries[6].longtitude};
	// var doubleVisionBrewery = {lat: breweries[7].latitude, lng: breweries[7].longtitude};
	// var whistlingSistersBeerCo = {lat: breweries[8].latitude, lng: breweries[8].longtitude};
	// var forkAndBrewer = {lat: breweries[9].latitude,  lng: breweries[9].longtitude};
	
	// Prints the markers on the google map
	
	// var markerBFB = new google.maps.Marker({position: BonefaceLocation, map: breweryMap});
	// var markerKB = new google.maps.Marker({position: kereruLocation, map: breweryMap});
	// var markerHBC = new google.maps.Marker({position: heydayBeerCoLocation, map: breweryMap});
	// var markerGPB = new google.maps.Marker({position: garageProjectLocation, map: breweryMap});
	// var markerPD = new google.maps.Marker({position: parrotdogLocation, map: breweryMap});
	// var markerBB = new google.maps.Marker({position: baylandsBreweryLocation, map: breweryMap});
	// var markerDVB = new google.maps.Marker({position: doubleVisionBrewery, map: breweryMap});
	// var markerWSC = new google.maps.Marker({position: whistlingSistersBeerCo, map: breweryMap});
	// var markerFandB = new google.maps.Marker({position: forkAndBrewer, map: breweryMap});

	// Creates info window for user to be able to read more info about the breweries
	// var panheadInfo = 
	// 	'<div id="breweryInfo" class="text-primary">' + 
	// 		'<div class="brewery-header">' +
	// 			'<h2>' + breweries[0].name + ' Brewery</h2>' +
	// 		'</div>' +
	// 		'<div class="brewery-iWindow-body row">' +
	// 			'<div class="col-6">' +
	// 				'<h4>Open Days</h3>' +
	// 				'<p>' + breweries[0].openDays + '</p>' +
	// 			'</div>' + 
	// 			'<div class="col-6">' +
	// 				'<h4>Opening Hours</h3>' +
	// 				'<p>' + breweries[0].openHours + '</p>' +
	// 			'</div>'+
	// 		'</div>' +
	// 	'</div>';

	// // For loop
	// function breweryInfoWindow(){
	// 	'<div id="breweryInfo" class="text-primary">' + 
	// 		'<div class="brewery-header">' +
	// 			'<h2>' + breweries[i].name + ' Brewery</h2>' +
	// 		'</div>' +
	// 		'<div class="brewery-iWindow-body row">' +
	// 			'<div class="col-6">' +
	// 				'<h4>Open Days</h3>' +
	// 				'<p>' + breweries[i].openDays + '</p>' +
	// 			'</div>' + 
	// 			'<div class="col-6">' +
	// 				'<h4>Opening Hours</h3>' +
	// 				'<p>' + breweries[i].openHours + '</p>' +
	// 			'</div>'+
	// 		'</div>' +
	// 	'</div>';
	// }

	// Matches the info for window to the google api
	// var infoWindow = new google.maps.InfoWindow({
	// 	daysOpen: props.daysOpen
	// });
	// var markerPH = new google.maps.Marker({
	// 	title: breweries[0].name, 
	// 	position: panHeadLocation, 
	// 	map: breweryMap
	// });
	// marker.addListener('click', function(){
	// 	infoWindow.open(map, daysOpen);
	// });


	// Tutorial video 

























