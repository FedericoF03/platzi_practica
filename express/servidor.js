var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
resultado.send("Esta es la casita");
}

function cursos(peticion, resultado)
{
resultado.send("aca estan los cursos");
}

aplicacion.listen(8989);
