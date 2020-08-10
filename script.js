

$(document).ready(() => {
    


    var userInfo = JSON.parse(localStorage.getItem("user")) || [];
    console.log("var userInfo ", userInfo);


    $("#submitButton").on("click", function(event){
        console.log("submit Button pressed");
        event.preventDefault();
        

        var name = $("#inputName").val();
        var address = $("#inputAddress").val();
        var cityofAddress = $("#inputCity").val();
        var stateofAddress = $("#inputState").val();
        var zipCodeofAddress = $("#inputZip").val();

        var user = {

            name : name,
            address: address,
            city: cityofAddress,
            state: stateofAddress,
            zip: zipCodeofAddress
                
        }

        console.log("user: ", user);



        // userInfo = [userInfo];
        userInfo.push(user);

        localStorage.setItem("user", JSON.stringify(userInfo));

        console.log("local storage: ", JSON.stringify(userInfo));


        var addingAddresstogether = `${address} ${cityofAddress} ${stateofAddress} ${zipCodeofAddress}`;
        console.log("full address: ", addingAddresstogether);


        //$("#theAddress").append(addingAddresstogether);
        window.location.replace("../VOLUNTEER_MAIN_/volunteer.html");
    
    })



    // set conditionals so that the initMap runs based on if there are objects in the array.
    // var locationArr = [];

    // function initMap(lat, long){
    //     console.log("inside the initMap( ) function");

    //     var  saguaro = {lat: lat, lng: long};
        
    //     locationArr.push(saguaro);

    //     console.log(locationArr);

    //     var map = new google.maps.Map(

    //     document.getElementById("map"),
    //     {zoom: 16, center: saguaro}

    //     );

    //     var icon = {
        
    //         url: "https://i.pinimg.com/originals/40/d7/be/40d7bec2768bc8cfa69f6d8ed4f85c89.png", 
    //         scaledSize: new google.maps.Size(width= 27, height=27), 
    //         origin: new google.maps.Point(0,0), 
    //         anchor: new google.maps.Point(0, 0) }

    //         for (var i = 0; i < locationArr.length; i++){
    //             var marker = new google.maps.Marker({
    //                 position: locationArr[i],
    //                 map:map,
    //                 icon:icon,
    //                 animation: google.maps.Animation.BOUNCE,
    //             })
    //         }

//     }
// }
/*          VOLUNTEER.HTML                  */

    $('#sidebarCollapse').on('click', function () {
        console.log("I have been clicked");
        $('#sidebar').toggleClass('active');
    });

})