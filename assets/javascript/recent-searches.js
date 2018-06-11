// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrbIl9_P0sxXaAkt2jjLoxx7w89Rf2iFU",
    authDomain: "group3-project1.firebaseapp.com",
    databaseURL: "https://group3-project1.firebaseio.com",
    projectId: "group3-project1",
    storageBucket: "group3-project1.appspot.com",
    messagingSenderId: "435408615728"
};
firebase.initializeApp(config);

var database = firebase.database();

// ### BOOTSTRAP SELECT ###
var cityName = "";
var cityNum = 0;
var currentCity = {};

$("#searchButton").click(function (event) {
    event.preventDefault();

    $("#recentSearchCards").toggleClass("d-none", true);

    // Get the input from the city select
    cityName = $("#inputCity").val();

    // function that will return the selected city object from the cityArray
    function getCity() {
      cityNum = cityNameArray.indexOf(cityName);
      currentCity = cityArray[cityNum];
    }

    // calling the getCity function
    getCity();
    
    // interpret the values from the recent search, store them in local object, push to Firebase
    var searchCity = currentCity.city;
    var searchLat = currentCity.lat;
    var searchLon = currentCity.lon;
    var searchPop = currentCity.pop;
    var searchCountry = currentCity.country;
    // two letter country code i.e. US
    var searchIso2 = currentCity.iso2;
    // two letter country code i.e. USA
    var searchIso3 = currentCity.iso3;
    var searchStateLong = currentCity.stateLong;
    var searchStateShort = currentCity.stateShort;

    // store the search in a temporary variable
    var newSearch = {
        city: searchCity,
        latitude: searchLat,
        longitude: searchLon,
        population: searchPop,
        country: searchCountry,
        iso2: searchIso2,
        iso3: searchIso3,
        stateLong: searchStateLong,
        stateShort: searchStateShort,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().set(newSearch);

});

database.ref().on("value", function (snapshot) {

    // update the card text
    $("#recentSearch-0").text(snapshot.val().city + ", " + snapshot.val().stateShort);

    // handle any errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
