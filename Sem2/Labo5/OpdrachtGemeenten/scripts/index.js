const setup = () => {
    const gemeenten = [];

    const addGemeente = () => {
        let input = prompt("Voer een gemeente in (tiep 'stop' om te stoppen):");
        if (input !== null) {
            input = input.trim();
            if (input !== "") {
                if (input.toLowerCase() !== "stop") {
                    gemeenten.push(input);
                    gemeenten.sort();
                    displayGemeenten();
                    addGemeente();
                } else {
                    alert("Invoer gestopt.");
                }
            } else {
                alert("Voer een juiste gemeente in.");
                addGemeente();
            }
        }
    };

    const displayGemeenten = () => {
        const keuzelijst = document.getElementById("gemeentenKeuzelijst");
        keuzelijst.innerHTML = "";
        gemeenten.forEach(gemeente => {
            const option = document.createElement("option");
            option.text = gemeente;
            keuzelijst.add(option);
        });
    };

    addGemeente();
};

window.addEventListener("load", setup);
