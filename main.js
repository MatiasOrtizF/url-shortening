const acortador = document.getElementById("acortador");
const btn = document.getElementById("btn");
let url = "";
const noAcortada = document.getElementById("noAcortada");
const acortada = document.getElementById("acortada");
const copy = document.getElementById("copy");

mostrarUrlAcortada();

if(!noAcortada.value==undefined && acortada.value==undefined) {
    noAcortada.parentNode.classList.remove("hidden");
    acortada.parentNode.classList.remove("hidden");
} 

copy.addEventListener("click" , e=> {
    navigator.clipboard.writeText(acortada.innerHTML);
    copy.innerHTML="copied!";
    copy.classList.add("copied");
})

btn.addEventListener("click", e=> {
    url = acortador.value;
    acortadorUrl();
    localStorage.urlNoAcortada = url;
    noAcortada.parentNode.classList.remove("hidden");
    acortada.parentNode.classList.remove("hidden");
})

function acortadorUrl() {
    fetch('https://api.shrtco.de/v2/shorten?url='+url)
    .then(response=>response.json())
    .then(data=> {
        localStorage.cualquiera = data.result.short_link;
        mostrarUrlAcortada();
    })
} 

function mostrarUrlAcortada() {
    acortada.innerHTML= localStorage.cualquiera;
    noAcortada.innerHTML = localStorage.urlNoAcortada;
}
