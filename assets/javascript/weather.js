$("#searchButton").on("click", function(event) {
  event.preventDefault();

//declaring working variables
console.log("hello")
cityName = $("#inputCity").val().trim();
stateName = $("#inputState").val().trim();
countryName = "USA"

//added since last PR
// forecast URL vs weather URL http://api.openweathermap.org/data/2.5/forecast?q=Raleigh,NC,USA&apikey=28e4dca7e5a6a9336edc60ea02073b04
//API key
var APIKey = "28e4dca7e5a6a9336edc60ea02073b04";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "," + stateName + "," + countryName + "&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(queryURL);
      console.log(response);
      console.log(response.list[0].dt);
      console.log(response.list[0].main.temp_min);
      console.log(response.list[0].main.temp_max);
      console.log(response.list[0].weather[0].main);
      console.log(response.list[0].weather[0].icon);
      console.log(response.list[0].weather[0].description);
      console.log(response.list);


      var time = response.list[0].dt
      var tempLow = response.list[0].main.temp_min
      var tempHigh = response.list[0].main.temp_max
      var conditions = response.list[0].weather[0].main;
      var iconCode = response.list[0].weather[0].icon;
      var conditionDescription = response.list[0].weather[0].description;
    

    var weatherDiv = $("<div>");
    weatherDiv.addClass("card");
    weatherDiv.attr("id", "weatherDiv");
    
    $("#resultsDiv").append(weatherDiv);

    $("#weatherDiv").html('    <div class="card-header bg-primary text-white">                <h3 class="card-title">Weather</h3>              </div>            <div class="card-body">              <table class="table table-striped" id="weather-table">                <thead>                  <tr>                    <th>Day</th>                    <th>Conditions</th>                    <th>High</th>                    <th>Low</th>                    <th>Precipitation</th>                    </tr>                  </thead>                <tbody id="weather-rows">                  </tbody>                </table>');

    $("#weather-rows").append("<tr><td>" + time + "</td><td>" + conditions + "</td><td>" +  tempHigh + "</td><td>" + tempLow + "</td><td>" + conditionDescription + "</td></tr>");




});
})