const setup = () => {
    const clickBtn = document.getElementById("clickBtn");
    clickBtn.addEventListener("click", addSpaces);
}

const addSpaces = () =>{
    let inputField = document.getElementById("inputField").value;
    let formattedText = "";
    for(let i = 0; i < inputField.length; i++){
        if(inputField.charAt(i) !== " "){
            formattedText += inputField.charAt(i) + " ";
        }
    }
    console.log(formattedText);
    let output = document.getElementById("result");
    output.innerHTML = formattedText;
}

window.addEventListener("load", setup);
