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

