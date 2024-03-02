const setup = () => {
    const herberekenButton = document.getElementById("herbereken");
    herberekenButton.addEventListener("click", update);
}

const update = () => {
    const priceElements = document.querySelectorAll(".product-prijs");
    const amountElements = document.querySelectorAll(".product-aantal");
    const btwElements = document.querySelectorAll(".product-btw");
    const subtotalElements = document.querySelectorAll(".product-subtotaal");
    const totalElement = document.getElementById("totaal");

    let total = 0;

    for (let i = 0; i < priceElements.length; i++) {
        const price = parseFloat(priceElements[i].textContent);
        const amount = parseInt(amountElements[i].value);
        const btw = parseFloat(btwElements[i].textContent);

        const withoutBtw = price * amount;
        const withBtw = withoutBtw + (withoutBtw * (btw / 100));

        subtotalElements[i].textContent = withBtw.toFixed(2) + " Eur";
        total += withBtw;
    }

    totalElement.textContent = total.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);
