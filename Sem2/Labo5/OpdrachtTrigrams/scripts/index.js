const setup = () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", trigram);
}
const trigram = () => {
    const input = document.getElementById("input").value.replaceAll(" ", "");
    const outputField = document.getElementById("output");
    let outputText = "";

    for (let i = 0; i < input.length - 2; i++) {
        const trigram = input.substring(i, i + 3);
        outputText += trigram + "<br>";
    }
    outputField.innerHTML = outputText;
}

window.addEventListener("load", setup);
