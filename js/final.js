// Array de productos
const productos = [
    {
        "ID": 1,
        "categoria": "perfumes",
        "imagen": "img/Productos/212VipRoseEDP.webp",
        "alt": "212 Vip Rose",
        "marca": "CAROLINA HERRERA",
        "fecha": 2014,
        "nombre": "212 Vip Rose EDP",
        "descripcion": "Fresco, desenfadado y muy sexy. 212 VIP Rosé EDP de Carolina Herrera es un perfume de mujer que deja huella allá donde va. Una versión más fresca y juvenil de su predecesor, 212 VIP EDP, que contiene matices femeninos, sensuales y auténticos. Dirigido a aquellas mujeres que son amantes de las celebraciones, esta fragancia comienza con notas afrutadas que se adentran en un corazón floral, para luego descansar sobre una base cálida y confortable de Ámbar, Almizcle Blanco y notas amaderadas.",
        "genero": "mujer",
        "precio": 48.9,
        "disponible": true
    },
    {
        "ID": 2,
        "categoria": "perfumes",
        "imagen": "img/Productos/ArmaniCodeLeParfumEDP.webp",
        "alt": "Armani Code Le Parfum",
        "marca": "GIORGIO ARMANI",
        "fecha": 2021,
        "nombre": "Armani Code Le Parfum",
        "descripcion": "Armani Code Le Parfum EDP contiene una reinterpretación de la fragancia más icónica de la marca. Su esencia es más intensa y vibrante. Un perfume para hombre que no se detiene ante nada especialmente pensado para aquellos que se enfocan en el futuro con una mente abierta. Su increíble aroma cuenta con acordes brillantes, enérgicos y de alta sensibilidad. Se presenta en un frasco recargable con un toque lujoso y moderno.",
        "genero": "hombre",
        "precio": 59.94,
        "disponible": true

    },
    {
        "ID": 3,
        "categoria": "perfumes",
        "imagen": "img/Productos/BabyTousEstuche.webp",
        "alt": "Baby Tous Estuche",
        "marca": "TOUS",
        "fecha": 2007,
        "nombre": "Baby Tous Estuche",
        "descripcion": "Esta inolvidable fragancia de Tous se inspira en el tierno y delicado olor de los bebés para crear la colonia perfecta. Su refrescante aroma combina propiedades cálidas y confortables que inducen a un agradable estado de relajación.",
        "genero": "unisex",
        "precio": 39.95,
        "disponible": true
    },
    {
        "ID": 4,
        "categoria": "perfumes",
        "imagen": "img/Productos/BlackOpiumCofredeRegalo.webp",
        "alt": "Black Opium Cofre",
        "marca": "YVES SAINT LAURENT",
        "fecha": 2014,
        "nombre": "Black Opium Cofre de Regalo",
        "descripcion": "Vuelve la fragancia más misteriosa y adictiva, Black Opium Eau De Parfum de Yves Saint Laurent, en este exclusivo Cofre Regalo.",
        "genero": "mujer",
        "precio": 80.9,
        "disponible": true
    },
    {
        "ID": 5,
        "categoria": "perfumes",
        "imagen": "img/Productos/BossBottledEDT.webp",
        "alt": "Boss Bottled",
        "marca": "HUGO BOSS",
        "fecha": 1998,
        "nombre": "Boss Bottled EDT",
        "descripcion": "Boss Bottled EDT de Hugo Boss es un perfume para hombres versátil y lleno de contrastes que se inspira en los espíritus más eclécticos, misteriosos y masculinos. Un aroma fresco, amaderado, contemporáneo y relevante que reinterpreta los códigos de la masculinidad para representar el lema de su campaña, “Man of Today” (Hombre de Hoy). De esta forma, su objetivo es inspirar a todo hombre a mostrar su verdadero yo a través de sus acciones, valores y a través de una fragancia que marque la diferencia.",
        "genero": "hombre",
        "precio": 35.95,
        "disponible": true
    },
    {
        "ID": 6,
        "categoria": "perfumes",
        "imagen": "img/Productos/BossBottledEstucheEaudeParfum.webp",
        "alt": "Boss Bottled Estuche Eau de Parfum",
        "marca": "HUGO BOSS",
        "fecha": 1998,
        "nombre": "Boss Bottled Estuche Eau de Parfum",
        "descripcion": "Una masculinidad intensa y refinada se revela en BOSS Bottled Eau de Parfum.",
        "genero": "hombre",
        "precio": 59.9,
        "disponible": true
    },
    {
        "ID": 7,
        "categoria": "perfumes",
        "imagen": "img/Productos/BossBottledEstuche.webp",
        "alt": "Boss Bottled Estuche",
        "marca": "HUGO BOSS",
        "fecha": 1998,
        "nombre": "Boss Bottled Estuche",
        "descripcion": "Estuche con el perfume de hombre Boss Bottled y otro/s producto/s con la misma fragancia.",
        "genero": "hombre",
        "precio": 59.95,
        "disponible": true
    },
    {
        "ID": 8,
        "categoria": "perfumes",
        "imagen": "img/Productos/BossBottledParfum.webp",
        "alt": "Boss Bottled Parfum",
        "marca": "HUGO BOSS",
        "fecha": 1998,
        "nombre": "Boss Bottled Parfum",
        "descripcion": "El nuevo Boss Bottled Parfum desprende notas de salida de mandarina e incienso, seguidas de notas de corazón de iris e higo y notas de fondo de madera de cedro y cuero.",
        "genero": "hombre",
        "precio": 59.94,
        "disponible": true
    },
    {
        "ID": 9,
        "categoria": "perfumes",
        "imagen": "img/Productos/BvlgariPetitsEtMamansEstuche.webp",
        "alt": "Petits Et Mamans Estuche",
        "marca": "BVLGARI",
        "fecha": 1997,
        "nombre": "Petits Et Mamans Estuche",
        "descripcion": "El estuche de Bvlgari Petits et Mamans viene repleto de emociones. En su interior podrás encontrar la fragancia Bvlgari Petit et Mamans y otros productos con la misma fragancia para potenciar su aroma.",
        "genero": "infantil",
        "precio": 50.72,
        "disponible": true
    },
    {
        "ID": 10,
        "categoria": "perfumes",
        "imagen": "img/Productos/CalvinKleinCkIn2uForHerEDT.webp",
        "alt": "Ck In2u For Her EDT",
        "marca": "CALVIN KLEIN",
        "fecha": 2007,
        "nombre": "Ck In2u For Her EDT",
        "descripcion": "Esta fragancia de mujer describe una conceptualización sobre la vida. Inicia con unas notas de salida florales con la Toronja, Bergamota y Grosella Negra, evoluciona incrementando la intensidad del aroma y finaliza con toque orientales que la convierten en una aroma con carisma ¡No deja indiferente a nadie!",
        "genero": "mujer",
        "precio": 18.49,
        "disponible": true
    },
    {
        "ID": 11,
        "categoria": "perfumes",
        "imagen": "img/Productos/CalvinKleinEternityForMenEstuche.webp",
        "alt": "Eternity For Men Estuche",
        "marca": "CALVIN KLEIN",
        "fecha": 1990,
        "nombre": "Eternity For Men Estuche",
        "descripcion": "Eternity Men de Calvin Klein es una fragancia contemporánea, equilibrada y sofisticada. Una fusión estimulante moderna y clásica a la vez, con notas de mandarina y salvia seguidas de la terrosidad de las flores y las hierbas chispeantes, el cedro, y el musgo.",
        "genero": "hombre",
        "precio": 39.94,
        "disponible": true
    },
    {
        "ID": 12,
        "categoria": "perfumes",
        "imagen": "img/Productos/CarolinaHerrera212MenEDTEstuche.webp ",
        "alt": "212 Men EDT Estuche",
        "marca": "CAROLINA HERRERA",
        "fecha": 1999,
        "nombre": "212 Men EDT Estuche",
        "descripcion": "CAROLINA HERRERA 212 MEN COFRE: Estuche con el perfume de Carolina Herrera 212 Men y otro/s producto/s con la misma fragancia.",
        "genero": "hombre",
        "precio": 56.35,
        "disponible": true
    },

];

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para guardar el carrito en el localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde el localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('cart-count');
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }
}

