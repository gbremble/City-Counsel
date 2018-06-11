var cityName = "";
var cityNum = 0;
var currentCity = {};
var cityLat = 0;
var cityLon = 0;
var startDate = "";
// $.support.cors = true;

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  $("#eventsCard").toggleClass("d-none", false);
  // initialize table
  $("#eventsTable").empty();

  // Get the inputs from the city select
  cityName = $("#inputCity").val();

  // function that will return the selected city object from the cityArray
  function getCity() {
    cityNum = cityNameArray.indexOf(cityName);
    currentCity = cityArray[cityNum];
  }

  // calling the getCity function
  getCity();

  cityLat = currentCity.lat;
  cityLon = currentCity.lon;
  startDate = (moment().format('YYYY-MM-DD')) + "T00:00:00Z"
  
console.log(cityLat);
console.log(cityLon);

var apiKey = "L33YkC9wH8KXB7RNBA4rbkakkaT9iKFP";
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + apiKey + "&latlong=" + cityLat + "," + cityLon + "&radius=30&sort=date,asc&size=6&startDateTime=" + startDate;
function getEvents(){
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      var events = response._embedded.events;
      console.log(moment(events[0].dates.start.localDate).format('dddd MMM DD'));
      console.log(moment(events[0].dates.start.localTime, 'HH:mm:ss').format('h:mma'))

      // looping over response to create rows to display response in the event table
      for( var j = 0; j < events.length; j++) {
        // create and store table rows
        var eventRow = $("<tr>");
        var localDate = moment(events[j].dates.start.localDate).format('dddd MMM DD');
        var localTime = moment(events[j].dates.start.localTime, 'HH:mm:ss').format('h:mma');
        if (localTime === "Invalid Date") {
          localTime = "All-Day"
        }
        // create cell and store event name in it
        var eventDate = $("<td>").append(localDate + " " + localTime);

        
        // create cell and store event name in it
        var eventName = $("<td>").append(events[j].name); 
        
        // create cell and store event address in it
        var eventVenue = $("<td>").append(events[j]._embedded.venues[0].name);

        // create cell and store venue address in it
        var eventAddress = $("<td>").append(events[j]._embedded.venues[0].address.line1 + " , " + events[j]._embedded.venues[0].city.name);

        // create cell and store ticket pricing in it
        var eventPrice = $("<td>").append("$");
          
          // "$" + events[j].priceRanges[0].min + "-" + events[j].priceRanges[0].max);
       
        // add all the data to the table row
        eventRow.append(eventDate)
        eventRow.append(eventName);
        eventRow.append(eventVenue)
        eventRow.append(eventAddress);
        eventRow.append(eventPrice);

        // add the row to the table
        $("#eventsTable").append(eventRow);
      }
  

    });
  }

getEvents();
})