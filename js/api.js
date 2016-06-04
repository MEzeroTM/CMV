
//Enable module with the API key
var censusAPIKey = "c83e06ec87c35c0d3ffb0f6d7640afbf52b7071c";
var sdk = new CitySdk(); //Create the CitySDK Instance
var census = new CensusModule(censusAPIKey); //Create an instance of the module
//sdk.modules.census = census;


//creating the request variable. Please note that I have left in income as the default variable.
//var request = {
//    "level": "county",
//    "zip": "",
//    "variables": [
//        
//    ],
//    "api": "acs5",
//    "year": "",
//    "tract": ""
//};

var request = {
    "level": "county",
    "zip": "30013",
    "variables": [
      "age"
    ],
    "api": "acs1",
    "year": "2012",
    "county": "Rockdale County",
    "state": "GA"
  };

apiCallBack = function (response) {
    console.log(response);
    //Outputs the raw JSON text-full data
    jQuery("#data").text(JSON.stringify(response, null, 4));

    //Below outputs only income or whatever is requested. 
   //jQuery("#data").text(JSON.stringify(+response.data[0].poverty, null, 4));

    //console.log(JSON.parse(response));
   // alert("hello");
};


console.log(sdk);
console.log(census);
console.log(request);
     


    
//Function which will gather data from user and then submit it to the API. The API will then return 
//the data that was requested. 
function data(){
    var zip = document.getElementById("zip").value;
    var year = document.getElementById("year").value;
    var variable = document.getElementById("variables").value;
    //var tract = document.getElementById("tract").value;
    //request.zip = zip;
    //request.year = year;
    //request.variables.push(variable);
console.log(citysdk);
  console.log(census);


    //The request to gather the actual data.
    census.apiRequest(request, apiCallBack);   
    
    
}

/////////////  Sliding effect 

$("#menu").click(function() {
  $("#toggle").slideToggle(550);
});

////////// Google Maps ////////////////

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.1207, lng: -84.0044},
    zoom: 10,
    scrollwheel: false
    });
}


/*   SPACER    */


/* Set the width of the side navigation to 250px */
function openNav1() {
    closeNav();
    document.getElementById("mySidenav1").style.width = "300px";
    document.getElementById("mySidenav1").style.border = "1px solid black";

}

function openNav2() {
    closeNav();
    document.getElementById("mySidenav2").style.width = "300px";
    document.getElementById("mySidenav2").style.border = "1px solid black";
}

function openNav3() {
    closeNav();
    document.getElementById("mySidenav3").style.width = "300px";
    document.getElementById("mySidenav3").style.border = "1px solid black";
}

/* Set the width of the side navigation to 0
@param nav_num the number of the nav bar that is being closed (starts at mySidenav1) */
function closeNav() {
    document.getElementById("mySidenav1").style.width = "0";
    document.getElementById("mySidenav1").style.border = "0px solid white";
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav2").style.border = "0px solid white";
    document.getElementById("mySidenav3").style.width = "0";
    document.getElementById("mySidenav3").style.border = "0px solid white";
}