// Función para mostrar productos en el contenedor
function mostrarProductos() {
    const contenedorProductos = document.getElementById("product-list");

    if (contenedorProductos) {
        productos.forEach(producto => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("col-md-4", "mb-4");

            divProducto.innerHTML = `
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.alt}" class="card-img-top" style="cursor: pointer;" onclick="mostrarDetalle(${producto.ID})">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.ID})">Agregar al carrito</button>
                    </div>
                </div>
            `;

            contenedorProductos.appendChild(divProducto);
        });
    }
}

// Función para mostrar detalles del producto en una modal
window.mostrarDetalle = function(productoID) {
    const productoSeleccionado = productos.find(producto => producto.ID === productoID);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="modal-content" style="width: 50%; margin: 50px auto; position: relative;">
        <button class="close" onclick="cerrarModalDetalle(this)" style="position: absolute; top: 10px; left: 10px; font-size: 24px; cursor: pointer;">&times;</button>
        <h2 style="text-align: center;">${productoSeleccionado.nombre}</h2>
        <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.alt}" style="width: 200px; height: 200px; display: block; margin: 0 auto;">
        <p style="text-align: center;">${productoSeleccionado.descripcion}</p>
        <p style="text-align: center;">Marca: ${productoSeleccionado.marca}</p>
        <p style="text-align: center;">Fecha de lanzamiento: ${productoSeleccionado.fecha}</p>
        <p style="text-align: center;">Género: ${productoSeleccionado.genero}</p>
        <p style="text-align: center;">Precio: $${productoSeleccionado.precio}</p>
    </div>
    `;

    document.body.appendChild(modal);

    modal.style.display = "block";

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            cerrarModalDetalle(modal);
        }
    });
};

// Función para cerrar la modal de detalles del producto
function cerrarModalDetalle(element) {
    const modal = element.closest(".modal");
    if (modal) {
        modal.style.display = "none";
        document.body.removeChild(modal);
    }
}

// Función para mostrar la modal de confirmación
function mostrarModalConfirmacion() {
    const modal = document.getElementById('modal-confirmacion');
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}

// Función para mostrar la modal de pago
function mostrarModalPago() {
    const modal = document.getElementById('modal-pago');
    modal.style.display = 'block';
}

// Función para cerrar la modal de pago
function cerrarModalPago() {
    const modal = document.getElementById('modal-pago');
    modal.style.display = 'none';
}

// Función para mostrar la modal de confirmación de compra
function mostrarModalConfirmacionCompra() {
    const modal = document.getElementById('modal-confirmacion-compra');
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Función para procesar el pago
function procesarPago() {
    cerrarModalPago();
    mostrarModalConfirmacionCompra();
    vaciarCarrito();
}

// Función para agregar productos al carrito
function agregarAlCarrito(productoID) {
    const producto = productos.find(p => p.ID === productoID);
    const productoEnCarrito = carrito.find(p => p.ID === productoID);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
    mostrarModalConfirmacion();
    console.log(`Producto agregado al carrito con ID: ${productoID}`);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(productoID) {
    carrito = carrito.filter(producto => producto.ID !== productoID);
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(productoID, cantidad) {
    const producto = carrito.find(p => p.ID === productoID);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(productoID);
        } else {
            guardarCarrito();
            mostrarCarrito();
        }
    }
}

// Función para mostrar una modal
function mostrarModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
}

// Función para cerrar una modal
function cerrarModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
}

// Función para aplicar el descuento
function aplicarDescuento() {
    const codigoDescuento = document.getElementById('codigo-descuento').value;
    const totalPrecioElement = document.getElementById('total-precio');
    let total = parseFloat(totalPrecioElement.textContent);

    if (codigoDescuento === 'PARFUM10') {
        const descuento = total * 0.10;
        total -= descuento;
        totalPrecioElement.textContent = total.toFixed(2);
        mostrarModal('modal-descuento-aplicado');
    } else {
        mostrarModal('modal-descuento-invalido');
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById("carrito-list");
    const totalPrecio = document.getElementById("total-precio");
    let total = 0;

    if (contenedorCarrito) {
        contenedorCarrito.innerHTML = "";

        carrito.forEach(producto => {
            const trProducto = document.createElement("tr");

            trProducto.innerHTML = `
                <td><div class="d-flex align-items-center justify-content-center"><img src="${producto.imagen}" alt="${producto.alt}" class="img-thumbnail" style="width: 50px;"></div></td>
                <td><div class="d-flex align-items-center justify-content-center">${producto.nombre}</div></td>
                <td class="quantity-control">
                    <div class="d-flex align-items-center justify-content-center">
                        <button class="btn btn-sm btn-secondary btn-circle" onclick="actualizarCantidad(${producto.ID}, -1)">-</button>
                        <span class="mx-2">${producto.cantidad}</span>
                        <button class="btn btn-sm btn-secondary btn-circle" onclick="actualizarCantidad(${producto.ID}, 1)">+</button>
                    </div>
                </td>
                <td><div class="d-flex align-items-center justify-content-center">$${(producto.precio * producto.cantidad).toFixed(2)}</div></td>
                <td><div class="d-flex align-items-center justify-content-center"><button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.ID})">Eliminar</button></div></td>
            `;

            contenedorCarrito.appendChild(trProducto);
            total += producto.precio * producto.cantidad;
        });

        totalPrecio.textContent = total.toFixed(2);
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Función para pagar el carrito
function pagarCarrito() {
    mostrarModalPago();
}

// Función para cargar opciones del filtro
function cargarOpcionesFiltro() {
    const selectGenero = document.getElementById("filtroGenero");

    if (selectGenero) {
        // Obtener géneros únicos de los productos
        const generosUnicos = [...new Set(productos.map(producto => producto.genero))];

        // Agregar la opción "Todos"
        const optionTodos = document.createElement("option");
        optionTodos.value = "todos";
        optionTodos.textContent = "Todos";
        selectGenero.appendChild(optionTodos);

        // Agregar las opciones de género
        generosUnicos.forEach(genero => {
            const option = document.createElement("option");
            option.value = genero;
            option.textContent = genero.charAt(0).toUpperCase() + genero.slice(1); 
            selectGenero.appendChild(option);
        });
    }
}

// Función para filtrar productos por género
function filtrarPorGenero(genero) {
    const contenedorProductos = document.getElementById("product-list");
    contenedorProductos.innerHTML = "";

    productos
        .filter(producto => genero === "todos" || producto.genero === genero)
        .forEach(producto => {
            const divProducto = document.createElement("div");
            divProducto.classList.add("col-md-4", "mb-4");

            divProducto.innerHTML = `
                <div class="card">
                    <img src="${producto.imagen}" alt="${producto.alt}" class="card-img-top" style="cursor: pointer;" onclick="mostrarDetalle(${producto.ID})">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.ID})">Agregar al carrito</button>
                    </div>
                </div>
            `;
            contenedorProductos.appendChild(divProducto);
        });
}

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarCarrito();
    cargarOpcionesFiltro();
    mostrarProductos();
    mostrarCarrito();
    actualizarContadorCarrito();
});