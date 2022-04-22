
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  P: 80,
  U: 85,
  T: 84,
  O: 79
};
    var x = 150;
    var y = 150;
    var x2 = 400;
    var y2 = 400;
document.addEventListener("keydown", verificar);

function verificar(evento)
{
  console.log(evento);
  if (cuadros.width == 300)
  {
  var movimiento = 10;
   switch (evento.keyCode)
    {
    case teclas.UP:
      funcionDeLinea(colores ,x ,y ,x ,y - movimiento ,lienzos);
      y = y - movimiento;
      correcionDeLinea1();
    break;
    case teclas.DOWN:
      funcionDeLinea(colores ,x ,y ,x ,y + movimiento ,lienzos);
      y = y + movimiento;
      correcionDeLinea1();
    break;
    case teclas.LEFT:
      funcionDeLinea(colores ,x ,y  ,x - movimiento ,y  ,lienzos);
      x = x - movimiento;
      correcionDeLinea1();
    break;
    case teclas.RIGHT:
      funcionDeLinea(colores ,x ,y ,x + movimiento ,y ,lienzos);
      x = x + movimiento;
      correcionDeLinea1();
    break;
    case teclas.P:
      frase.innerHTML = ("<br><strong> Oppenheimer: Ahora me he convertido en la muerte, el destructor de mundos.</strong>");
      document.body.appendChild(nuclear.imagen);
      document.body.style.backgroundImage = "url(lienzo2.png)";
      document.body.style.backgroundPosition = "-60% 10%";
      document.body.style.backgroundRepeat = "no-repeat";

    break;
    }
   }

   if (cuadros.width == 800)
    {
     var movimiento = 10;
     switch (evento.keyCode)
    {
      case teclas.UP:
       funcionDeLinea(colores ,x2 ,y2 ,x2 ,y2 - movimiento ,lienzos);
        y2 = y2 - movimiento;
        correcionDeLinea2();
      break;
      case teclas.DOWN:
       funcionDeLinea(colores ,x2 ,y2 ,x2 ,y2 + movimiento ,lienzos);
        y2 = y2 + movimiento;
        correcionDeLinea2();
      break;
      case teclas.LEFT:
       funcionDeLinea(colores ,x2 ,y2 ,x2 - movimiento ,y2 ,lienzos);
        x2 = x2 - movimiento;
        correcionDeLinea2();
      break;
      case teclas.RIGHT:
       funcionDeLinea(colores ,x2 ,y2 ,x2 + movimiento ,y2 ,lienzos);
        x2 = x2 + movimiento;
        correcionDeLinea2();
      break;
      default:
      console.log("funcionando");
     }
     }
}


function correcionDeLinea1()
{
  if (y <= 2)
  {
    y = 150;
    x = 150;
  }
  if (x <= 2)
  {
    y = 150;
    x = 150;
  }
  if (y >= 298)
  {
    y = 150;
    x = 150;
  }
  if (x >= 298)
  {
    y = 150;
    x = 150;
  }
}

function correcionDeLinea2()
 {
   if (y2 <= 2)
   {
     y2 = 400;
     x2 = 400;
   }
   if (x2 <= 2)
   {
     y2 = 400;
     x2 = 400;
   }
   if (y2 >= 798)
   {
     y2 = 400;
     x2 = 400;
   }
   if (x2 >= 798)
   {
     y2 = 400;
     x2 = 400;
   }
 }
