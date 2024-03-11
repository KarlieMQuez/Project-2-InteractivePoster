//resource link: https://www.w3schools.com/jquery/default.asp
$(document).ready (function(){

$("#healthy1").hide();
$("#healthy2").hide();
$("#healthy3").hide();

$("#sticky-note").hide();

$("#pop1").hide();
$("#pop2").hide();
$("#pop3").hide();

$("#chrome-open").hide();

$("#open-client").hide();

// if ($("#chrome-open").show() && $("#chrome").click())
// {
//     $("#chrome-open").hide();
// }

$("#chrome").click( function (){
    $("#chrome-open").show();
});

$("#chrome-close").click( function (){
    $("#pop1").show();
    $("#chrome-open").slideDown(1000);
});


// When Chrome is clicked Email open, email sound plays, email sounds repeat, pop1 appears, phone rings

// When Zoom is clicked, video appears, pop2 appears, pop3 appears

// when Zoom X is closed, Notifications of files repeats, phone rings more







})