const Henkilo = require('./Henkilo.js'); // Import the Henkilo class from the Henkilo.js file

class Urheilija extends Henkilo{ // Urheilija class inherits from Henkilo class
    #linkkiKuvaan; // Private fields
    #omapaino;
    #laji;
    #saavutukset;

    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkkiKuvaan, omapaino, laji, saavutukset){ // Constructor of the Urheilija class
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi); // Call the constructor of the parent class
        this.#linkkiKuvaan = linkkiKuvaan;
        this.#omapaino = omapaino;
        this.#laji = laji;
        this.#saavutukset = saavutukset;
    };

    // Getters and setters for the private fields of the class
    get LinkkiKuvaan(){
        return this.#linkkiKuvaan;
    };

    get Omapaino(){
        return this.#omapaino;
    };

    get Laji(){
        return this.#laji;
    };

    get Saavutukset(){
        return this.#saavutukset;
    };

    set LinkkiKuvaan(linkkiKuvaan){
        this.#linkkiKuvaan = linkkiKuvaan;
    };

    set Omapaino(omapaino){
        this.#omapaino = omapaino;
    };

    set Laji(laji){
        this.#laji = laji;
    };

    set Saavutukset(saavutukset){
        this.#saavutukset = saavutukset;
    };
}

module.exports = Urheilija; // Export the class so that it can be used in other files