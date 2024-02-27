const setup = () => {
    let sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        slider.addEventListener("input", update);
    });

    update();
}

const update = () => {
    let red = document.getElementById("redSlider").value;
    let green = document.getElementById("greenSlider").value;
    let blue = document.getElementById("blueSlider").value;

    document.getElementById("redValue").textContent = red;
    document.getElementById("greenValue").textContent = green;
    document.getElementById("blueValue").textContent = blue;

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    document.querySelector(".colorViewer").style.backgroundColor = rgbColor;
}

window.addEventListener("load", setup);
