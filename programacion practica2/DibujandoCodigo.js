var cuadros = document.getElementById('canvas');
lienzos = cuadros.getContext("2d");

var frase = document.getElementById('frase');

var colorindicado = document.getElementById('indicacolor');
var botoncolores = document.getElementById('botoncolor');
botoncolores.addEventListener("click", cambiarColor);

var colores = "red";

var texto = document.getElementById('texto');

var botonres = document.getElementById('botonResolucion');
botonres.addEventListener("click", cambiarResolucionGrande);
var cambiable = true;

 var botonlineas = document.getElementById('boton_cantidad');
 botonlineas.addEventListener("click", ejecuccionDeFormula);

 var botonaleatorio = document.getElementById('lineasaleatorias');
 botonaleatorio.addEventListener("click", ejecuccionAleatorio);

function Cuadro()
{
  funcionDeLinea("black", 1, 1, 1, 299, lienzos);
  funcionDeLinea("black", 1, 299, 299, 299, lienzos);
  funcionDeLinea("black", 299, 299, 299, 1, lienzos);
  funcionDeLinea("black", 299, 1, 1, 1, lienzos);
}

function Cuadro2()
{
  funcionDeLinea("black", 1, 1, 1, 799, lienzos);
  funcionDeLinea("black", 1, 799, 799, 799, lienzos);
  funcionDeLinea("black", 799, 799, 799, 1, lienzos);
  funcionDeLinea("black", 799, 1, 1, 1, lienzos);
}


function cambiarResolucionGrande()
{
  switch (cambiable)
  {
    case true:
     document.getElementById('canvas').width = 800;
      document.getElementById('canvas').height = 800;
      document.body.style.backgroundImage = "url(lienzo.png)";
      document.body.style.backgroundPosition = "100% 100%";
      Cuadro2();
      cambiable = false;
    break;
    case false:
     document.getElementById('canvas').width = 300;
      document.getElementById('canvas').height = 300;
      document.body.style.backgroundImage = "url(lienzo2.png)";
      document.body.style.backgroundPosition = "-30% 50%";
      document.body.style.backgroundRepeat = "no-repeat";
      Cuadro();
       cambiable = true;
       break;
   }
}
 function ejecuccionDeFormula()
 {
   if (cambiable == true)
   {
     var yi, xf;
     var cantidadlineas = parseInt(texto.value);
     var espacio = cuadros.width / cantidadlineas;
  for (var lineas = 0; lineas < cantidadlineas; lineas++)
   {
    yi = espacio * lineas;
    xf = espacio * (lineas + 1);
     funcionDeLinea(colores, 0, yi, xf, 300, lienzos);
   }
   }
   if (cambiable == false)
   {
     var yi, xf;
     var cantidadlineas = parseInt(texto.value);
     var espacio = cuadros.width / cantidadlineas;
  for (var lineas = 0; lineas < cantidadlineas; lineas++)
   {
    yi = espacio * lineas;
    xf = espacio * (lineas + 1);
     funcionDeLinea(colores, 0, yi, xf, 800, lienzos);
   }
   }
}

function ejecuccionAleatorio()
{
  if (cambiable == true)
  {
    var yi, xf;
    var cantidadlineas = numAleatorio(1, 100);
    var espacio = cuadros.width / cantidadlineas;
 for (var lineas = 0; lineas < cantidadlineas; lineas++)
  {
   yi = espacio * lineas;
   xf = espacio * (lineas + 1);
    funcionDeLinea(colores, 0, yi, xf, 300, lienzos);
  }
  }
  if (cambiable == false)
  {
    var yi, xf;
    var cantidadlineas = numAleatorio(1, 100);
    var espacio = cuadros.width / cantidadlineas;
 for (var lineas = 0; lineas < cantidadlineas; lineas++)
  {
   yi = espacio * lineas;
   xf = espacio * (lineas + 1);
    funcionDeLinea(colores, 0, yi, xf, 800, lienzos);
  }
  }
}


 function funcionDeLinea(color, xinicial, yinicial, xfinal, yfinal, grafico)
 {
  grafico.beginPath();
  grafico.strokeStyle = color;
  grafico.moveTo(xinicial, yinicial);
  grafico.lineTo(xfinal, yfinal);
  grafico.stroke();
  grafico.closePath();
 }



 function numAleatorio(min, max)
  {
   return resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(resultado);
  }

  funcionDeLinea("black", 1, 1, 1, 299, lienzos);
  funcionDeLinea("black", 1, 299, 299, 299, lienzos);
  funcionDeLinea("black", 299, 299, 299, 1, lienzos);
  funcionDeLinea("black", 299, 1, 1, 1, lienzos);

function cambiarColor()
{
  colores = colorindicado.value;
}
