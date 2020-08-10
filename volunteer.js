var userInfo = JSON.parse(localStorage.getItem("user")) || [];


var locationArr = [];

function initMap(lat, lng) {
    // console.log(lat)
    // console.log(lng)
    console.log("inside the initMap( ) function");

    if (lat === undefined && lng === undefined) {
        console.log(`lat: ${lat}  lng: ${lng}`);
        return;
    }

    var saguaro = {
        lat: lat,
        lng: lng
    };

    locationArr.push(saguaro);
    console.log(typeof lat)

    console.log("latitude, longitude : ", locationArr);

    var map = new google.maps.Map(

        document.getElementById("map"),
        {
            zoom: 16,
            center: saguaro
        }

    );

    var icon = {

        url: "https://i.pinimg.com/originals/40/d7/be/40d7bec2768bc8cfa69f6d8ed4f85c89.png",
        scaledSize: new google.maps.Size(width = 27, height = 27),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }

    for (var i = 0; i < locationArr.length; i++) {
        var marker = new google.maps.Marker({
            position: locationArr[i],
            map: map,
            icon: icon,
            animation: google.maps.Animation.BOUNCE,
        })
    }

}

function generateMap() {
    var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";


    var lastUser = userInfo[userInfo.length - 1];

    var addingAddresstogether = `${lastUser.address}, ${lastUser.city}, ${lastUser.state} ${lastUser.zip}`;
    console.log("addingAddresstogether", addingAddresstogether);

    var ourQueryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addingAddresstogether + "&key=" + personalAPIKey;
    $.ajax({

        url: ourQueryURL,
        method: "GET"

    }).then(function (response) {

        if (response.status === "OK") {
            var latitude = response.results[0].geometry.location.lat;
            var longitude = response.results[0].geometry.location.lng;

            console.log("Are we getting a response? : ", response);
            console.log("lat ",latitude);
            console.log("lng" ,longitude)
            initMap(latitude, longitude);

        } else {
            alert("ENTER CORRECT ADDRESS");
        }


    })
}



generateMap()