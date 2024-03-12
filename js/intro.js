//resource link: https://www.w3schools.com/jquery/default.asp
$(document).ready (function(){

var ding = document.getElementById("email-ding");
var chat = document.getElementById("chat-ring");

$("#healthy1").hide();
$("#healthy2").hide();
$("#healthy3").hide();

$("#sticky-note").hide();

$("#pop1").hide();
$("#pop2").hide();
$("#pop3").hide();

$("#chrome-open").hide();
$("#boss-email").hide();

$("#open-client").hide();

$("#teams-open").hide();


$("#chrome").click( function (){
    $("#chrome-open").show();

});

$("#open-me").click (function (){
    $("#boss-email").show();
})

$("#exit-email").click( function(){
    $("#chrome-open").hide();
    $("#boss-email").hide();
    $("#pop1").show();
});

$("#client").click( function (){
    $("#open-client").show();
});

$("#close-client").click( function(){
    $("#open-client").hide();
    $("#pop2").show();
    chat.play();

});

$("#teams").click(function(){
    $("#teams-open").show();
});

$("#teams-close").click(function(){
    $("#teams-open").hide();
    ding.play();
});





// when Zoom X is closed, Notifications of files repeats, phone rings more







})