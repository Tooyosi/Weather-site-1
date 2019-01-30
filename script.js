// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


	let x = document.getElementById("lat"),
	y = document.getElementById("lon"),
	button = document.getElementById("we-button"),
	ct = document.getElementById("city"),
	coun = document.getElementById("country"),
	temp = document.getElementById("temp"),
	img = document.getElementById("icon"),
	desc = document.querySelector(".desc")
 
 
 
 function getLocation() {
	 if (navigator.geolocation) {
		 navigator.geolocation.getCurrentPosition(showPosition);
	 } else {
		 x.innerHTML = "Geolocation is not supported by this browser.";
	 }
	 
 }
 function showPosition(position) {
	 const lat = position.coords.latitude;
	 const lon = position.coords.longitude;
	 x.innerHTML = "Latitude: " + lat;
	 y.innerHTML = "Longitude: " + lon;
	 
	 let host = 'https://fcc-weather-api.glitch.me'
	 
	 axios.get(`${host}/api/current?lat=${lat}&lon=${lon}`)
	 .then( function(response) {
		 const { data:{data}} = response,
			city= response.data.name,
			country= response.data.sys.country,
			temperature = response.data.main.temp,
			icon = response.data.weather[0].icon,
			desc = response.data.weather[0].description;
			 console.log(response)
			 ct.innerHTML = city;
			 coun.innerHTML = country;
			 temp.innerHTML = `${temperature}&deg;C`;
			 img.src = icon,
			 img.alt = desc;
		 })
	 }