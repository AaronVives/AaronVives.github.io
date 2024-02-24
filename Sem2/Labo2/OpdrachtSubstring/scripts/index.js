const setup = () => {
    let button = document.getElementById("button_substring");
    button.addEventListener("click", extract_substring);
}

const extract_substring = () => {
    let input_string = document.getElementById("input_text").value;
    let output_string = document.getElementById("output_text");
    let start = document.getElementById("input_number_start").value;
    let einde = document.getElementById("input_number_einde").value;
    output_string.innerText = input_string.substring(start, einde);

    let woord = input_text.value;
    let beginIndex = parseInt(input_number_start.value, 10);
    let eindIndex = parseInt(input_number_einde.value, 10);

    output.innerHTML = woord.substring(beginIndex, eindIndex);
}

window.addEventListener("load", setup);