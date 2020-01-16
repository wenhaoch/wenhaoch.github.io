$(document).ready(function() {
    $("#inputs").click(loadInputs);
    $("#work").click(loadWork);
    $("#cip").click(loadCip);
    $("#others").click(loadOthers);
    $("#topH1").click(function() {
        location.reload();
    });

    function loadInputs() {
    	$( "#body" ).load( "inputs.html #educationBody" );
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
