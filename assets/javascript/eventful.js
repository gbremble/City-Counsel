var cityName = "";
var cityNum = 0;
var currentCity = {};
var cityLat = 0
var cityLon = 0
// $.support.cors = true;

$("#searchButton").on("click", function (event) {
  event.preventDefault();

  // Get the inputs from the city select
  cityName = $("#inputCity").val();

  // function that will return the selected city object from the cityArray
  function getCity() {
    cityNum = cityNameArray.indexOf(cityName);
    currentCity = cityArray[cityNum];
  }

  // calling the getCity function
  getCity();

  cityLat = currentCity.lat;
  cityLon = currentCity.lon;
  
console.log(cityLat);
console.log(cityLon);
console.log($.support.cors)

var APIKey = "wmKcj9CwphKVnTWv";
var queryURL = "http://api.eventful.com/json/events/search?...&where=" + cityLat + "," + cityLon + "&within=25&app_key=" + APIKey;
function getEvents(){
    $.ajax({
      url: "https://api.eventful.com/json/events/search?...&where=35.99995892,-78.91999964&within=25&app_key=wmKcj9CwphKVnTWv",
      method: "GET",
      crossDomain: true
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
    });
  }
getEvents();
})