$(document).ready(function() {
  var selectedCity = "" ;
  var cityNum = 0;
  var currentCity = {};
  // function to get the cities in cityNameArray to display in the city select field
  function cityOptions() {
    for (var i = 0; i < cityNameArray.length; i++){
    var city = $("<option>").append(cityNameArray[i]);
    $("#inputCity").append(city);
    }
  }
  // calling the function
  cityOptions();
  // bs-select method to make changes appear
  $(".selectpicker").selectpicker("refresh");

  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    // get the selected city from the city select input field
    selectedCity = $("#inputCity").val();
    function getCity() {
      console.log(selectedCity);
      cityNum = cityNameArray.indexOf(selectedCity);
      console.log(cityNum);
      currentCity = cityArray[cityNum];
      console.log(currentCity);
    }
    getCity();
    
  });
});