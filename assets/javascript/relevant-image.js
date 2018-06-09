$("#searchButton").on("click", function (event) {
  event.preventDefault();
  // Empty the image div
  $(".stock-image").empty();

  // Get the inputs from the city and state textboxes
  var newCity = $("#inputCity").val().trim();
  var newState = $("#inputState").val().trim();
  
  // Set a search variable for the city / state value
  var citySearch = "";

  // Check to see if eithr the city or state are blank
  if (newCity == "" || newState == "") {
    // If either are blank, default to...
    var citySearch = "Raleigh, NC skyline";
  } else {
    var citySearch = newCity + ", " + newState + " skyline";
  }

  // Log the result as a check
  console.log("The city is :" + newCity + ", " + newState);

  // Establish the Flickr API parameters
  // Reference https://www.flickr.com/services/api/flickr.photos.search.html for info
  var api_key = "9c1a367e62f5f09dd9bc8e5fafa2f6a9";
  var page = 1;
  var per_page = 5;
  var format = "json";
  var callback = 1; // for json response formatting
  var extras = "description, url_c, url_l, url_o";
  var safe_search = 1; // safe
  var content_type = 1; // photos only

  // Create variables for min / max to create a random number of pictures to choose from
  var targetMax = 5;
  var targetMin = 0;

  // Create a variable for the random target number
  var targetNumber = Math.floor(Math.random() * targetMax) + targetMin;

  // Construct a queryURL based on the Flickr parameters
  var queryURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + api_key + "&text=" + citySearch + "&extras=" + extras + "&page=" + page + "&per_page=" + per_page + "&safe_search=" + safe_search + "&content_type=" + content_type + "&format=" + format + "&nojsoncallback=" + callback;

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

      // Create a an image tag
      var stockImage = $("<img>");
      stockImage.addClass("stockImage img-responsive img-thumbnail");

      // Set the stock image source to the Flickr result
      stockImage.attr("src", response.photos.photo[targetNumber].url_l);

      // Append the image to the image div
      $(".stock-image").append(stockImage);

    });
});