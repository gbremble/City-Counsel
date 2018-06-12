// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrbIl9_P0sxXaAkt2jjLoxx7w89Rf2iFU",
    authDomain: "group3-project1.firebaseapp.com",
    databaseURL: "https://group3-project1.firebaseio.com",
    projectId: "group3-project1",
    storageBucket: "group3-project1.appspot.com",
    messagingSenderId: "435408615728"
};

// // test database for testing this
// var config = {
//     apiKey: "AIzaSyAr3LcvjfLpiIBkq3g1-L_Rrn3ui1DC13U",
//     authDomain: "hello-world-7574c.firebaseapp.com",
//     databaseURL: "https://hello-world-7574c.firebaseio.com",
//     projectId: "hello-world-7574c",
//     storageBucket: "hello-world-7574c.appspot.com",
//     messagingSenderId: "847466044587"
//   };

firebase.initializeApp(config);

var database = firebase.database();

var timestamp = firebase.database.ServerValue.TIMESTAMP;

// ### BOOTSTRAP SELECT ###
var cityName = "";
var cityNum = 0;
var currentCity = {};

$('#searchButton').click(function (event) {
    event.preventDefault();

    // this will hide the cards after a search is performed
    // $('#recent-search-cards-container').toggleClass('d-none', true);

    // Get the input from the city select
    cityName = $('#inputCity').val();

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

    // write the search to the database
    database.ref().child('searches').push({
        city: searchCity,
        latitude: searchLat,
        longitude: searchLon,
        population: searchPop,
        country: searchCountry,
        iso2: searchIso2,
        iso3: searchIso3,
        stateLong: searchStateLong,
        stateShort: searchStateShort,
        time: firebase.database.ServerValue.TIMESTAMP
    }, function (error) {
        if (error) {
            console.log("The write failed. Code: " + error.code);
        } else {
            console.log("Data saved successfully!")
        }
    });

});

var ref = firebase.database().ref('searches');

ref.orderByChild("time").limitToLast(6).on("child_added", function (snapshot) {
    console.log(snapshot.key);

    // messy variables to store the card formatting and card text
    var cardStart = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2"><div class="card"><div class="card-body"><h5 class="card-title">';
    var cardEnd = '</h5><h6 class="card-subtitle mb-2 text-muted">Recently Searched</h6></div><!-- <div class="card-footer" style="background: none;"><button type="button" class="btn btn-primary btn-sm btn-block">Search Here</button></div> --></div>';
    var cardText = snapshot.val().city + ", " + snapshot.val().stateShort;

    $('#recent-search-cards').prepend(cardStart + cardText + cardEnd);

    console.log(JSON.stringify(snapshot.val(), null, 4));

    // handle any errors
}, function (error) {
    if (error) {
        console.log("The write failed. Code: " + error.code);
    } else {
        console.log("Data saved successfully!")
    }
});


// ### Playground ###
// var messageListRef = firebase.database().ref('message_list');
// var newMessageRef = messageListRef.push();
// newMessageRef.set({
//   'user_id': 'ada',
//   'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
// });
// // We've appended a new message to the message_list location.
// var path = newMessageRef.toString();
// // path will be something like
// // 'https://sample-app.firebaseio.com/message_list/-IKo28nwJLH0Nc5XeFmj'

// var ref = firebase.database().ref("dinosaurs");
// ref.orderByChild("time").limitToLast(3).on("child_added", function(snapshot) {
//   // This callback will be triggered exactly two times, unless there are
//   // fewer than two dinosaurs stored in the Database. It will also get fired
//   // for every new, heavier dinosaur that gets added to the data set.
//   console.log(snapshot.key);
// });

// // Basic usage of .once() to read the data located at ref.
// ref.once('value')
//   .then(function(dataSnapshot) {
//     // handle read data.
//   });

//   // Write some data with a timestamp
// ref.push({
//     foo: 'bar',
//     date: Firebase.ServerValue.TIMESTAMP
// });

// // Later, retrieve the data by ordered date
// ref.orderByChild('date').on('child_added', function(snapshot) {
//     //Do something with ordered children
// });

/*

<div class="card">
    <div class="card-body">
        <h5 class="card-title" id="recentSearch-0">Raleigh, NC</h5>
        <h6 class="card-subtitle mb-2 text-muted">Recently Searched</h6>
    </div>
    <!-- <div class="card-footer" style="background: none;">
        <button type="button" class="btn btn-primary btn-sm btn-block">Search Here</button>
    </div> -->
</div>
<div class="card">
    <div class="card-body">
        <h5 class="card-title" id="recentSearch-1">Asheville, NC</h5>
        <h6 class="card-subtitle mb-2 text-muted">Recently Searched</h6>
    </div>
    <!-- <div class="card-footer" style="background: none;">
        <button type="button" class="btn btn-primary btn-sm btn-block">Search Here</button>
    </div> -->
</div>
<div class="card">
    <div class="card-body">
        <h5 class="card-title" id="recentSearch-2">Longercityname, NC</h5>
        <h6 class="card-subtitle mb-2 text-muted">Recently Searched</h6>
    </div>
    <!-- <div class="card-footer" style="background: none;">
        <button type="button" class="btn btn-primary btn-sm btn-block">Search Here</button>
    </div> -->
</div>

*/