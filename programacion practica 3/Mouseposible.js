document.addEventListener("mousedown", mouseClick);
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseOffClick);

var click = false;

function mouseClick()
{
  click = true;
}

function mouseMove(e)
{
  if (click == true)
  {
    dibujarOtravez();
  lienzo.drawImage(el_hombre_morado.image, e.offsetX, e.offsetY);
  }
}


function mouseOffClick()
{
  if (click == true)
  {
   click = false;
  }
}
