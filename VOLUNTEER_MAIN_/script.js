
$(document).ready(() =>  {

    var personalAPIKey = "AIzaSyA0rdSnRWTkL1PyhoHgsMoYfs8GhAJbJnw";
    var address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA";

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + personalAPIKey;


    $("#submitButton").on("click", function(){

        var name = $("#inputName").val();
        var phoneNumber = $("#inputPhoneNumber").val();
        var firstAddress = $("#inputAddress").val();
        var secondAddress = $("#inputAddress2").val();
        var cityofAddress = $("#inputCity").val();
        var stateofAddress = $("#inputState").val();
        var zipCodeofAddress = $("#inputZip").val();

        var user = {

            name : name,
            phoneNumber : phoneNumber,
            address1: firstAddress,
            address2: secondAddress,
            city: cityofAddress,
            state: stateofAddress,
            zip: zipCodeofAddress
                
        }

        console.log("user: ", user);

        var arrayWithUserInfo = [];

        var userInfo = JSON.parse(localStorage.getItem("user"));

        arrayWithUserInfo = [userInfo];
        arrayWithUserInfo.push(user);

        localStorage.setItem("user", JSON.stringify(arrayWithUserInfo));

        console.log("local storage: ", JSON.stringify(arrayWithUserInfo));
        console.log("var userInfo ", userInfo);


            

        var addingAddresstogether = secondAddress === "" ? `${firstAddress} ${cityofAddress} ${stateofAddress} ${zipCodeofAddress}` : `${firstAddress} ${secondAddress} ${cityofAddress} ${stateofAddress} ${zipCodeofAddress}`;
        console.log("full address: ", addingAddresstogether);


        $("#theAddress").append(addingAddresstogether);

            
        var ourQueryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addingAddresstogether + "&key=" + personalAPIKey;

        $.ajax({

            url: ourQueryURL,
            method: "GET"

        }).then(function(response){

                if (response.status === "OK"){
                var latitude = response.results[0].geometry.location.lat;
                var longitude = response.results[0].geometry.location.lng;

                console.log(response);
        
                initMap(latitude, longitude);

                document.getElementById ('map').innerHTML = latitude;

                } else {
                    alert("ENTER CORRECT ADDRESS");
                }
            
        
            })

    })






    // set conditionals so that the initMap runs based on if there are objects in the array.
    var locationArr = [];

    function initMap(lat, long){

        var  saguaro = {lat: lat, lng: long};
        
        locationArr.push(saguaro);

        console.log(locationArr);

        var map = new google.maps.Map(

        document.getElementById("map"),
       
        {zoom: 16, center: saguaro}

        );

        var icon = {
        
            url: "https://i.pinimg.com/originals/40/d7/be/40d7bec2768bc8cfa69f6d8ed4f85c89.png", 
            scaledSize: new google.maps.Size(width= 27, height=27), 
            origin: new google.maps.Point(0,0), 
            anchor: new google.maps.Point(0, 0) }

            for (var i = 0; i < locationArr.length; i++){
                var marker = new google.maps.Marker({
                    position: locationArr[i],
                    map:map,
                    icon:icon,
                    animation: google.maps.Animation.BOUNCE,
                })
            }

    }

})