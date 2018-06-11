var cityName = "";
var cityNum = 0;
var currentCity = {};

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  // Empty the Wikipedia info div
  $(".wiki-info").empty();

  // Get the inputs from the city select
  cityName = $("#inputCity").val();

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


  // Reference https://www.mediawiki.org/wiki/API:Query for query related info
  // Construct a queryURL based on the mediaWiki parameters
  var queryURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=" + citySearch + "&redirects&origin=*&formatversion=2";

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

      // Create a div to hold the info
      var wikiText = $("<p>");

      // Set a string variable to capture the response text
      var str = response.query.pages[0].extract;
      // Set the start and end position of the string
      var startPos = str.indexOf("<p>") + "<p>".length;
      var endPos = str.indexOf("</p>");
      // Read the text between the start and end positions
      var targetText = str.substring(startPos, endPos).trim();
      console.log(targetText);

      // Insert the info
      wikiText.append(targetText);

      // Append the wikiDiv to the image div
      $(".wiki-info").append(wikiText);
    });
});