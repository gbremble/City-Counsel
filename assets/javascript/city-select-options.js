$(document).ready(function () {
    // function to get the cities in cityNameArray to display in the city select field
    function cityOptions() {
        for (var i = 0; i < cityNameArray.length; i++) {
            var city = $("<option>").append(cityNameArray[i]);
            $("#inputCity").append(city);
        }
    }
    // calling the function
    cityOptions();
    // bs-select method to make changes appear
    $(".selectpicker").selectpicker("refresh");

    // disables the search button on page load
    $("#searchButton").prop("disabled", true);

    // removes the disabled attribute from the search button when an item is selected
    $('#inputCity').change(function () {
        var validated = true;
        if ($('#inputCity').val().length === 0)
            validated = false;
        if (validated)
            $("#searchButton").removeAttr("disabled");
    });
});