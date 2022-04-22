
class Billetes
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor]
  }
}

var imagenes = [];
imagenes["50"] = "dinero_esponja_de_50.png"
imagenes["20"] = "dinero_esponja_de_20.png"
imagenes["10"] = "dinero_esponja_de_10.png"

var caja = [];
caja.push( new Billetes(50, 3) );
caja.push( new Billetes(20, 2) );
caja.push( new Billetes(10, 2) );

var resultados = 0;
var dinero = 0;
var div = 0;
var div2 = 0;
var papeles = 0;
var entregado = [];
var actual = [];
