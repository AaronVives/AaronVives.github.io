const Setup = () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", searchForAn);
}

const searchForAn = () =>{
    const text = "De man van An geeft geen hand aan ambetante verwanten.".toLowerCase();
    console.log(text);
    let count = -1;
    for(let last = 0; last !== -1; count++){
        last = text.indexOf("an", last + 1);
    }
    console.log(count + " keer an in tekst.");
}
window.addEventListener("load", Setup);