class Pokemons{
  constructor(n, v, a, t)
  {
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.descripcion = descripcion[this.nombre];
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
    this.tipo = t;
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("<br /><strong>" + this.descripcion + "</strong><br />");
    document.write("vida: " + this.vida + "</strong><br />");
    document.write("ataque: " + this.ataque + "<br />");
    document.write("El tipo de pokemon es: " + this.tipo + "<hr />" );
  }
}
