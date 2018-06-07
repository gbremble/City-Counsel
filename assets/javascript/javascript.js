// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
// Zomato = 3e2640fc9c2ecf3e452dfc86b352db7f
var cityName = ""
var stateName = ""
var countryName = ""
var cityArray = [
  {
    state: "NC",
    city: "Raleigh"
  },

  {
    state: "NC",
    city: "Chapel Hill"
  },

  {
    state: "NC",
    city: "Greensboro"
  },

  {
    state: "NC",
    city: "Wilmington"
  },

  {
    state: "NC",
    city: "Asheville"
  }
]

$("#searchButton").on("click", function() {
  event.preventDefault();

//declaring working variables
console.log("hello")
cityName = $("#inputCity").val().trim();
stateName = $("#inputState").val().trim();
countryName = "USA"

//added since last PR
// forecast URL vs weather URL http://api.openweathermap.org/data/2.5/forecast?q=Raleigh,NC,USA&apikey=28e4dca7e5a6a9336edc60ea02073b04
//API key
var APIKey = "28e4dca7e5a6a9336edc60ea02073b04";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "," + stateName + "," + countryName + "&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(queryURL);
      console.log(response);
    var weatherDiv = $("<div>");
    weatherDiv.text("test");
    
    $("body").append(weatherDiv)

      // $("#weather-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td><td>" + nextTrain + "</td><td>" + tilNextTrain + "</td></tr>");



});
});

