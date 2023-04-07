console.log("Esto es una prueba")
console.log("Mensajes para el Dev")
console.log("Esto es una string")

let nombre1 = "Beer"

console.log(nombre1 + " significa Cerveza en ingles.")

console.log(nombre1.length)

let nombre2 = "Cerveza Scotish"

console.log(nombre2.split(" "))

let nombre3 = "Cervezas IPA y APA"

console.log(nombre3.split(" "))


console.log(nombre1.toLowerCase())
console.log(nombre1.toUpperCase())

console.log(nombre2.toLowerCase())
console.log(nombre2.toUpperCase())

console.log(nombre3.toLowerCase())
console.log(nombre3.toUpperCase())


nombre2 = nombre3.trim()
nombre2 = "Cerveza honey es una de las mas populares"
console.log(nombre2.length)

let cerveza1Minuscula = nombre3.toLowerCase()
console.log(nombre1.includes("e"))
console.log(cerveza1Minuscula.includes("e"))

console.log(nombre2.toLowerCase())

// Si la persona tiene igual o mas de 18 años, puede comprar en el sitio, de lo contrario no podra y le saldra un Acceso denegado por edad

let edad = "22"

if (edad >= 18) {
    console.log("Usted puede comprar, gracias por elegirnos.")
} else {
    console.log("Acceso denegado por edad.")
}

let edad2 = "17"

if (edad2 >= 18) {
    console.log("Usted puede comprar, gracias por elegirnos.")
} else {
    console.log("Acceso denegado por edad.")
}

// La graduacion de alcohol identifica a las cervezas... Si la graduacion es menor a 6 entonces es una cerveza suave, de lo contrario es una cerveza fuerte

let graduacion = "11"

if (graduacion < 6 ) {
    console.log("Cerveza suave")
}else {
    console.log("Cerveza fuerte")
}

let graduacion2 = "3.5"

if (graduacion2 < 6 ) {
    console.log("Cerveza suave")
}else {
    console.log("Cerveza fuerte")
}

let nombreCerveza1 = "Patagonia"
let nombreCerveza2 = "Quilmes"
let nombreCerveza3 = "BarbaRoja"

if (nombreCerveza1 == "Patagonia" || nombreCerveza1 == "Temple") {
    console.log("La cerveza es artesanal")
} else {
    console.log("La cerveza no es artesanal")
}

if (nombreCerveza2 == "Patagonia" || nombreCerveza2 == "Temple") {
    console.log("La cerveza es artesanal")
} else {
    console.log("La cerveza no es artesanal")
}

if (
    (nombreCerveza1 == "Patagonia" || nombreCerveza1 == "Temple") && (nombreCerveza2 == "Antares" && nombreCerveza3 == "BarbaRoja")
 ) {
    console.log("Las cervezas si son artesanales")
} else {
    console.log("Las cervezas no son artesanales")
}

if (
    nombreCerveza1 == "Patagonia" && (nombreCerveza1 == "Patagonia" || nombreCerveza1 == "Temple" || nombreCerveza2 == "Antares") && nombreCerveza3 == "BarbaRoja"
 ) {
    console.log("Las cervezas si son artesanales")
} else {
    console.log("Las cervezas no son artesanales")
}

