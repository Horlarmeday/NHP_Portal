$(document).ready(function(){
    $("#state").chainedTo("#region");
    $("#house-type").chainedTo("#region,#state");
 });      