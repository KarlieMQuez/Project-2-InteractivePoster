//resource link: https://www.w3schools.com/jquery/default.asp
$(document).ready (function(){

var ding = document.getElementById("email-ding");
var chat = document.getElementById("chat-ring");
var buzz = document.getElementById("phone-buzz");
var final = document.getElementById("peace")

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

$("#popup").hide();
$("#rest").hide();

$("#note2").mouseenter(function(){
    buzz.play();
})


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
    ding.play();
});

$("#client").click( function (){
    $("#open-client").show();
});

$("#close-client").click( function(){
    $("#open-client").hide();
    $("#pop2").show();

});

$("#teams").click(function(){
    $("#teams-open").show();
});

$("#teams-close").click(function(){
    $("#teams-open").hide();
    chat.play();
    $("#popup").fadeIn(1000).delay(3000).fadeOut(1000)
    $("#pop3").show();
});

$("#excel").click(function(){
    $("#rest").show();
    $("#rest").addClass("breather");
    setTimeout(function (){
        $("#rest").removeClass("breather");
    }, 2000);
    buzz.pause();
    ding.pause();
    chat.pause();

});

$("#close-final").click(function(){
    $("#rest").hide();
    $("#healthy1").show();
    $("#healthy2").show();
    $("#healthy3").show();
    $("#sticky-note").show();
    
    final.play();
})

});