//#region  Datos
const productosVenta = [
    {
      nombre: "Miller Sixpack Lata 473ml",
      descripcion: "Color dorado, claridad increíble, sabor suave y refrescante.",
      precio: 1890.00,
      url: "https://beermarket.com.ar/wp-content/uploads/2020/11/Sixpack-Miller-473ml.png",
      descuento: false,
      monto_descuento: null,
    },
    {
      nombre: "Heineken Sixpack Lata 473ml",
      descripcion: "Cuerpo ligero. Sabor algo amargo pero fresco.",
      precio: 2190.00,
      url: "https://beermarket.com.ar/wp-content/uploads/2020/11/Sixpack-Heineken-473ml.jpg",
      descuento: false,
      monto_descuento: null,
    },
    {
      nombre: "Andes Roja Sixpack 473ml",
      descripcion: "Aroma a suave caramelo y leve lúpulo. color ámbar cobrizo.",
      precio: 1920.00,
      url: "https://beermarket.com.ar/wp-content/uploads/2020/11/Sixpack-Andes-Roja-473ml.jpg",
      descuento: false,
      monto_descuento: null,
    },
    {
      nombre: "Stella Artois Sixpack 473ml",
      descripcion: "Color dorado brillante. Espuma blanca de media persistencia. Fresca y de bajo amargor.",
      precio: 2310.00,
      url: "https://beermarket.com.ar/wp-content/uploads/2020/11/Stella-Artois-Sixpack-473ml.jpg",
      descuento: false,
      monto_descuento: null,
    },
    {
        nombre: "Temple Scottish Sixpack Lata 473ml",
        descripcion: "Receta de Escocia, refrescante e inigualable.",
        precio: 2820.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2021/03/Temple-Scottisch-Sixpack-473ml.png",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Guinness Extra Stout Sixpack 473ml",
        descripcion: "Cerveza negra, sabor intenso.",
        precio: 3294.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2022/05/Guinness-extra-stout.jpg",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Goose Island Sixpack lata 473ml",
        descripcion: "Goose IPA es una cerveza de estilo American IPA, de un amargor pronunciado y un carácter intenso. ",
        precio: 2970.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2022/08/2.png",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Michelob Sixpack 410ml",
        descripcion: "Una ligth beer superior a cualquier otra",
        precio: 1680.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2021/09/michelob.jpg",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Warsteiner Sixpack Lata 473ml",
        descripcion: "Suave y vigorizante tono de lúpulo. Sabor cortante único.",
        precio: 1350.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2020/11/Sixpack-Warsteiner-473ml.jpg",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Temple Cosmica Sixpack 473ml",
        descripcion: "Es una cerveza Lager Lupulada, creada con la variedad Galaxy Single Hop.",
        precio: 2820.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2022/02/TEMPLE-COSMICA-SIXPACK-473-ML-1.jpg",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Pinta de la Paz Sixpack Lata 473ml",
        descripcion: "Es una cerveza elaborada con levaduras Lager y Ale. De cuerpo maltoso y aroma a caramelo.",
        precio: 2500.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2021/06/Pinta-de-la-Paz-sixpack-473ml.jpg",
        descuento: false,
        monto_descuento: null,
      },
      {
        nombre: "Patagonia Travesía Sureña APA Sixpack 410ml",
        descripcion: "Una APA con el sabor de todas las localidades perfectas para esta cerveza.",
        precio: 2700.00,
        url: "https://beermarket.com.ar/wp-content/uploads/2022/10/PATAGONIA-TRAVESIA-SURENA-APA-473.png",
        descuento: false,
        monto_descuento: null,
      },
  ];
  //#endregion
  
  const divApp = document.getElementById("app");
  
  const obtenerDescuento = (precio, descuento) => {
    return precio - descuento;
  };
  
  const cardTemplate = (url, titulo, nombre, link, precio, descuento) => {
    return `<div class="card m-2" style="width: 18rem;">
        <img src="${url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <span>$ ${
            descuento !== null ? obtenerDescuento(precio, descuento) : precio
          }</span>
          <p class="card-text">${nombre}</p>
          <a href="${link}" class="btn btn-warning">+</a>
        </div>
      </div>`;
  };
  
  let htmlTemplate = "<div class='d-flex row m-3'>";
  
  productosVenta.map((element) => {
    const { url, nombre, descripcion, precio, descuento, monto_descuento } =
      element;
    htmlTemplate += cardTemplate(
      url,
      nombre,
      descripcion,
      "",
      precio,
      descuento ? monto_descuento : ""
    );
  });
  
  htmlTemplate += "</div>";
  
  divApp.innerHTML = htmlTemplate;
  