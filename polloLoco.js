var vp = document.getElementById("villaPollo"); //este es el ID del HTML
var papel = vp.getContext("2d");
var px = 149;
var py = 149;
var movimiento = 10;
var cantidadvacas = aleatorio(1, 6);
var cantidadcerdos = aleatorio(1, 9);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

document.addEventListener("keydown", moverPollo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarPollo(evento)
{
  pollo.cargaOK = true;
  dibujar();
  console.log(evento);
}

function cargarVacas(evento)
{
  vaca.cargaOK = true;
  dibujar();
  console.log(evento);
}

function cargarCerdos(evento)
{
  cerdo.cargaOK = true;
  dibujar();
  console.log(evento);
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(pollo.cargaOK)
  {
    papel.drawImage(pollo.imagen, px, py);
  }
  if(vaca.cargaOK)
  {
    posXvacas = [];
    posYvacas = [];
    for(v=0; v<cantidadvacas; v++)
    {
    var x = aleatorio(1,30);
    var y = aleatorio(1,30);
    var x = x * 70;
    var y = y * 70;
    posXvacas[v] = x;
    posYvacas[v] = y;
    papel.drawImage(vaca.imagen, x, y);
    }
    if(cerdo.cargaOK)
    {
      posXcerdos = [];
      posYcerdos = [];
      for(c=0; c<cantidadcerdos; c++)
      {
        var x = aleatorio(0, 4);
        var y = aleatorio(0, 4);
        var x = (x * 80) - 5;
        var y = (y * 80) - 5;
        posXcerdos[c] = x;
        posYcerdos[c] = y;
        papel.drawImage(cerdo.imagen, x, y);
      }
    }
  }
}
function reDibujo()
{
  papel.drawImage(fondo.imagen, 0, 0);
  for (v=0; v < cantidadvacas; v++)
  {
    papel.drawImage(vaca.imagen, posXvacas[v], posYvacas[v]);
  }
  for (c=0; c < cantidadcerdos; c++)
  {
    papel.drawImage(cerdo.imagen, posXcerdos[c], posYcerdos[c]);
  }
  if(pollo.cargaOK)
  {
    papel.drawImage(pollo.imagen, px, py);
  }
}

function moverPollo(evento)
{
  if(evento.keyCode == teclas.UP)
  {
    papel.drawImage(pollo.imagen, px, py - movimiento);
    py = py - movimiento;
    reDibujo();
  }
  if(evento.keyCode == teclas.DOWN)
  {
    papel.drawImage(pollo.imagen, px, py + movimiento);
    py = py + movimiento;
    reDibujo();
  }
  if(evento.keyCode == teclas.LEFT)
  {
    papel.drawImage(pollo.imagen, px - movimiento, py);
    px = px - movimiento;
    reDibujo();
  }
  if(evento.keyCode == teclas.RIGHT)
  {
    papel.drawImage(pollo.imagen, px + movimiento, py);
    px = px + movimiento;
    reDibujo()
  }
}

function aleatorio(min, maxi) // funcion que determina un punto aleatorio
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
