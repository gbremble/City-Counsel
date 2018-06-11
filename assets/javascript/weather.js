var cityName = "";
var cityNum = 0;
var currentCity = {};

$("#searchButton").on("click", function(event) {
  event.preventDefault();
  $("#weatherDiv").toggleClass("d-none", false);
  // initialize table
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
var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + currentCity.city + "," + currentCity.iso2 + "&cnt=6&appid=" + APIKey;
var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity.city + "," + currentCity.iso2 + "&appid=" + APIKey;
function getForecast(){
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // console.log(queryURL);
      console.log(response);

    // var weatherDiv = $("<div>");
    // weatherDiv.addClass("card");
    // weatherDiv.addClass("mt-3");
    // weatherDiv.addClass("mb-3");
    // weatherDiv.attr("id", "weatherDiv");
    
    // $("#resultsDiv").append(weatherDiv);

    // $("#weatherDiv").html('    <div class="card-header bg-primary text-white">                <h3 class="card-title">Weather</h3>              </div>            <div class="card-body"> <div class="container"> <div class="row" id="forecastRow"><div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="current">                          </div></div></div></div>');

    for (i=0; i<5; i++) {
      var timeU = response.list[i].dt
      var tempLowK = response.list[i].temp.min
      var tempHighK = response.list[i].temp.max
      var conditions = response.list[i].weather[0].main;
      var iconCode = response.list[i].weather[0].icon;
      var conditionDescription = response.list[i].weather[0].description;
      

      tempLow = Math.round((tempLowK * 1.8) - 459.67);
      tempHigh = Math.round((tempHighK * 1.8) - 459.67);
      time = moment.unix(timeU).format('ddd');
      iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
      iconImg = '<img class="mt-0 mb-0 weatherIcon" src=' + iconURL + ' height="45" width="45" alt="' + conditionDescription + '">';  

      var dayDiv = $("<div>");
      dayDiv.addClass("text-justify");
      dayDiv.addClass("col-xs-12")
      dayDiv.addClass("col-sm-6");
      dayDiv.addClass("col-md-4");
      dayDiv.addClass("col-lg-4");
      dayDiv.addClass("col-xl-2");
      var weathDiv = $("<div>");
      weathDiv.addClass("card ml-0 mr-0 mt-2 mb-2 h-95")
      weathDiv.attr("dayNum", i+1);
      weathDiv.append("<div class='card-header bg-secondary text-white'><div class='float-left'><h3 class='align-bottom pb-0 mb-0'>" + time + "</h3></div><div class='float-right small mt-0 pt-0'>" + iconImg + "</div><div class='clearfix'></div></div>");
      // weathDiv.append(iconImg + "<br>")
      // weathDiv.append('<h4 class="pt-0 pb-0 mt-0 mb-0">' + time + '</h4><br>')
      var weathBody = $("<div class='card-body mb-4 mt-4'>");
      weathBody.append('<h3 class ="card-title text-truncate align-top pt-0 pb-0 mt-0 mb-0">' + conditions + "</h3><br>")
      weathBody.append("<h5 class='card-subtitle'>High: " + tempHigh + "º</h5>");
      weathBody.append("<h5 class='card-subtitle'>Low: " + tempLow + "º </h5>");
      weathDiv.append(weathBody);
      dayDiv.append(weathDiv);
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

  // var timeU = response.dt
      var tempK = currentResponse.main.temp;
      var conditions = currentResponse.weather[0].main;
      var iconCode = currentResponse.weather[0].icon;
      var conditionDescription = currentResponse.weather.description;

      temp = Math.round((tempK * 1.8) - 459.67);

      // time = moment.unix(timeU).format('dddd');
      iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      iconImg = '<img class="mb-0" src=' + iconURL + ' height="45" width="45" alt=' + conditionDescription + '>';  

      var dayDiv = $("<div>");
      dayDiv.addClass("text-justify");
      dayDiv.addClass("col-xs-12")
      dayDiv.addClass("col-sm-6");
      dayDiv.addClass("col-md-4");
      dayDiv.addClass("col-lg-4");
      dayDiv.addClass("col-xl-2");
      var weathDiv = $("<div>");
      weathDiv.addClass("card ml-0 mr-0 mt-2 mb-2 h-95")
      weathDiv.attr("dayNum", i+1);
      weathDiv.append("<div class='card-header bg-secondary text-white'><div class='float-left'><h3 class='align-bottom pb-0 mb-0'> Now </h3></div><div class='float-right small mt-0 pt-0'>" + iconImg + "</div><div class='clearfix'></div></div>");
      var weathBody = $("<div class='card-body mb-4  mt-4'>");
      weathBody.append('<h3 class ="card-title text-truncate align-top pt-0 pb-200 mt-0 mb-0">' + conditions + "</h3><br>")
      weathBody.append("<h2 class='card-subtitle lh-2'>" + temp + "º</h2>");
      weathDiv.append(weathBody);
      dayDiv.append(weathDiv);

      $("#forecastRow").prepend(dayDiv);
});};
getForecast();
setTimeout(getCurrentWeather, 500);
})
