$(document).ready(function() {
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
});