$(document).ready(function () {
    var cityName = "";
    var cityNum = 0;
    var currentCity = {};
    // console.log(cityArray);

    $("#searchButton").on("click", function (event) {
        event.preventDefault();
        $("#restaurantCard").toggleClass("d-none", false);
        // initialize table
        $("#restaurantTable").empty();

        // get the selected city from the city select input field
        cityName = $("#inputCity").val();

        // function that will return the selected city object from the cityArray
        function getCity() {
            cityNum = cityNameArray.indexOf(cityName);
            currentCity = cityArray[cityNum];
        }
        // calling the getCity function
        getCity();

        // grabbing and storing the latitude for the selected city
        var cityLat = currentCity.lat;
        // grabbing and storing the latitude for the selected city
        var cityLong = currentCity.lon;
        // grabbing and storing city and state for the selected city
        var citySearch = currentCity.city + ", " + currentCity.stateShort;


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
            queryParams.q = currentCity.citySearch;
            // Add city's latitude to the queryParam object
            queryParams.lat = cityLat;
            // Add city's longitude to the queryParam object
            queryParams.lon = cityLong;

            // build queryURL that will be sent to the API
            var queryURL = apiURL + $.param(queryParams);

            $.ajax({
                    headers: {
                        "user-key": "3e2640fc9c2ecf3e452dfc86b352db7f"
                    },
                    url: queryURL,
                    method: "GET"
                })
                .then(function (response) {
                    // storing response
                    var results = response.restaurants;
                    // looping over response to create rows to display response in the restaurant table
                    for (var j = 0; j < results.length; j++) {
                        // create and store table rows
                        var restaurantRow = $("<tr>");

                        // create and store cell for restaurantName
                        var restaurantCell = $("<td>");

                        // make the restaurant name a link to the restaurant's Zomato page
                        var restaurantName = "<a href=" + results[j].restaurant.url + ' target="_blank">' + results[j].restaurant.name + "</a>";

                        // append store restaurant name in into restaurantCell
                        restaurantCell.append(restaurantName);

                        // create cell and store restaurant address in it
                        var restaurantAddress = $("<td>").append(results[j].restaurant.location.address);

                        // create cell and store rating in it
                        var rating = $("<td>").append(results[j].restaurant.user_rating.aggregate_rating);

                        // get and store result color from the results
                        var ratingColor = results[j].restaurant.user_rating.rating_color;

                        // add the stored result color to the rating
                        rating.attr("style", "color:#" + ratingColor);

                        // create cell and store cuisine in it
                        var cuisine = $("<td>").append(results[j].restaurant.cuisines);

                        // create cell and store price range in it
                        var priceRange = $("<td>").append((results[j].restaurant.currency).repeat(results[j].restaurant.price_range));

                        // add all the data to the table row
                        restaurantRow.append(restaurantCell);
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