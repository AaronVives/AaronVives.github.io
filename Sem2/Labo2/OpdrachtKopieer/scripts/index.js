const setup = () => {
    let btnCopy = document.getElementById("btnCopy");
    btnCopy.addEventListener("click", Copy);
}

const Copy = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerText = txtInput.value;
}

window.addEventListener("load", setup);