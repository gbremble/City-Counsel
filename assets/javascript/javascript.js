// API keys
// Ticketmaster = L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP
// Zomato = 3e2640fc9c2ecf3e452dfc86b352db7f
$(document).ready(function() {
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
    }
  ]

  $(document).on("click", "#searchButton", function(event) {
    // prevent submit button from refreshing page
    event.preventDefault();
    
    // grabbing and storing values from the inputs
    var city = $("#inputCity").val().trim();
    var state = $("#inputState").val();

    function getRestaurants() {
      var restaurantRow = $("<tr>");
      console.log(restaurantRow);
      var restaurantName = $("<td>").val("Taco Bell");
      restaurantRow.append(restaurantName);
      $("#restaurantTable").append(restaurantRow)
    }
    getRestaurants();
  });
});