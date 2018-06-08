// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
// Zomato = 3e2640fc9c2ecf3e452dfc86b352db7f
$(document).ready(function() {
  var cityName = ""
  var stateName = ""
  var countryName = ""
  var cityArray = [
    {
      state: "NC",
      lat: "35.779590",
      long: "-78.638179",
      city: "Raleigh"
    }, 
    {
      state: "NC",
      lat: "35.913200",
      long: "-79.055845",
      city: "Chapel Hill"
    },
    {
      state: "NC",
      lat: "36.044659",
      long: "-79.766235",
      city: "Greensboro"
    },
    {
      state: "NC",
      lat: "34.225726",
      long: "-77.944710",
      city: "Wilmington"
    },
    {
      state: "NC",
      lat: "35.595058",
      long: "-82.551487",
      city: "Asheville"
    },
    {
      state: "NC",
      lat: "35.994033",
      long: "-78.898619",
      city: "Durham"
    }
  ]

$("#searchButton").on("click", function(event) {
  event.preventDefault();

  // initialize table
  $("#restaurantTable").empty();
  //declaring working variables
  console.log("hello")
  cityName = $("#inputCity").val().trim();
  stateName = $("#inputState").val().trim();
  countryName = "USA"
  // Gets the lat and long of the city the user inputs
  for(var i = 0; i < cityArray.length; i++) {
    console.log(cityArray[i].city);
    if(cityName === cityArray[i].city) {
      var cityLat = cityArray[i].lat;
      var cityLong = cityArray[i].long;
      console.log("success")
    }
  }
  console.log(cityLat);
  console.log(cityLong);

  function getRestaurants() {
    // URL for Zomato API
    var apiURL = "https://developers.zomato.com/api/v2.1/search?";

    // Object to hold API call's query parameters
    var queryParams = {
      "entity_type": "subzone",
      "radius": 5000,
      "count": 5,
      "sort": "rating",
      "order": "desc"
    };
    // Add city as a search term to the queryParam object
    queryParams.q = cityName;
    // Add city's latitude to the queryParam object
    queryParams.lat = cityLat;
    // Add city's longitude to the queryParam object
    queryParams.long = cityLong;
    
    // build queryURL that will be sent to the API
    var queryURL = apiURL + $.param(queryParams);
    console.log(queryURL);
  }
  // call the getRestaurant function
  getRestaurants();

  var restaurantRow = $("<tr>");
  var restaurantName = $("<td>").append(cityName);
  restaurantRow.append(restaurantName);
  $("#restaurantTable").append(restaurantRow);
  });
});
