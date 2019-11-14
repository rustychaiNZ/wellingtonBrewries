console.log('Wellington Brewries');
// Brewries locations
var brewries = [
	{
		id : 101,
		name : 'Panhead',
		latitude : -41.131073,
		longtitude : 175.067505,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 102,
		name : 'Boneface',
		latitude : -41.130121, 
		longtitude : 175.068525,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 103,
		name : 'Kereru',
		latitude : -41.129686, 
		longtitude : 175.072361,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 4pm', '9am - 4pm', '9am - 4pm', '10am - 5pm', '10am - 5pm']
	},
	{
		id : 104,
		name : 'Heyday Beer Co',
		latitude : -41.295940, 
		longtitude : 174.773553,
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 11pm', '3pm - 11pm', '11am - 10pm', '11am - 10pm', '11am - 12am', '11am - 12am', '11am - 9pm']
	},
	{
		id : 105,
		name : 'Garage Project Cellar Dorr',
		latitude : -41.294491,  
		longtitude : 174.767862,
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['12pm - 7pm', '12pm - 8.30pm', '12pm - 8.30pm', '12pm - 8.30pm', '10am - 9.30pm', '10am - 9.30pm', '12pm - 7pm']
	},
	{
		id : 106,
		name : 'Parrotdog Brewery',
		latitude : -41.326756,   
		longtitude : 174.799773,
		openDays : ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 7pm', '1pm - 7pm', '11am - 8pm', '11am - 8pm', '12pm - 6pm']
	},
	{
		id : 107,
		name : 'Baylands Brewery',
		latitude : -41.225268,   
		longtitude : 174.873098,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '11am - 5.30pm']
	},
	{
		id : 108,
		name : 'Double Vision Brewing',
		latitude : -41.309406,    
		longtitude : 174.821354,
		openDays : ['Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 10.30pm', '3pm - 11.30pm', '12pm - 11.30pm', '12pm - 9.00pm'] 
	},
	{
		id : 109,
		name : 'Whistling Sisters Beer Co',
		latitude : -41.294065,     
		longtitude : 174.777728,
		openDays : ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 12am', '3pm - 12.00am', '3pm - 12am', '11:30am – 1am', '10am - 1am', '10am - 12am'] 
	},
	{
		id : 110,
		name : 'Fork and Brewer',
		latitude : -41.289235,     
		longtitude : 174.775628,
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['11.30am - 11pm', '11.30am - 12am', '11.30am - 12am', '11.30am - 12am', '11.30am - 10pm', '11.30am - 12am', '11.30am - 10pm'] 
	}
];

$('#map').hide();
$('#hideMap').hide();
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



function contentWindow(){

}


var breweryMap;
// Function that places the map and it's markers
function initMap() {
	// Initialises the google map so that it displays on the web page
	breweryMap = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -41.241098,
			lng: 174.824240
		},
		zoom: 11
	});

	// Works out the location of the marker
	var panHeadLocation = {lat: brewries[0].latitude, lng: brewries[0].longtitude};
	var BonefaceLocation = {lat: brewries[1].latitude, lng: brewries[1].longtitude};
	var kereruLocation = {lat: brewries[2].latitude, lng: brewries[2].longtitude};
	var heydayBeerCoLocation = {lat: brewries[3].latitude, lng: brewries[3].longtitude};
	var garageProjectLocation = {lat: brewries[4].latitude, lng: brewries[4].longtitude};
	var parrotdogLocation = {lat: brewries[5].latitude, lng: brewries[5].longtitude};
	var baylandsBreweryLocation = {lat: brewries[6].latitude, lng: brewries[6].longtitude};
	var doubleVisionBrewery = {lat: brewries[7].latitude, lng: brewries[7].longtitude};
	var whistlingSistersBeerCo = {lat: brewries[8].latitude, lng: brewries[8].longtitude};
	var forkAndBrewer = {lat: brewries[9].latitude,  lng: brewries[9].longtitude};
	
	// Prints the markers on the google map
	var panHeadLocation = new google.maps.Marker({position: panHeadLocation, map: breweryMap});
	var markerBFB = new google.maps.Marker({position: BonefaceLocation, map: breweryMap});
	var markerKB = new google.maps.Marker({position: kereruLocation, map: breweryMap});
	var markerHBC = new google.maps.Marker({position: heydayBeerCoLocation, map: breweryMap});
	var markerGPB = new google.maps.Marker({position: garageProjectLocation, map: breweryMap});
	var markerPD = new google.maps.Marker({position: parrotdogLocation, map: breweryMap});
	var markerBB = new google.maps.Marker({position: baylandsBreweryLocation, map: breweryMap});
	var markerDVB = new google.maps.Marker({position: doubleVisionBrewery, map: breweryMap});
	var markerWSC = new google.maps.Marker({position: whistlingSistersBeerCo, map: breweryMap});
	var markerFandB = new google.maps.Marker({position: forkAndBrewer, map: breweryMap});

	// Creates info window for user to be able to read more info about the breweries
	var panheadInfo = 
		'<div id="iWindow" class="bg-success text-primary">' + 
			'<div class="brewery-header>' +
				'<h2>' + brewries[0].name + '</h2>' +
			'</div>' +
			'<div class="brewery-iWindow-body row>"' +
				'<div class="col-6">'
					'<h3>Open Days</h3>' +
					'<p>' + brewries[0].openDays + '</p>' +
				'</div>' + 
				'<div class="col-6">' +
					'<h3>Opening Hours</h3>' +
					'<p>' + brewries[0].openHours + '</p>' +
				'</div>'+
			'</div>' +
		'</div>';

	// Matches the info for window to the google api
	var panheadInfoWindow = new google.maps.InfoWindow({content: panheadInfo});

	marker1.addListener('click', function() {infowindow1.open(map, marker1);});
}



























