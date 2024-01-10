function genererJulekort() {
    let generator = document.getElementById ("julekort-generator");
    generator.style.display="none"

    let card = document.getElementById ("julekort");
    card.style.display="block"

    var julehilsen = document.getElementById("julehilsen-input").value;

    var from = document.getElementById("from-input").value

    var julekortDiv = document.getElementById("julekort");
    julekortDiv.innerHTML = `
        <h2 id='GJ'>God Jul!</h2>
        <p id='helsing'>${julehilsen}</p>
        <h3 id='from'>Helsing ${from}</h3>
    `;
}
