$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
          window.location.hash = hash;
        });
      }
    });
  });

const planilla = document.getElementById("planilla")
const enviar = document.getElementById("enviar")
const foto = document.getElementById("foto")
const nav = document.querySelector("nav")
const conocenos = document.getElementById("conocenos")
const caja = document.getElementById("caja")

function mostrar() {
  planilla.style.visibility = "visible";
  foto.style.filter = "brightness(0.5)";
  conocenos.style.display = "none"
  caja.style.display = "none"
  nav.style["background-color"] = "rgba(0, 0, 0, 0.274)";
}
function ocultar() {
  planilla.style.visibility = "hidden"
  foto.style.filter = "brightness(1)";
  conocenos.style.display = "block"
  caja.style.display = "flex"
  nav.style["background-color"] = "white";

}