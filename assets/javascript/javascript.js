// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
// Zomato = 3e2640fc9c2ecf3e452dfc86b352db7f
$(document).ready(function() {
  var cityName = ""
  var stateName = ""
  var countryName = ""
  var cityArray = [
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Raleigh"
    }, 
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Chapel Hill"
    },
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Greensboro"
    },
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Wilmington"
    },
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Asheville"
    },
    {
      stateShort: "NC",
      stateLong: "North Carolina",
      city: "Durham"
    }
]

$("#searchButton").on("click", function() {
  event.preventDefault();

//declaring working variables
console.log("hello")
cityName = $("#inputCity").val().trim();
stateName = $("#inputState").val().trim();
countryName = "USA"

});
});
