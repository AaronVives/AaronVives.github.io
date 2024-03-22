const appendParagraph = () => {
    const divElement = document.getElementById("myDIV");
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = "some text";
    divElement.appendChild(paragraphElement);
}
const setup = () => {
    const inputButton = document.getElementById("input_button");
    inputButton.addEventListener("click", appendParagraph);
}
window.addEventListener("load", setup);
