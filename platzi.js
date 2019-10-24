var vp = document.getElementById("villaplatzi"); //este es el ID del HTML
var papel = vp.getContext("2d");  //este es el contexto 2d

var fondo = {
url: "tile.png",
cargaOK: true //la carga va a empezar en false
};

var vaca = {
url: "vaca.png",
cargaOK: true //la carga va a empezar en false
};

var cerdo = {
url: "cerdo.png",
cargaOK: true //la carga va a empezar en false
};
////////////
//var cantidad = aleatorio(5, 25); // aca declaramos la variable cantidad para que for la tome y forme aleatoreidad lo colocamos arriba p[ara que se ejecute 1 sola vez]
////////////
fondo.imagen = new Image();
fondo.imagen.src = fondo.url; //estamos llamando el fondo el la variable  con el url donde tenemos la imagen
fondo.imagen.addEventListener("load", cargarFondo); //este load solo sirve para la imagen fondo
//creamos un addEventListener para cargar cada imagen png que tenemos en la carpeta en las variables

vaca.imagen = new Image();
vaca.imagen.src = vaca.url; //asi cargamos la imagen de manera directa
vaca.imagen.addEventListener("load", cargarVacas); //para cargar la imagen

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url; //asi cargamos la imagen de manera directa
cerdo.imagen.addEventListener("load", cargarCerdos); //para cargar la imagen

////////////////
function cargarFondo()
{
  fondo.cargarOK = false; //coloco el true porque si yo intento dibujar y no esta cargado sale error
  dibujar(); //debemos ordenarle dibujar una vez carge con el true
}
////////////////
  function cargarVacas()
{
  vaca.cargarOK = false; //coloco el true porque si yo intento dibujar y no esta cargado sale error
  dibujar();
}
////////////////
  function cargarCerdos()
{
  cerdo.cargarOK = false; //coloco el true porque si yo intento dibujar y no esta cargado sale error
  dibujar();
}
////////////////
  function dibujar() //en el bloque de esta funcion damos las instrucciones if
{
  if(fondo.cargaOK) //por defecto carga negativo pero en la fiuncion se le esta diciendo lo contrario
  {
  papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)// aca colocamos que cuando se dibuje la vaca tenga variables como cantidad y pocision
  {
  var cantidad = aleatorio(0, 6);
  for (var i = 0; i < cantidad; i++) //La sentencia for...in itera sobre todos los elementos de un objeto, en un orden arbitrario. Para cada uno de los elementos, se ejecuta la sentencia especificada.
  {
   var x = aleatorio(0, 420);//estos numeros los sacamos restando el tamano del canvas y el tamano de la imagen
   var y = aleatorio(0, 420);//creamos la variable donde carga la vaca y especificamos  var= x y var= y
   papel.drawImage(vaca.imagen, x, y);

   }
   }
   if(cerdo.cargaOK)// aca colocamos que cuando se dibuje la vaca tenga variables como cantidad y pocision
   {
   var cantidad = aleatorio(0, 3);
   for (var i = 0; i < cantidad; i++) //La sentencia for...in itera sobre todos los elementos de un objeto, en un orden arbitrario. Para cada uno de los elementos, se ejecuta la sentencia especificada.
   {
   var x = aleatorio(0, 420);//estos numeros los sacamos restando el tamano del canvas y el tamano de la imagen
   var y = aleatorio(0, 420);//creamos la variable donde carga la vaca y especificamos  var= x y var= y
   papel.drawImage(cerdo.imagen, x, y);

    }
    }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado
}
