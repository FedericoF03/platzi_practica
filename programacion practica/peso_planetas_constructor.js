class Planetas{
  constructor(g_p, n_p)
  {
    this.gravedad = g_p;
    this.nombre = n_p;
  }
}

var among = {
  url: "amongus.png",
  };

 among.imagen = new Image ();
 among.imagen.src = among.url;

var fnaf = {
  url: "fnaf.png",
  };

 fnaf.imagen = new Image ();
 fnaf.imagen.src = fnaf.url;

var lunaf = {
  url: "Luna_creciente.png",
  };

 lunaf.imagen = new Image ();
 lunaf.imagen.src = lunaf.url;

var saturnof = {
  url: "saturno.png",
  };

  saturnof.imagen = new Image ();
  saturnof.imagen.src = saturnof.url;

var martef = {
  url: "marte.png",
  };

martef.imagen = new Image ();
martef.imagen.src = martef.url;

var tierra = {
  url: "tierra.png",
  };

tierra.imagen = new Image ();
tierra.imagen.src = tierra.url;
var planetasfoto = document.body.appendChild(tierra.imagen);

marte = new Planetas(3.72, "Marte");
luna = new Planetas(1.62, "Luna");
saturno = new Planetas(10.44, "Saturno");


function random(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
