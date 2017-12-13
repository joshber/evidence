$(".expand").nextUntil(".expand").velocity( { opacity: 1 }, { display: "none" } );
$(document).ready( function(){
  $(".expand").css( "cursor", "pointer" );
  $(".expand").click( function() {
    var probe = $(this).next();
    // No slideToggle() in Velocity: https://github.com/julianshapiro/velocity/issues/276
    if ( probe.css( "display" ) === "none" ) {
      $(this).nextUntil(".expand").velocity( "slideDown", { duration: 500 } );
      $(this).velocity( "scroll", { duration: 750, offset: -50, easing: "ease-in-out" } );
    }
    else {
      $(this).nextUntil(".expand").velocity( "slideUp", { duration: 500 } );
    }
  });
});
