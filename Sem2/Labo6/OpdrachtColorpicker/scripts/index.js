const setup = () => {
    let sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        slider.addEventListener("input", update);
    });

    update();
}

const update = () => {
    let red = document.getElementById("color-r").value;
    let green = document.getElementById("color-g").value;
    let blue = document.getElementById("color-b").value;

    document.getElementById("label-r").textContent = red;
    document.getElementById("label-g").textContent = green;
    document.getElementById("label-b").textContent = blue;

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    document.getElementById("Color").style.backgroundColor = rgbColor;
}

window.addEventListener("load", setup);
