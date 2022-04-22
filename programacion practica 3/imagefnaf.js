var fondo = {
    url: "piso.png",
    cargaOK: false
};

fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", cargarFondo);

var freddy = {
    url: "freddy.png",
    cargaOK: false,
    x: [],
    y: []
};

freddy.image = new Image();
freddy.image.src = freddy.url;
freddy.image.addEventListener("load", cargarFreddy);

var springtrap = {
    url: "spring.png",
    cargaOK: false,
    x: [],
    y: []
};

springtrap.image = new Image();
springtrap.image.src = springtrap.url;
springtrap.image.addEventListener("load", cargarSpringtrap);

var foxy = {
    url: "foxy.png",
    cargaOK: false,
    x: [],
    y: []
};

foxy.image = new Image();
foxy.image.src = foxy.url;
foxy.image.addEventListener("load", cargarFoxy);

var el_hombre_morado = {
    url: "el_hombre_morado.png",
    cargaOK: false,
    x: 0,
    y: 0
};

el_hombre_morado.image = new Image();
el_hombre_morado.image.src = el_hombre_morado.url;
el_hombre_morado.image.addEventListener("load", cargarHombre);
