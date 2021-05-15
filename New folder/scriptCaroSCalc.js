const historialCalcu = document.querySelector("#historial-pantalla");

//a la variable local pantalla le asociamos el selectorquery pantalla
let pantalla = document.querySelector("#resultado-pantalla");

//creamos la funcion getData(red) para obtener por parametro el valor
//definimos como variable local al valor que sera enviado x parametro como el valor ref
//definimos la variable valor, la concatenamos y se accede por pantalla
function getData(ref) {
  let value = ref.value;
  pantalla.value += value;
  {
    historialCalcu.value = pantalla.value + "=" + eval(pantalla.value);
  }
}
//igualamos el valor de limpiar a 0
function limpiar() {
  pantalla.value = "";
}

function resultado() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "ERROR";
    setTimeout(() => {
      limpiar();
    }, 500);
  }
}
var instance = M.Modal.getInstance(ingrese);
var instance = M.Modal.getInstance(registrese);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(ingrese);
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(registrese);
});
