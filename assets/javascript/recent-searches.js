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
// var cityNum;
// var currentCity = "";

$("#searchButton").click(function (event) {
    event.preventDefault();

    $("#recentSearchCards").toggleClass("d-none", true);

    // interpret the values from the recent search, store them in local object, push to Firebase
    var searchCity = $("#inputCity").val().trim();
    var searchState = $("#inputState").val().trim();
    var searchCountry = $("#inputCountry").val().trim();

    // store the search in a temporary variable
    var newSearch = {
        city: searchCity,
        state: searchState,
        country: searchCountry,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().set(newSearch);

    // ### BOOTSTRAP SELECT ###
    // getCity();

    // database.ref().set(currentCity);
});

database.ref().on("value", function (snapshot) {

    // update the card text
    $("#recentSearch-0").text(snapshot.val().city + ", " + snapshot.val().state);

    // handle any errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// ### BOOTSTRAP SELECT ###
// function getCity() {
//     cityNum = cityNameArray.indexOf(cityName);
//     currentCity = cityArray[cityNum];
// }