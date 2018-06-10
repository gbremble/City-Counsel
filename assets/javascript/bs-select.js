$(document).ready(function() {
  function cityOptions() {
    for (var i = 0; i < cityNameArray.length; i++){
    var city = $("<option>").append(cityNameArray[i]);
    $("#inputCity").append(city);
    }
  }
  cityOptions();
  $(".selectpicker").selectpicker("refresh");
});