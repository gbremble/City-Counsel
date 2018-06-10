// $("#searchButton").on("click", function (event) {
//   event.preventDefault();
//   // Empty the image div
//   $(".stock-image").empty();

//   // Get the inputs from the city and state textboxes
//   var newCity = $("#inputCity").val().trim();
//   var newState = $("#inputState").val().trim();

//   // Set a search variable for the city / state value
//   var citySearch = "";

//   // Check to see if eithr the city or state are blank
//   if (newCity == "" || newState == "") {
//     // If either are blank, default to...
//     var citySearch = "Raleigh, NC";
//   } else {
//     var citySearch = newCity + ", " + newState;
//   }

//   // Log the result as a check
//   console.log("The city is :" + newCity + ", " + newState);

//   // Reference https://www.mediawiki.org/wiki/API:Query for query related info
//   // Construct a queryURL based on the mediaWiki parameters
//   var queryURL = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=1&titles=" + citySearch + "&redirects&origin=*&formatversion=2";

//   // Log the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");

//   // Perform an AJAX request with the queryURL
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//     // After data comes back from the request
//     .then(function (response) {
//       console.log(response);

//       // Create a div to hold the info
//       var wikiDiv = $("<div>");
//       wikiDiv.addClass("wikiInfo");

//       // Set a string variable to capture the response text
//       var str = response.query.pages[0].extract;
//       // Set the start and end position of the string
//       var startPos = str.indexOf("<p>") + "<p>".length;
//       var endPos = str.indexOf("</p>");
//       // Read the text between the start and end positions
//       var targetText = str.substring(startPos, endPos).trim();
//       console.log(targetText);

//       // Insert the info
//       wikiDiv.html("<p>" + targetText + "</p>");

//       // Append the wikiDiv to the image div
//       $(".stock-image").append(wikiDiv);
//     });
// });