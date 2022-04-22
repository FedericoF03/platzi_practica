var limpieza = document.getElementById('limpiaboton');
limpieza.addEventListener("click", limpiar)

var saldo = document.getElementById('botoncantidad');
saldo.addEventListener("click", consultarSaldo)

var b = document.getElementById('botonplata');
b.addEventListener("click", entregarDinero)

var r3 = document.getElementById('resultadosaldo');
var r = document.getElementById('resultado');
var r2 = document.getElementById('resultadoimg');

function entregarDinero()
{
  var texto = document.getElementById('numeroplata');
  dinero = parseInt(texto.value);
  for(var bi of caja)
  {
    if (dinero > 0 )
    {
      div = Math.floor( dinero / bi.valor);
      if (div > bi.cantidad)
      {
         papeles = bi.cantidad;
      }
       else
       {
         papeles = div;
       }
       entregado.push(new Billetes(bi.valor, papeles) );
       dinero = dinero - (bi.valor * papeles);
    }
  }
  if (dinero < 0)
  {
    r.innerHTML = "";
    r.innerHTML += "sos boludo o te pario un teletubbi, si queres sacar plata en negativo anda al casino. <br />";
  }
  if (dinero > 0)
  {
    r.innerHTML = "";
    r.innerHTML += "Lo siento papi no tengo <br />";
  }
  else
  {
    for(var e of entregado)
    {
      if (e.cantidad > 0)
      {
        r.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />";

        r2.innerHTML += "<hr />";

         for (var bi = 0; bi < e.cantidad; bi++)
          {
           r2.innerHTML += "<img src=" + e.imagen.src + " />";
          }
       }
     }
   }
}
function limpiar()
{
  r.innerHTML = "";
  r2.innerHTML = "";
  r3.innerHTML ="";
}

function consultarSaldo()
{
  var texto = document.getElementById('numeroplata');
  dinero = parseInt(texto.value);
   for(var bi of caja)
   {
     if (dinero == 0)
     {
       actual.push(new Billetes(bi.valor, bi.cantidad) );
     }
      if (dinero > 0 )
      {
       div = Math.floor( dinero / bi.valor);
        if (div > bi.cantidad)
        {
         papeles = bi.cantidad - bi.cantidad;
         dinero = dinero - (bi.valor * bi.cantidad);
        }
         else
         {
          div2 = bi.cantidad - div;
          papeles = div2
          dinero = dinero - (bi.valor * div);
         }
      actual.push(new Billetes(bi.valor, papeles) );
       }
     }
   for(var e of actual)
   {
       r3.innerHTML = "";
       r3.innerHTML = "queda la cantidad de: <br>";
       r.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br />";
       r2.innerHTML += "<hr />";

        for (var bi = 0; bi < e.cantidad; bi++)
         {
          r2.innerHTML += "<img src=" + e.imagen.src + " />";
         }
   }
 }
