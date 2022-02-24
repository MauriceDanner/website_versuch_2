let bewertung_1;
let bewertung_2;
let bewertung_3;
let bewertung_4;
let bewertung_5;
let ergebnis_bewertung;
let summe = 0;
let anzahl_bewertungen = 0;

function bewertungen_auslesen() {
    bewertung_1 = parseInt(document.getElementById("bewertung_bild_1").value);
    bewertung_2 = parseInt(document.getElementById("bewertung_bild_2").value);
    bewertung_3 = parseInt(document.getElementById("bewertung_bild_3").value);
    bewertung_4 = parseInt(document.getElementById("bewertung_bild_4").value);
    bewertung_5 = parseInt(document.getElementById("bewertung_bild_5").value);

    console.log(bewertung_1 + ";" + bewertung_2 + ";" + bewertung_3 + ";" + bewertung_4 + ";" + bewertung_5 + ";")

    punkte_pruefen(bewertung_1)
    punkte_pruefen(bewertung_2)
    punkte_pruefen(bewertung_3)
    punkte_pruefen(bewertung_4)
    punkte_pruefen(bewertung_5)

    ergebnis_bewertung = summe / anzahl_bewertungen

    document.getElementById("ausgabe").innerHTML = ergebnis_bewertung

}
function punkte_pruefen(punkte) {
    if(isNaN(punkte)) {
        console.log(punkte + "Bitte Zahlen eingeben!")
    }
    else{
        summe= summe + punkte;
        anzahl_bewertungen = anzahl_bewertungen + 1;
    }
    if(punkte >10 || punkte <0){
        console.log(punkte + "Bitte Punkte von 0-10 eintragen!")
    }
    else {
        summe= summe + punkte;
        anzahl_bewertungen = anzahl_bewertungen + 1;
    }
}

