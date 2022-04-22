var incorrecto = document.getElementById('error');
var g_tierra = 9.80;
var planeta_texto = document.getElementById('planetas_texto');
parseInt(planeta_texto);
var peso_texto = document.getElementById('peso_texto');
var boton = document.getElementById('boton_peso');
boton.addEventListener("click", insertarPeso);
var botonaleatorio = document.getElementById('boton_aleatorio');
botonaleatorio.addEventListener("click", planetaAleatorio);

function insertarPeso()
{
  if (planeta_texto.value == marte.nombre)
   {
     peso_en_marte = (marte.gravedad / peso_texto.value) * g_tierra;
      incorrecto.innerHTML = ("Tu peso en Marte es de " + peso_en_marte.toFixed(2) + "<strong> Kilos, que waton </strong>");
        planetasfoto.src = martef.imagen.src;
        if (peso_texto.value == 0)
         {
          incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
          planetasfoto.src = "tierra.png"
         }
   }
   else if (planeta_texto.value == luna.nombre)
     {
      peso_en_luna = (luna.gravedad / peso_texto.value) * g_tierra;
       incorrecto.innerHTML = ("Tu peso en La luna es de " + peso_en_luna.toFixed(2) + "<strong> Kilos, que waton </strong>");
        planetasfoto.src = lunaf.imagen.src;
        if (peso_texto.value == 0)
         {
          incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
          planetasfoto.src = "tierra.png"
         }
     }
    else if (planeta_texto.value == saturno.nombre)
      {
        peso_en_saturno = (saturno.gravedad / peso_texto.value) * g_tierra;
         incorrecto.innerHTML = ("Tu peso en Saturno es de " + peso_en_saturno.toFixed(2) + "<strong> Kilos, que waton </strong>");
          planetasfoto.src = saturnof.imagen.src;
          if (peso_texto.value == 0)
           {
            incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
            planetasfoto.src = "tierra.png"
           }
      }
     else
     {
       incorrecto.innerHTML = "Es simple boludito elegi de lo que se te ofrece no lo que queres.";
        planetasfoto.src = among.imagen.src;
     }
 }

 function planetaAleatorio()
 {
   resultados = random(1,3);
   resultados2 = random(4, 10);
   if ( resultados == 1)
   {
     peso_en_marte = (marte.gravedad / peso_texto.value) * g_tierra;
      incorrecto.innerHTML = ("Tu peso en Marte es de " + peso_en_marte.toFixed(2) + "<strong> Kilos, que waton </strong>");
       planetasfoto.src = martef.imagen.src;
       if (peso_texto.value == 0)
        {
         incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
         planetasfoto.src = tierra.url;
        }
   }
   if (resultados == 2)
     {
      peso_en_luna = (luna.gravedad / peso_texto.value) * g_tierra;
       incorrecto.innerHTML = ("Tu peso en La luna es de " + peso_en_luna.toFixed(2) + "<strong> Kilos, que waton </strong>");
        planetasfoto.src = lunaf.imagen.src;
        if (peso_texto.value == 0)
         {
          incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
          planetasfoto.src = tierra.url;
         }
     }
    if (resultados == 3)
      {
        peso_en_saturno = (saturno.gravedad / peso_texto.value) * g_tierra;
         incorrecto.innerHTML = ("Tu peso en Saturno es de " + peso_en_saturno.toFixed(2) + "<strong> Kilos, que waton </strong>");
          planetasfoto.src = saturnof.imagen.src;
           if (peso_texto.value == 0)
           {
             incorrecto.innerHTML = "te estas olvidando el peso salame, te pensas que no lo se? siempre preparado..."
             planetasfoto.src = tierra.url;
           }
      }
      if (resultados2 == 5)
      {
        incorrecto.innerHTML = ("«Conexión terminada. Lamento interrumpirte, Elizabeth, si es que todavía recuerdas ese nombre, pero me temo que has sido mal informada. No estás aquí para recibir un regalo, y tampoco has sido llamada por la persona que crees, aunque, en efecto, has sido llamada. Todos habéis sido llamados aquí, hacia este laberinto de sonidos y olores, distracciones y mala suerte. Un laberinto sin salida ni premio. Ni siquiera os dais cuenta de que estáis atrapados. Vuestra sed de sangre os ha hecho mover en círculos de forma incesante, persiguiendo los gritos de niños en alguna habitación oculta que siempre parece estar muy cerca, y que sin embargo es incalcanzable.  Pero jamás los encontraréis. Ninguno de vosotros podrá. Vuestra historia termina aquí. Y tú, mi valiente voluntario, que de alguna forma encontró esta oferta de trabajo que no iba dirigida a ti; aunque había planeada una salida para ti, tengo la impresión de que eso no es lo que quieres. Tengo la sensación de que estás exactamente donde quieres estar. Yo también voy a quedarme aquí. Estoy cerca. Este lugar no será recordado, y el recuerdo de todo lo que empezó esto finalmente puede empezar a desvanecerse, al igual que debería desaparecer el sufrimiento provocado por cualquier tragedia. Y vosotros, monstruos atrapados en los pasillos: quedaos quietos y abandonad vuestros espíritus. No os pertenecen. Para la mayoría de vosotros, creo que os espera paz y quizá algo más una vez el humo se haya despejado. Pero para uno de vosotros, el abismo más oscuro del infierno se acaba de abrir para devorarte entero, así que no hagas esperar al Diablo, viejo amigo.")
        planetasfoto.src = fnaf.imagen.src;
      }
 }
