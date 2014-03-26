/* Hi Ina, das hier ist JavaScript. Und zwar verwendet es JQuery. */

/* Wenn der Button angelickt wird dann wird in einer Schleife
 *  der Text innerhalb des DIV angehängt. */
function clickhandler() { 
  for(var i=0; i<100; i++) {
      $("#ergebnis").append("Hier kannste scrollen #"+i+"<br/>");
   }
   $("#ergebnis").css("visibility", "visible");
}

$(document).ready(function(){
  document.getElementById("clickMe").onclick = clickhandler; 
})
