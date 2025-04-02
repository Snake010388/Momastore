document.addEventListener("DOMContentLoaded", () => { cargarCarrito(); document.getElementById("form-compra").addEventListener("submit", finalizarCompra); });

function cargarCarrito() { const listaCarrito = document.getElementById("lista-carrito"); const totalCarrito = document.getElementById("total-carrito"); const carrito = JSON.parse(localStorage.getItem("carrito")) || []; let total = parseFloat(localStorage.getItem("total")) || 0;

listaCarrito.innerHTML = "";
carrito.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
});
totalCarrito.textContent = `$${total}`;

}

function finalizarCompra(event) { event.preventDefault();

const nombre = document.getElementById("nombre").value;
const direccion = document.getElementById("direccion").value;
const metodoPago = document.getElementById("metodo-pago").value;

if (!nombre || !direccion || !metodoPago) {
    alert("Por favor, completa todos los campos.");
    return;
}

alert(`Gracias por tu compra, ${nombre}! Tu pedido será enviado a ${direccion}.`);

localStorage.removeItem("carrito");
localStorage.removeItem("total");
window.location.href = "index.html";

}

