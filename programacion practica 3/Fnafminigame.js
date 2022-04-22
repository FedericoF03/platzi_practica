var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
      };

var cuadrado = document.getElementById('canvas');
var lienzo = cuadrado.getContext("2d");

var botonpersonaje = document.getElementById('change');
botonpersonaje.addEventListener("dblclick", cambiarPersonaje);
var cambio = false;

var botonaleatoridadnueva = document.getElementById('aleatorio');
botonaleatoridadnueva.addEventListener("click", generacionNueva);

document.addEventListener("keydown", moverAsesino);
var f = 0;


var cantidad = random(1, 10)

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarFreddy()
{
  freddy.cargaOK = true;
  dibujar();
}

function cargarFoxy()
{
  foxy.cargaOK = true;
  dibujar();
}

function cargarSpringtrap()
{
  springtrap.cargaOK = true;
  dibujar();
}

function cargarHombre()
{
  el_hombre_morado.cargaOK = true;
  dibujar();
}

function dibujar()
{

  if (fondo.cargaOK)
  {
    lienzo.drawImage(fondo.image, 0, 0);
  }

   if (freddy.cargaOK)
   {
     for (var f = 0; f < cantidad ; f++)
     {
       var x = random(0, 10)* 60;
       var y = random(0, 10)* 60;
       freddy.x[f]=x;
       freddy.y[f]=y;
       lienzo.drawImage(freddy.image, x, y);
     }
   }

    if (foxy.cargaOK)
    {
      for (var fo = 0; fo < cantidad ; fo++)
      {
        var x= random(0, 5)* 100;
        var y = random(0, 5)* 100;
        foxy.x[fo]= x;
        foxy.y[fo]= y;
        lienzo.drawImage(foxy.image, x, y);
      }
     }

     if (springtrap.cargaOK)
     {
       for (var s = 0; s < cantidad ; s++)
       {
         var x = random(0, 15)* 30;
         var y = random(0, 15)* 30;
         springtrap.x[s]= x;
         springtrap.y[s]= y;
         lienzo.drawImage(springtrap.image, x, y);
       }
      }

       if (el_hombre_morado.cargaOK)
        {
        var x = random(0, 5)* 10;
        var y = random(0, 5)* 10;
         lienzo.drawImage(el_hombre_morado.image, x, y);
         el_hombre_morado.x =x;
         el_hombre_morado.y =y;
        }
 }

function moverAsesino(evento)
{
  var movimiento = 10
   switch (evento.keyCode)
   {
     case teclas.UP:
      dibujarOtravez();
     lienzo.drawImage(el_hombre_morado.image, el_hombre_morado.x, el_hombre_morado.y-movimiento);
     el_hombre_morado.y = el_hombre_morado.y - movimiento;


     break;
     case teclas.DOWN:
     dibujarOtravez();
     lienzo.drawImage(el_hombre_morado.image, el_hombre_morado.x, el_hombre_morado.y+movimiento);
      el_hombre_morado.y = el_hombre_morado.y + movimiento;

     break;
     case teclas.LEFT:
     dibujarOtravez();
     lienzo.drawImage(el_hombre_morado.image, el_hombre_morado.x - movimiento, el_hombre_morado.y);
      el_hombre_morado.x = el_hombre_morado.x - movimiento;

     break;
     case teclas.RIGHT:
     dibujarOtravez();
    lienzo.drawImage(el_hombre_morado.image, el_hombre_morado.x + movimiento, el_hombre_morado.y)
     el_hombre_morado.x = el_hombre_morado.x + movimiento;
     break;
   }
}


function dibujarOtravez()
{

  if (fondo.cargaOK)
  {
    lienzo.drawImage(fondo.image, 0, 0);
  }

   if (freddy.cargaOK)
   {

     for (var f = 0; f < cantidad ; f++)
     {
       lienzo.drawImage(freddy.image, freddy.x[f], freddy.y[f]);
      }
     }

    if (foxy.cargaOK)
    {
      for (var fo = 0; fo < cantidad ; fo++)
      {
        lienzo.drawImage(foxy.image, foxy.x[fo], foxy.y[fo]);
      }
     }

     if (springtrap.cargaOK)
     {
       for (var s = 0; s < cantidad ; s++)
       {
         lienzo.drawImage(springtrap.image, springtrap.x[s], springtrap.y[s]);
       }
      }
 }



function random(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function cambiarPersonaje()
{
   if (cambio == false)
   {
      el_hombre_morado.image.src = "hombremorado.png";
      cambio = true;
   }
    else if (cambio == true)
    {
     el_hombre_morado.image.src = "el_hombre_morado.png";
     cambio = false;
    }
}

function generacionNueva()
{
cargarFondo();
dibujar();
dibujarOtravez();
}
