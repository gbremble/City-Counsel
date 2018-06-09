$("#searchButton").on("click", function (event) {
  event.preventDefault();
  // Empty the image div
  $("#stock-image").empty();

  // // Get the inputs from the city and state textboxes
  // var newCity = $("#inputCity").val().trim();
  // var newState = $("#inputState").val().trim();

  // // Log the result to check
  // console.log("The city is :" + newCity + ", " + newState);

  // Establish the API parameters
  var client_id = "0143959a792033b686b3ca7dfb7c112c773ede2d11cdae07e2942bb1a9f27927";
  var query = "city";
  var page = "1";
  var per_page = "1";
  var orientation = "landscape";

  // Construct a queryURL based on the parameters
  var queryURL = "https://api.unsplash.com/search/photos/?client_id=" +
    client_id + "&query=" + query + "&page=" + page + "&per_page=" + per_page + "&orientation=" + orientation;

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

      // Set the stock image source
      stockImage.attr("src", response.results[0].urls.regular);

      // Append the image to the gif div
      $("#stock-image").append(stockImage);

    });
});