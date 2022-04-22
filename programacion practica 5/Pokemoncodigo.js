
var descripcion = [];
descripcion["Charmander"] = "Este Pokémon nace con una llama en la punta de la cola. Si la llama se apagara, el Pokémon se debilitaría.";
descripcion["Squirtle"] = "Lanza agua a su presa desde el agua. Se esconde en su concha cuando se siente en peligro.";
descripcion["Bulbasaur"] = "La semilla de su lomo está llena de nutrientes. La semilla brota a medida que el Pokémon crece.";

var imagenes = [];
imagenes["Charmander"] = "charmander.png";
imagenes["Squirtle"] = "squirtle.png";
imagenes["Bulbasaur"] = "bulbausaur.png";

var coleccion = [];
coleccion.push(new Pokemons ("Charmander", 80, 150, "fuego") );
coleccion.push(new Pokemons ("Squirtle", 150, 80, "agua") );
coleccion.push(new Pokemons ("Bulbasaur", 70, 70, "planta") );


for (var pokemons of coleccion)
{
  pokemons.mostrar();
}
