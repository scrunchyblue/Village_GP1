

$(document).ready(() => {
    


    var userInfo = JSON.parse(localStorage.getItem("user")) || [];
    console.log("Each user and their information: ", userInfo);


    $("#submitButton").on("click", function(event){
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



        userInfo.push(user);

        localStorage.setItem("user", JSON.stringify(userInfo));


        var addingAddresstogether = `${address} ${cityofAddress} ${stateofAddress} ${zipCodeofAddress}`;



        window.location.replace("../VOLUNTEER_MAIN_/volunteer.html");

    
    })


})