$("#searchButton").on("click", function(event) {
  event.preventDefault();

var  cityName = $("#inputCity").val().trim();
var  stateName = $("#inputState").val().trim();
var  countryName = "US"
  
// var newcityName = currentCity.name;
// var newstateName = currentCity.stateShort;
// var newcountryName = currentCity.country;
// var newcityLat = currentCity.lat;
// var newcityLon = currentCity.lon;

for(var i = 0; i < cityArray.length; i++) {
  console.log(cityArray[i].city);
  if(cityName === cityArray[i].city) {
    var cityLat = cityArray[i].lat;
    var cityLon = cityArray[i].lon;
    console.log("success")
  }
}
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