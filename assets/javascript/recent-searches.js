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

$("#searchButton").click(function (event) {
    event.preventDefault();

    // interpret the values from the recent search, store them in local object, push to Firebase
    var searchCity = $("#inputCity").val().trim();
    var searchState = $("#inputState").val().trim();
    var searchCountry = $("#inputCountry").val().trim();

    var newSearch = {
        city: searchCity,
        state: searchState,
        country: searchCountry
    };

    database.ref().push(newSearch);
})