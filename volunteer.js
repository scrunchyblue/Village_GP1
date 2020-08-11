$('#sidebarCollapse').on('click', function () {
    console.log("I have been clicked");
    $('#sidebar').toggleClass('active');
});





var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";

var userInfo = JSON.parse(localStorage.getItem("user")) || [];
console.log("user Info, local storage: " ,userInfo);
getMarkerCoords(userInfo)



function initMap(coords) {
    console.log("coords: ", coords);

    var map = new google.maps.Map(

        document.getElementById("map"),
        {
            zoom: 11,
            center: coords[coords.length -1]
        }

    );

    var icon = {

        url: "https://i.pinimg.com/originals/40/d7/be/40d7bec2768bc8cfa69f6d8ed4f85c89.png",
        scaledSize: new google.maps.Size(width = 27, height = 27),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    }

    for (var i = 0; i < coords.length; i++) {
        var marker = new google.maps.Marker({
            position: coords[i],
            map: map,
            icon: icon,
            animation: google.maps.Animation.BOUNCE,
        })
    }

}

// function generateMap() {
    

//     var lastUser = userInfo[userInfo.length - 1];

//     var addingAddresstogether = `${lastUser.address}, ${lastUser.city}, ${lastUser.state} ${lastUser.zip}`;
//     console.log("adding Address together: ", addingAddresstogether);

//     var ourQueryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addingAddresstogether + "&key=" + personalAPIKey;
//     $.ajax({

//         url: ourQueryURL,
//         method: "GET"

//     }).then(function (response) {

//         if (response.status === "OK") {
//             var latitude = response.results[0].geometry.location.lat;
//             var longitude = response.results[0].geometry.location.lng;

//             console.log("Are we getting a response? : ", response);

//             initMap(latitude, longitude);

//         } else {
//             alert("ENTER CORRECT ADDRESS");
//         }


//     })
// }

async function getMarkerCoords(array){
    var coords = [];
    for(var i = 0; i< array.length;i++){
        var address = `${array[i].address}, ${array[i].city}, ${array[i].state} ${array[i].zip}`
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + personalAPIKey
        var {results} = await $.get(queryURL)
        console.log(results[0]);
        if(results[0]){
            coords.push({lat:results[0].geometry.location.lat, lng:results[0].geometry.location.lng})
        }
        
    } 
    console.log(coords)
    initMap(coords)   
}