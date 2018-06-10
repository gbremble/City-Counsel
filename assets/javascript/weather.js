// $("#searchButton").on("click", function(event) {
//   event.preventDefault();
//   $("#weatherDiv").remove();


// cityName = $("#inputCity").val().trim();
// stateName = $("#inputState").val().trim();
// countryName = "US"


// // var APIKey = "28e4dca7e5a6a9336edc60ea02073b04";
// var APIKey = "166a433c57516f51dfab1f7edaed8413";
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityName + "," + countryName + "&cnt=6&appid=" + APIKey;
// var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
// function getForecast(){
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       // console.log(queryURL);
//       // console.log(response);

//     var weatherDiv = $("<div>");
//     weatherDiv.addClass("card");
//     weatherDiv.addClass("mt-3");
//     weatherDiv.addClass("mb-3");
//     weatherDiv.attr("id", "weatherDiv");
    
//     $("#resultsDiv").append(weatherDiv);

//     $("#weatherDiv").html('    <div class="card-header bg-primary text-white">                <h3 class="card-title">Weather</h3>              </div>            <div class="card-body"> <div class="container"> <div class="row" id="forecastRow"><div class="col-sm-2 col-md-2 col-lg-2 col-xl-2" id="current">                          </div></div></div></div>');

//     for (i=1; i<6; i++) {
//       var timeU = response.list[i].dt
//       var tempLowK = response.list[i].temp.min
//       var tempHighK = response.list[i].temp.max
//       var conditions = response.list[i].weather[0].main;
//       var iconCode = response.list[i].weather[0].icon;
//       var conditionDescription = response.list[i].weather[0].description;
      

//       tempLow = Math.round((tempLowK * 1.8) - 459.67);
//       tempHigh = Math.round((tempHighK * 1.8) - 459.67);
//       time = moment.unix(timeU).format('dddd');
//       iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
//       iconImg = '<img class="mb-2" src=' + iconURL + ' alt=' + conditionDescription + '>';  

//       var dayDiv = $("<div>")
//       dayDiv.addClass("text-justify");
//       dayDiv.addClass("col-sm-2");
//       dayDiv.addClass("col-md-2");
//       dayDiv.addClass("col-lg-2");
//       dayDiv.addClass("col-xl-2");
//       dayDiv.attr("dayNum", i+1);
//       dayDiv.append(iconImg + "<br>")
//       dayDiv.append('<h4 class="pt-0 pb-0 mt-0 mb-0">' + time + '</h4><br>')
//       dayDiv.append('<h5 class ="pt-0 pb-0 mt-0 mb-0">' + conditions + "</h5><br>")
//       dayDiv.append("High: " + tempHigh + "º<br>");
//       dayDiv.append("Low: " + tempLow + "º");

//       $("#forecastRow").append(dayDiv);
//     }
// });};

// function getCurrentWeather(){
//   $.ajax({
//   url: currentQueryURL,
//   method: "GET"
// }).then(function(currentResponse) {
//   // console.log(currentQueryURL);
//   // console.log(currentResponse);

//   // var timeU = response.dt
//       var tempK = currentResponse.main.temp;
//       var conditions = currentResponse.weather[0].main;
//       var iconCode = currentResponse.weather[0].icon;
//       var conditionDescription = currentResponse.weather.description;

//       temp = Math.round((tempK * 1.8) - 459.67);

//       // time = moment.unix(timeU).format('dddd');
//       iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
//       iconImg = '<img class="mb-2" src=' + iconURL + ' alt=' + conditionDescription + '>';  

//       var dayDiv = $("<div>")
//       dayDiv.append(iconImg + "<br>")
//       dayDiv.append('<h4 class="pt-0 pb-0 mt-0 mb-0">Currently</h4><br>')
//       dayDiv.append('<h5 class ="pt-0 pb-0 mt-0 mb-0">' + conditions + "</h5><br>")
//       dayDiv.append('<h1 class="pt-0 pb-0 mt-0 mb-0">' + temp + "º</h1><br>");

//       $("#current").append(dayDiv);
// });};
// getForecast();
// setTimeout(getCurrentWeather, 500);
// })
