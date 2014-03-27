/* Hi Ina, das hier ist JavaScript. Und zwar verwendet es JQuery. */

/* Wenn der Button angelickt wird dann wird in einer Schleife
 *  der Text innerhalb des DIV angehängt. */
function clickhandler() { 
  $("atestdiv").css("animation-play-state","paused");
  $("#ergebnis").css("opacity","0");
  $("#ergebnisCounter").css("visibility","hidden");
  for(var i=0; i<100; i++) {
      $("#ergebnis").append("Hier kannste scrollen #"+i+"<br/>");
   }
   $("#ergebnis").fadeTo( 1000, 1.0, function() {
     /*
      var curAngle = parseInt($(this).getRotateAngle()) || 0;
        $(this).rotate({
                  angle: curAngle,
                  animateTo: curAngle - 30,
                  duration: 1000
              });
     */
   })
   $("#ergebnisCounter").text($("#ergebnis").children().length + " Elemente");
   $("#ergebnisCounter").css("visibility","visible");
/*   $("atestdiv").css("animation-play-state","running");*/
}

$(document).ready(function(){
  document.getElementById("clickMe").onclick = clickhandler; 
})
