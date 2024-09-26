let leeftijd = parseInt(prompt("Geef uw leeftijd:"));

if(leeftijd >= 18){
    window.alert(`Je bent ${leeftijd} jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.`)
    let bulletin = parseInt(prompt("Met wat voor bulletin wil je spelen? Kies uit 2, 4, 6, 8, 10 of 12 vakjes."));
        if(bulletin == 2){
            window.alert("De prijs voor een bulletin van 2 vakjes is 4 euro.");
        }else if(bulletin == 4){
            window.alert("De prijs voor een bulletin van 4 vakjes is 8 euro.");
        }else if(bulletin == 6){
            window.alert("De prijs voor een bulletin van 6 vakjes is 12 euro.");
        }else if(bulletin == 8){
            window.alert("De prijs voor een bulletin van 8 vakjes is 16 euro.");
        }else if(bulletin == 10){
            window.alert("De prijs voor een bulletin van 10 vakjes is 18 euro.");
        }else if(bulletin == 12) {
            window.alert("De prijs voor een bulletin van 12 vakjes is 20 euro.");
        }
}else{
    window.alert("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.")
}