$(document).ready(function() {
    $("#inputs").click(loadInputs);
    $("#training").click(loadTraining);
    $("#predictions").click(loadPredictions);
    $("#topH1").click(function() {
        location.reload();
    });

    function loadInputs() {
    	$( "#body" ).load( "inputs.html #inputsBody" );
    }

    function loadTraining() {
    	$( "#body" ).load( "training.html #workBody" );
    }

    function loadPredictions() {
    	$( "#body" ).load( "predictions.html #cipBody" );
    }

});
