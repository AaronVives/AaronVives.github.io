const setup = () => {
    window.alert('Dit is een mededeling')

    console.log(window.confirm('Weet u het zeker?, kies ok'));
    console.log(window.confirm('Weet u het zeker?, kies cancel'));

    console.log(window.prompt('Geef een input', 'iets'));
    console.log(window.prompt('Geef geen input', 'niets'));
}

window.addEventListener("load", setup);