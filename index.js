const precio1 = 5590;
const precio2 = 4399;
const precio3 = 4150;
const precio4 = 5790;
const precio5 = 7620;
const precio6 = 4070;
const precio7 = 5129;
const precio8 = 6460;
const precio9 = 7209;
const precio10 = 6080;
const precio11 = 5210;
const precio12 = 7500;

let precioTotal = 0;

let precioElemento = document.getElementById("precio");

function boton1() {
    precioTotal += precio1;
    mostrarPrecio();
}

function boton2() {
    precioTotal += precio2;
    mostrarPrecio();
}

function boton3() {
    precioTotal += precio3;
    mostrarPrecio();
}

function boton4() {
    precioTotal += precio4;
    mostrarPrecio();
}

function boton5() {
    precioTotal += precio5;
    mostrarPrecio();
}

function boton6() {
    precioTotal += precio6;
    mostrarPrecio();
}

function boton7() {
    precioTotal += precio7;
    mostrarPrecio();
}

function boton8() {
    precioTotal += precio8;
    mostrarPrecio();
}

function boton9() {
    precioTotal += precio9;
    mostrarPrecio();
}

function boton10() {
    precioTotal += precio10;
    mostrarPrecio();
}

function boton11() {
    precioTotal += precio11;
    mostrarPrecio();
}

function boton12() {
    precioTotal += precio12;
    mostrarPrecio();
}

function mostrarPrecio() {
    precioElemento.textContent = "Precio total: $" + precioTotal;
}

var listaElemento = document.getElementById("lista");

function agregarPedido() {
    let confirmar = false;
    while (!confirmar) {
        let pedidos = prompt("Por favor confirme su pedido:");
        if (pedidos != null && pedidos != "") {
            let pedidosArray = pedidos.split(",");
            for (let i = 0; i < pedidosArray.length; i++) {
                let pedido = pedidosArray[i].trim();
                if (pedido != "") {
                    let li = document.createElement("li");
                    li.textContent = pedido;
                    listaElemento.appendChild(li);
                }
            }
        } else {
            alert("Por favor confirme su pedido.");
            continue;
        }
        confirmar = confirm("¿Está seguro de su compra?");
    }
}