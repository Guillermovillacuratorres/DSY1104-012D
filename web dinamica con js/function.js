
productos = [
    {
        "id":1,
        "titulo":"CPU",
        "imagen":"img/cpu.jpg",
        "precio":5000
    },
    {
        "id":2,
        "titulo":"GPU",
        "imagen":"img/gpu.jpg",
        "precio":9990
    }
]


const section = document.getElementById("productos");
console.log(section);

const contenedorCard = document.createElement("div");
contenedorCard.className = "contendor-card";
section.appendChild(contenedorCard);


for (const i of productos) { 
    const card = document.createElement("div");
    card.className = "card";
    contenedorCard.appendChild(card);

    const titulo = document.createElement("h1");
    titulo.textContent = i.titulo;
    card.appendChild(titulo);

    const imagen = document.createElement("img");
    imagen.src = i.imagen;
    card.appendChild(imagen);

    const precio = document.createElement("h1");
    precio.textContent = i.precio;
    card.appendChild(precio);

    const contenedorBtn = document.createElement("div");
    contenedorBtn.className = "contenedor-btn";
    card.appendChild(contenedorBtn);

    const btnAgregarCarro = document.createElement("button");
    btnAgregarCarro.textContent = "Agregar al carro";
    btnAgregarCarro.className = "btn btn-primary";
    btnAgregarCarro.addEventListener("click", function(){
        guardar(i);
    })
    contenedorBtn.appendChild(btnAgregarCarro);
}


const LLAVE = "carrito";

function guardar(producto) {
    console.log(producto);  
    lista = [];
    
    var storageActual = localStorage.getItem(LLAVE);
    var storageParse = JSON.parse(storageActual);

    if (storageActual != null) {
        storageParse.push(producto);
        localStorage.setItem(LLAVE,JSON.stringify(storageParse));
    }else{
        lista.push(producto);
        localStorage.setItem(LLAVE,JSON.stringify(lista));
    }
}