var cityName = "";
var cityNum = 0;
var currentCity = {};
//search event
$("#searchButton").on("click", function(event) {
  event.preventDefault();
  $("#weatherDiv").toggleClass("d-none", false);
  // toggle the target div visibility and empty the results from last search
  $("#forecastRow").empty();



cityName = $("#inputCity").val();

// function that will return the selected city object from the cityArray
function getCity() {
  cityNum = cityNameArray.indexOf(cityName);
  currentCity = cityArray[cityNum];
}

// calling the getCity function
getCity();

// var APIKey = "28e4dca7e5a6a9336edc60ea02073b04";
var APIKey = "166a433c57516f51dfab1f7edaed8413";
//api stuff
var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + currentCity.city + "," + currentCity.iso2 + "&cnt=6&appid=" + APIKey;
var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.city + "," + currentCity.iso2 + "&appid=" + APIKey;
function getForecast(){
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // console.log(queryURL);
      console.log(response);

//for loop to get data from each day of the forecast
    for (i=0; i<5; i++) {
      var timeU = response.list[i].dt
      var tempLowK = response.list[i].temp.min
      var tempHighK = response.list[i].temp.max
      var conditions = response.list[i].weather[0].main;
      var iconCode = response.list[i].weather[0].icon;
      var conditionDescription = response.list[i].weather[0].description;
      
//converting data into usable pieces
      tempLow = Math.round((tempLowK * 1.8) - 459.67);
      tempHigh = Math.round((tempHighK * 1.8) - 459.67);
      time = moment.unix(timeU).format('ddd');
      iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
      iconImg = '<img class="mt-0 mb-0 weatherIcon" src=' + iconURL + ' height="45" width="45" alt="' + conditionDescription + '">';  

      //create a responsive column to hold each card (which we will create shortly)
      var dayDiv = $("<div>");
      dayDiv.addClass("text-justify");
      dayDiv.addClass("col-xs-12")
      dayDiv.addClass("col-sm-6");
      dayDiv.addClass("col-md-4");
      dayDiv.addClass("col-lg-4");
      dayDiv.addClass("col-xl-2");
      //create a card for each day of the forecast
      var weathDiv = $("<div>");
      weathDiv.addClass("card ml-0 mr-0 mt-2 mb-2 h-95")
      weathDiv.attr("dayNum", i+1);
      //float the name and weather icon on opposite sides of the card header
      weathDiv.append("<div class='card-header bg-secondary text-white'><div class='float-left'><h4 class='align-bottom pb-0 mb-0'>" + time + "</h4></div><div class='float-right small mt-0 pt-0'>" + iconImg + "</div><div class='clearfix'></div></div>");
      //create the card body to contain conditions and temperatures
      var weathBody = $("<div class='card-body mb-4 mt-4'>");
      weathBody.append('<h3 class ="card-title text-truncate align-top pt-0 pb-0 mt-0 mb-0">' + conditions + "</h3><br>")
      weathBody.append("<h5 class='card-subtitle'>High: " + tempHigh + "º</h5>");
      weathBody.append("<h5 class='card-subtitle'>Low: " + tempLow + "º </h5>");
      weathDiv.append(weathBody);
      dayDiv.append(weathDiv);

      //adding our column>card>header+body to the div
      $("#forecastRow").append(dayDiv);
    }
});};

function getCurrentWeather(){
  $.ajax({
  url: currentQueryURL,
  method: "GET"
}).then(function(currentResponse) {
  // console.log(currentQueryURL);
  // console.log(currentResponse);

    //converting data into usable pieces
      var tempK = currentResponse.main.temp;
      var conditions = currentResponse.weather[0].main;
      var iconCode = currentResponse.weather[0].icon;
      var conditionDescription = currentResponse.weather.description;

      temp = Math.round((tempK * 1.8) - 459.67);

      iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      iconImg = '<img class="mb-0" src=' + iconURL + ' height="45" width="45" alt=' + conditionDescription + '>';  

      //creating responsive column for our current weather
      var dayDiv = $("<div>");
      dayDiv.addClass("text-justify");
      dayDiv.addClass("col-xs-12")
      dayDiv.addClass("col-sm-6");
      dayDiv.addClass("col-md-4");
      dayDiv.addClass("col-lg-4");
      dayDiv.addClass("col-xl-2");
      //creating a card for current weather
      var weathDiv = $("<div>");
      weathDiv.addClass("card ml-0 mr-0 mt-2 mb-2 h-95")
      weathDiv.attr("dayNum", i+1);
      //adding a header with title and icon
      weathDiv.append("<div class='card-header bg-secondary text-white'><div class='float-left'><h3 class='align-bottom pb-0 mb-0'> Now </h3></div><div class='float-right small mt-0 pt-0'>" + iconImg + "</div><div class='clearfix'></div></div>");
      //creating a card body to hold the conditions and temp
      var weathBody = $("<div class='card-body mb-4  mt-4'>");
      weathBody.append('<h3 class ="card-title text-truncate align-top pt-0 pb-200 mt-0 mb-0">' + conditions + "</h3><br>")
      weathBody.append("<h2 class='card-subtitle lh-2'>" + temp + "º</h2>");
      //combining the ingredients
      weathDiv.append(weathBody);
      dayDiv.append(weathDiv);
      //adding our column>card>header+body to the div, and prepending it so it shows up in front of our forecast
      $("#forecastRow").prepend(dayDiv);
});};
//calling our two functions, delaying the current forecast so that the columns are in place before it prepends
getForecast();
setTimeout(getCurrentWeather, 500);
})
