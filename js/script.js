console.log('Wellington Brewries');
// Brewries locations
var brewries = [
	{
		id : 101,
		name : 'Panhead',
		latitude : -41.131073,
		locations : 175.067505,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 102,
		name : 'Boneface',
		latitude : -41.130121, 
		locations : 175.068525,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm', '11am - 9pm']
	},
	{
		id : 103,
		name : 'Kereru',
		latitude : -41.129686, 
		locations : 175.072361,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 4pm', '9am - 4pm', '9am - 4pm', '10am - 5pm', '10am - 5pm']
	},
	{
		id : 104,
		name : 'Heyday Beer Co',
		latitude : -41.295940, 
		locations : 174.773553,
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 11pm', '3pm - 11pm', '11am - 10pm', '11am - 10pm', '11am - 12am', '11am - 12am', '11am - 9pm']
	},
	{
		id : 105,
		name : 'Garage Project Cellar Dorr',
		latitude : -41.294491,  
		locations : 174.767862,
		openDays : ['Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['12pm - 7pm', '12pm - 8.30pm', '12pm - 8.30pm', '12pm - 8.30pm', '10am - 9.30pm', '10am - 9.30pm', '12pm - 7pm']
	},
	{
		id : 106,
		name : 'Parrotdog Brewery',
		latitude : -41.326756,   
		locations : 174.799773,
		openDays : ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 7pm', '1pm - 7pm', '11am - 8pm', '11am - 8pm', '12pm - 6pm']
	},
	{
		id : 107,
		name : 'Baylands Brewery',
		latitude : -41.225268,   
		locations : 174.873098,
		openDays : ['Tue' , 'Wed', 'Thu', 'Fri', 'Sat'],
		openHours : ['9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '9am - 5.30pm', '11am - 5.30pm']
	},
	{
		id : 108,
		name : 'Double Vision Brewing',
		latitude : -41.309406,    
		locations : 174.821354,
		openDays : ['Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 10.30pm', '3pm - 11.30pm', '12pm - 11.30pm', '12pm - 9.00pm'] 
	},
	{
		id : 109,
		name : 'Whistling Sisters Beer Co',
		latitude : -41.294065,     
		locations : 174.777728,
		openDays : ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		openHours : ['3pm - 12am', '3pm - 12.00am', '3pm - 12am', '11:30am – 1am', '10am - 1am', '10am - 12am'] 
	},
	{
		id : 110,
		name : 'Fork and Brewer',
		latitude : -41.289235,     
		locations : 174.775628,
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
var myKey = JSON.parse(apiKey); // Convert JSON data into js object
console.log(myKey[0].key);

// Dynamically creating the script element
var script = document.createElement('script');
// Giving the src attribute to the google plug in from external json file
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
// Appending to the body of index.html
document.getElementsByTagName('body')[0].appendChild(script); 


var breweryMap;
function initMap() {
	// Works out the location of the marker
	var forkAndBrewer = {
			lat: -41.289235, 
			lng: 174.775628
		};
	// Initialises the google map so that it displays on the web page
	breweryMap = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -41.289235, 
			lng: 174.775628
		},
		zoom: 15
	});
	// Prints the marker on the google map
	var markerFandB = new google.maps.Marker({
		position: forkAndBrewer, map: breweryMap
	});
}



























