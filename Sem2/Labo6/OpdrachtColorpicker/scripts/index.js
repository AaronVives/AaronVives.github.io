const initialize = () => {
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const saveButton = document.querySelector("#savebtn");

    update();
    redSlider.addEventListener("change", update);
    greenSlider.addEventListener("change", update);
    blueSlider.addEventListener("change", update);
    saveButton.addEventListener("click", save);
}

const update = () => {
    let rgb = getRGBValue();
    const swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = rgb;
}

const getRGBValue = () => {
    const values = document.getElementsByClassName("value");
    const sliders = document.getElementsByClassName("sliders");
    let rgb = "rgb(";
    for(let i = 0; i < sliders.length; i++){
        values[i].innerHTML = sliders[i].value;
        rgb += sliders[i].value;
        if(i === (sliders.length - 1)){
            rgb += ")";
        }else{
            rgb += ", ";
        }
    }
    return rgb;
}

const save = () => {
    const rgb = getRGBValue();
    let div = document.createElement('div');
    div.setAttribute("data-red", rgb.substring(4, rgb.indexOf(",")));
    div.setAttribute("data-green", rgb.substring(rgb.indexOf(",") + 1, rgb.indexOf(",", rgb.indexOf(",") + 1)));
    div.setAttribute("data-blue", rgb.substring(rgb.indexOf(",", rgb.indexOf(",") + 1) + 1, rgb.indexOf(")")));
    div.style.backgroundColor = rgb;
    div.classList.add("swatch");
    div.classList.add("saved");
    div.addEventListener("click", restore);

    let del = document.createElement('input');
    del.setAttribute("type", "button");
    del.setAttribute("value", "x");
    del.classList.add("delete");
    del.addEventListener("click", remove);

    const body = document.querySelector("body");
    body.appendChild(div);
    div.appendChild(del);
}

const restore = (event) => {
    let background_color = event.currentTarget.style.backgroundColor;
    let background_colors = background_color.match(/\d+/g);
    let colors = ["r", "g", "b"];

    for (let i = 0; i < background_colors.length; ++i) {
        document.getElementById(`color_${colors[i]}`).value = background_colors[i];
    }

    update();

    event.stopPropagation();
}

const remove = (event) => {
    event.currentTarget.parentElement.remove()

    event.stopPropagation();
}

window.addEventListener("load", initialize);