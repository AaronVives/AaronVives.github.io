const setup = () => {
    let familie = ["jan", "piet", "joris", "korneel", "jason"];
    console.log(familie.length);

    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);
    const voegNaamToe = (array) => {
        array.push(prompt("Nieuw lid van de familie?:"));
        console.log(familie)
    }

    voegNaamToe(familie);
    console.log(familie.join());
}

window.addEventListener("load", setup);