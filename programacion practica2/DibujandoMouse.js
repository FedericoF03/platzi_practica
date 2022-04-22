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
  funcionDeLinea(colores, e.offsetX-1, e.offsetY-1, e.offsetX+1 , e.offsetY+1, lienzos);
  }
}


function mouseOffClick()
{
  if (click == true)
  {
   click = false;
  }
}
