// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

var weatherBtn = document.getElementById('weather');

weatherBtn.addEventListener('click', function (){
    
	var p = document.getElementById('weather-result')  

	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function(position){
			loadWeather(position.coords.latitude + ', ' + position.coords.longitude)
		});
	  } else {
		// p.innerHTML = "Geolocation is not supported by this browser." ;
		loadWeather("Kolkata, IN", "");
	}
	function showPosition(position) {
		p.innerHTML = "Latitude: " + position.coords.latitude +
		"<br>Longitude: " + position.coords.longitude;
	}
})

function loadWeather(location, woeid){
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'c',
		success: function(weather){
			city = weather.city;
			temp = weather.temp+'&deg;';
			// wcode = 
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';

			$(".location").text(city);
			$(".temperature").html(temp);
			// $(".climate_bg").html
			$(".windspeed").html(wind);
			$(".humidity").text(humidity)
		},
		error: function(error){
			$(".error").html('<p>'+ error + '</p>')
		}
	})
}