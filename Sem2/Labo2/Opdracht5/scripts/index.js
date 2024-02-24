const setup = () => {
    let buttonchange = document.getElementById("wijzig");
    buttonchange.addEventListener("click", change)
}
const change = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);