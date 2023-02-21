
$( document ).ready(function() {
    //console.log( "ready!" );
    //$("#testing").text('test');
    var x = $(window).width();
    //$("#testing").text(x + "px");

    $( window ).resize(function() {
        //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
        var x = $(window).width();
        //$("#testing").text(x + "px");
      });
});
