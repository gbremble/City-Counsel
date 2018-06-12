var cityName = "";
var cityNum = 0;
var currentCity = {};

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  // Empty the image div
  $(".stock-image").empty();
  // Get the inputs from the city select
  cityName = $("#inputCity").val();
  console.log(cityName);

  // function that will return the selected city object from the cityArray
  function getCity() {
    cityNum = cityNameArray.indexOf(cityName);
    currentCity = cityArray[cityNum];
  }

  // calling the getCity function
  getCity();

  // Set a search variable for the city / state value
  var citySearch = "";

  // Check to see if the city is blank
  if (cityName == "") {
    // If it's blank, default to...
    citySearch = "Raleigh, NC";
  } else {
    citySearch = currentCity.city + ", " + currentCity.stateShort;
  }

  // Log the result as a check
  console.log("The city is : " + currentCity.city + ", " + currentCity.stateShort);

  // Establish the Flickr API parameters
  // Reference https://www.flickr.com/services/api/flickr.photos.search.html for info
  var api_key = "9c1a367e62f5f09dd9bc8e5fafa2f6a9";
  var page = 1;
  var per_page = 5;
  var format = "json";
  var callback = 1; // for json response formatting
  var extras = "description, url_c, url_l, url_o";
  var safe_search = 1; // safe
  var content_type = 7; // all
  var addedText = ", skyline";

  // Construct a queryURL based on the Flickr parameters
  var queryURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + citySearch + addedText + "&extras=" + extras + "&page=" + page + "&per_page=" + per_page + "&safe_search=" + safe_search + "&content_type=" + content_type + "&format=" + format + "&nojsoncallback=" + callback;

  // Log the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");

  // Perform an AJAX request with the queryURL
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After data comes back from the request
    .then(function (response) {
      console.log(response);

      // Get the length of the photos array and store it in a variable
      var arrayLength = response.photos.photo.length;

      // Create variables for min / max to create a random number
      var targetMax = arrayLength - 1;
      var targetMin = 0;

      // Create a variable for the random target number
      var targetNumber = Math.floor(Math.random() * targetMax) + targetMin;

      // Create a an image tag
      var stockImage = $("<img>");
      stockImage.addClass("img-responsive img-thumbnail");

      // Set the stock image source to the Flickr result (random selection from the photo array)
      stockImage.attr("src", response.photos.photo[targetNumber].url_l);

      // Append the image to the image div
      $(".stock-image").append(stockImage);
    });
});