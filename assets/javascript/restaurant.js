// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
$(document).ready(function() {
  var cityName = "";
  var stateName = "";
  var countryName = "";
  var cityNum = 0;
  var currentCity = {};
  // console.log(cityArray);

$("#searchButton").on("click", function(event) {
  event.preventDefault();
  $("#restaurantCard").toggleClass("d-none", false);
  // initialize table
  $("#restaurantTable").empty();

  //declaring working variables
  console.log("hello")
  cityName = $("#inputCity").val();
  // stateName = $("#inputState").val().trim();
  countryName = "USA"

   // get the selected city from the city select input field
   var cityName = $("#inputCity").val();
   function getCity() {
     console.log(cityName);
     cityNum = cityNameArray.indexOf(cityName);
     console.log(cityNum);
     currentCity = cityArray[cityNum];
     console.log(currentCity);
   }
   getCity();
  // // Gets the lat and long of the city the user inputs
  // for(var i = 0; i < cityArray.length; i++) {
  //   console.log(cityArray[i].city);
  //   if(cityName === cityArray[i].city) {
  //     var cityLat = cityArray[i].lat;
  //     var cityLong = cityArray[i].lon;
  //     console.log("success")
  //   }
  var cityLat = currentCity.lat;
  var cityLong = currentCity.lon;
  console.log(currentCity.lat);
  console.log(currentCity.lon);

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
    queryParams.lon = cityLong;
    
    // build queryURL that will be sent to the API
    var queryURL = apiURL + $.param(queryParams);
    console.log(queryURL);

    $.ajax({
      headers: {
        "user-key": "3e2640fc9c2ecf3e452dfc86b352db7f"
      },
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      // storing response
      var results = response.restaurants;

      // looping over response to create rows to display response in the restaurant table
      for( var j = 0; j < results.length; j++) {
        // create and store table rows
        var restaurantRow = $("<tr>");
        
        // create cell and store restaurant name in it
        var restaurantName = $("<td>").append(results[j].restaurant.name); 
        
        // create cell and store restaurant address in it
        var restaurantAddress = $("<td>").append(results[j].restaurant.location.address);

        // create cell and store cuisine in it
        var cuisine = $("<td>").append(results[j].restaurant.cuisines);

        // create cell and store rating in it
        var rating = $("<td>").append(results[j].restaurant.user_rating.aggregate_rating);

        // create cell and store price range in it
        var priceRange = $("<td>").append((results[j].restaurant.currency).repeat(results[j].restaurant.price_range));
        
        // add all the data to the table row
        restaurantRow.append(restaurantName);
        restaurantRow.append(restaurantAddress);
        restaurantRow.append(cuisine);
        restaurantRow.append(rating);
        restaurantRow.append(priceRange);

        // add the row to the table
        $("#restaurantTable").append(restaurantRow);
      }
    })
  }
  // call the getRestaurant function
  getRestaurants();
  });
});
