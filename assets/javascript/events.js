var cityName = "";
var cityNum = 0;
var currentCity = {};

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  // Empty the Wikipedia info div
  $(".wiki-info").empty();

  // Get the inputs from the city select
  cityName = $("#inputCity").val();

  // function that will return the selected city object from the cityArray
  function getCity() {
    cityNum = cityNameArray.indexOf(cityName);
    currentCity = cityArray[cityNum];
  }

  // calling the getCity function
  getCity();
  
console.log(cityLat);
console.log(cityLon);

var APIKey = "wmKcj9CwphKVnTWv";
var queryURL = "https://api.eventful.com/json/events/search?...&where=" + cityLat + "," + cityLon + "&within=25&authorization=" + APIKey;
function getEvents(){
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
    });
  }
getEvents();
})