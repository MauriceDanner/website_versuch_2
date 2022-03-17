let bewertung_1;                                                                                                        //Definition Variablen
let bewertung_2;
let bewertung_3;
let bewertung_4;
let bewertung_5;
let ergebnis_bewertung;
let summe = 0;
let anzahl_bewertungen = 0;

function bewertungen_auslesen() {

    summe = 0
    anzahl_bewertungen = 0

    bewertung_1 = parseInt(document.getElementById("bewertung_bild_1").value);                                  //Auslesen des Textfeldes (ID) und Umwandlung in Zahl
    bewertung_2 = parseInt(document.getElementById("bewertung_bild_2").value);
    bewertung_3 = parseInt(document.getElementById("bewertung_bild_3").value);
    bewertung_4 = parseInt(document.getElementById("bewertung_bild_4").value);
    bewertung_5 = parseInt(document.getElementById("bewertung_bild_5").value);

    console.log(bewertung_1 + ";" + bewertung_2 + ";" + bewertung_3 + ";" + bewertung_4 + ";" + bewertung_5 + ";")      //Ausgabe der Punktwerte in der Konsole

    punkte_pruefen(bewertung_1)                                                                                         //Überprüfung ob wirklich Nummer eingegeben wurde
    punkte_pruefen(bewertung_2)
    punkte_pruefen(bewertung_3)
    punkte_pruefen(bewertung_4)
    punkte_pruefen(bewertung_5)

    ergebnis_bewertung = summe / anzahl_bewertungen                                                                     //Berechnungsformel

    document.getElementById("ausgabe").innerHTML = ergebnis_bewertung                                          //Ausgabe der Berechnung im HTML Dokument

    if (bewertung_1 <0 || bewertung_1 >15){                                                                             // Überprüfung der eingetragenen Werte
        document.getElementById("ausgabe").innerHTML = "Bitte in jedem Feld eine Bewertung zwischen 0 und 10 eingeben!";
        console.log("Bitte geben sie einen Wert zwischen 0 und 10 ein")
    }
    if (bewertung_2 <0 || bewertung_2 >15) {
        document.getElementById("ausgabe").innerHTML = "Bitte in jedem Feld eine Bewertung zwischen 0 und 10 eingeben!";
        console.log("Bitte geben sie einen Wert zwischen 0 und 10 ein")
    }
    if (bewertung_3 <0 || bewertung_3 >15) {
        document.getElementById("ausgabe").innerHTML = "Bitte in jedem Feld eine Bewertung zwischen 0 und 10 eingeben!";
        console.log("Bitte geben sie einen Wert zwischen 0 und 10 ein")
    }
    if (bewertung_4 <0 || bewertung_4 >15) {
        document.getElementById("ausgabe").innerHTML = "Bitte in jedem Feld eine Bewertung zwischen 0 und 10 eingeben!";
        console.log("Bitte geben sie einen Wert zwischen 0 und 10 ein")
    }
    if (bewertung_5 <0 || bewertung_5 >15) {
        document.getElementById("ausgabe").innerHTML = "Bitte in jedem Feld eine Bewertung zwischen 0 und 10 eingeben!";
        console.log("Bitte geben sie einen Wert zwischen 0 und 10 ein")
    }
    if(ergebnis_bewertung <=4 || ergebnis_bewertung <10)                                                                //Einfärben des Berechnungswertes in ausgewählten Bereichen
    {
        document.getElementById("ausgabe").style.color = "crimson"
    }
    if(ergebnis_bewertung >4 && ergebnis_bewertung<7)
    {
        document.getElementById("ausgabe").style.color = "darkgoldenrod"
    }
    if(ergebnis_bewertung >=7)
    {
        document.getElementById("ausgabe").style.color = "Green"
    }

}
function punkte_pruefen(punkte) {                                                                                       //Überprüfung und mögliche Fehlerausgabe in der Konsole
    if(isNaN(punkte)) {
        console.log(punkte + "Bitte Zahlen eingeben!")
    }
    else{
        summe= summe + punkte;
        anzahl_bewertungen = anzahl_bewertungen + 1;
    }


}

