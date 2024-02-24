const setup = () => {
    let btnChange = document.getElementById("btnChange");
    btnChange.addEventListener("click", Change);
}

const Change = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
}

window.addEventListener("load", setup);