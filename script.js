function calculartodo() {


    let cuentatotal = parseFloat(document.getElementById("cuenta").value);
    let propiaO = parseFloat(document.getElementById("propina").value);
    let cuenta = document.getElementById("totalc");
    let propina = document.getElementById("prop");
    let totalp = document.getElementById("totalp");


    let calculoprop = cuentatotal * propiaO / 100;
    let total = cuentatotal + calculoprop;


    cuenta.textContent = cuentatotal;
    propina.textContent = calculoprop;
    totalp.textContent = total;


}