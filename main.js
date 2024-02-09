"use strict";

const Urheilija = require("./Classes/Urheilija.js");

const urheilija1 = new Urheilija(["Matti", "Esko", "Juhani"], "Meikäläinen", "Matti", new Date(1980, 0).getFullYear(), "https://www.image1.com", 80.1, "Jalkapallo", ["MM-kulta", "SM-kulta"]);

const urheilija2 = new Urheilija(["Maija", "Milla", "Mervi"], "Meikäläinen", "Maija", new Date(1985, 2).getFullYear(), "https://www.image2.com", 70.3, "Sulkapallo", ["MM-hopea", "EM-pronssi"]);

const urheilija3 = new Urheilija(["Mikko", "Matias"], "Mikkonen", "Mikko", new Date(1990, 4).getFullYear(), "https://www.image3.com", 90.7, "Jalkapallo", ["MM-kulta", "EM-hopea"]);

const urheilija4 = new Urheilija(["Kalle", "Kalevi"], "Korhonen", "Kalle", new Date(1995, 6).getFullYear(), "https://www.image4.com", 60.5, "Jääkiekko", ["MM-kulta", "SM-pronssi"]);

const urheilijat = [urheilija1, urheilija2, urheilija3, urheilija4];

for (let i = 0; i < urheilijat.length; i++) {
    console.log(`Etunimet: ${urheilijat[i].Etunimet.join(" ")}`);
    console.log(`Sukunimi: ${urheilijat[i].Sukunimi}`);
    console.log(`Kutsumanimi: ${urheilijat[i].Kutsumanimi}`);
    console.log(`Syntymävuosi: ${urheilijat[i].Syntymavuosi}`);
    console.log(`Linkki kuvaan: ${urheilijat[i].LinkkiKuvaan}`);
    console.log(`Omapaino: ${urheilijat[i].Omapaino} kg`);
    console.log(`Laji: ${urheilijat[i].Laji}`);
    console.log(`Saavutukset: ${urheilijat[i].Saavutukset.join(", ")}`);
    console.log("\n");
}