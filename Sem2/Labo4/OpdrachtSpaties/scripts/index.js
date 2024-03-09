const initialiseren = () => {
    const knop = document.getElementById("knop");
    knop.addEventListener("click", maakMetSpaties);
}
const maakMetSpaties = () =>{
    let tekstInvoer = document.getElementById("tekstInvoer").value;
    let uitvoerWaarde = "";
    for(let i = 0; i <tekstInvoer.length; i++){
        if(tekstInvoer.charAt(i) !== " "){
            uitvoerWaarde += tekstInvoer.charAt(i) + " ";
        }
    }
    console.log(uitvoerWaarde);
    let uitvoer = document.getElementById("uitvoer");
    uitvoer.innerHTML = uitvoerWaarde;
}
window.addEventListener("load", initialiseren);
