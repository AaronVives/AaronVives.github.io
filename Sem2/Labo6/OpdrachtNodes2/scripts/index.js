const setup = () => {
    document.querySelectorAll('li').forEach(listItem => {
        listItem.classList.add('listItem');
    });

    const img = new Image();
    img.src = "images/picture.jpg";
    document.body.appendChild(img);
}

window.addEventListener("load", setup);
