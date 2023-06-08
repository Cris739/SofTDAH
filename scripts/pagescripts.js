function myFunction() {
    //   setTimeout(myFunction, 10000);
    let random = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    console.log(random);
    let mensajes = ["poco probable", "probable", "muy probable"];
    let mensaje;
    if (random <= 75) {
        mensaje = mensajes[0];
    } else if (random <= 90) {
        mensaje = mensajes[1];
    } else {
        mensaje = mensajes[2];
    }
    document.getElementById("demo").innerHTML = mensaje;
}


let select = document.getElementById('mydropdown');
let options = ["2 Thiago Zezé Álvarez Castro",
            "4 Giovanny Enzo Arteaga Vega",
            "5 Adriano Cayo Ciprián",
            "6 Rosangela Daniela Corbetto Maldonado",
            "7 Bárbara Alberlys Escalona -",
            "8 Iker Kaleb Flores Aponte",
            "11 Carlos Perez Perez"];
for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}