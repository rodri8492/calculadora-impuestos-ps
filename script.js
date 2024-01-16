// Código para calcular el precio de la compra final

const spanDolarTarjeta = document.getElementById("span-dolar-tarjeta");
const valorDeLaCompra = document.getElementById("valor-compra");

// spans donde van los detalles
const spanValorTotal = document.getElementById("span-valor-total");
const spanSinImpuestos = document.getElementById("span-sin-impuestos");
const spanImpuestoPais = document.getElementById("span-impuesto-pais");
const spanImpuestoGanancias = document.getElementById("span-impuesto-ganancias");
const spanComprasTarjetas = document.getElementById("span-compras-tarjetas");

// valor del dolar tarjeta
let valorDolarTarjeta = 1336.80; //ult vez actualizado 12/1/24 22:00
spanDolarTarjeta.innerHTML = `$${valorDolarTarjeta}`;

// valores de los impuestos
let impuestoPais = 0.30;
let impuestoGanancias = 0.45;
let impuestoComprasConTarjeta = 0.25;

// funcion para calcular el valor total de la compra
const calcularValorTotal = ()=>{
    // aplicandole la cotizacion del dolar tarjeta al valor de la compra
    let compraDolarTarjeta = valorDeLaCompra.value * valorDolarTarjeta;

    // aplicandole los impuestos correspondientes al valor de la compra cotizada
    let compraImpuestoPais = compraDolarTarjeta * impuestoPais;
    let compraImpuestoGanancias = compraDolarTarjeta * impuestoGanancias;
    let compraImpuestoComprasConTarjeta = compraDolarTarjeta * impuestoComprasConTarjeta;

    // calculando el valor total
    let valorTotal = compraDolarTarjeta + compraImpuestoPais + compraImpuestoGanancias + compraImpuestoComprasConTarjeta;

    // formateando los numeros para que le ponga punto y sean fáciles de leer
    let FORMATEADOvalorTotal = valorTotal.toLocaleString("es-ES");
    let FORMATEADOcompraDolarTarjeta = compraDolarTarjeta.toLocaleString("es-ES");
    let FORMATEADOcompraImpuestoPais = compraImpuestoPais.toLocaleString("es-ES");
    let FORMATEADOcompraImpuestoGanancias = compraImpuestoGanancias.toLocaleString("es-ES");
    let FORMATEADOcompraImpuestoComprasConTarjeta = compraImpuestoComprasConTarjeta.toLocaleString("es-ES");
    
    // mostrando los detalles en los span correspondientes
    spanValorTotal.innerHTML = `$${FORMATEADOvalorTotal}`;
    spanSinImpuestos.innerHTML = `$${FORMATEADOcompraDolarTarjeta}`;
    spanImpuestoPais.innerHTML = `$${FORMATEADOcompraImpuestoPais}`;
    spanImpuestoGanancias.innerHTML = `$${FORMATEADOcompraImpuestoGanancias}`;
    spanComprasTarjetas.innerHTML = `$${FORMATEADOcompraImpuestoComprasConTarjeta}`;
}

//Código para activar/desactivar el tema oscuro

const body = document.getElementById("body");
const bubble = document.getElementById("bubble");
const checkboxTema = document.getElementById("checkbox-tema");

checkboxTema.addEventListener("change", ()=>{

    if (checkboxTema.checked){
        body.classList.add("body-oscuro");
        bubble.style.transform = "translateX(30px)";
        bubble.style.transition = "all .7s";
        body.classList.remove("body-claro");
    } else{
        body.classList.add("body-claro");
        bubble.style.transform = "translateX(0px)";
        body.classList.remove("body-oscuro");
    }
});