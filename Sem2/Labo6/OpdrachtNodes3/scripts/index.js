const setup = () => {
    document.getElementById("submit").addEventListener("click", output);
}

const output = () => {
    console.clear();

    console.log(document.getElementById("is_roker").checked ? "is een roker" : "is geen roker");

    const taalElement = document.querySelector("input[name='taal']:checked");
    console.log(`moedertaal is ${taalElement ? taalElement.value : "niet geselecteerd"}`);

    console.log(`favoriete buurland is ${document.getElementById("favorite_country").value}`);

    const bestellingOptions = document.getElementById("order").selectedOptions;
    const bestellingArray = Array.from(bestellingOptions, option => option.value);
    console.log(bestellingArray.length > 0 ? `bestelling bestaat uit ${bestellingArray.join(" ")}` : "geen bestelling geselecteerd");

    console.log("-".repeat(40));
}

window.addEventListener("load", setup);
