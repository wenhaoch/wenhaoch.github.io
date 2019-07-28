$(document).ready(function() {
    $("#education").click(loadEducation);
    $("#work").click(loadWork);
    $("#cip").click(loadCip);
    $("#others").click(loadOthers);
    $("#topH1").click(function() {
        location.reload();
    });

    function loadEducation() {
    	$( "#body" ).load( "education.html #educationBody" );
    }

    function loadWork() {
    	$( "#body" ).load( "work.html #workBody" );
    }

    function loadCip() {
    	$( "#body" ).load( "cip.html #cipBody" );
    }

    function loadOthers() {
    	$( "#body" ).load( "others.html #othersBody" );
    }
});
