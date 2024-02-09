class Henkilo{ // Henkilo class
    #etunimet; // Private fields
    #sukunimi;
    #kutsumanimi;
    #syntymavuosi;

    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi){  // Constructor of the Henkilo class
        this.#etunimet = etunimet;
        this.#sukunimi = sukunimi;
        this.#kutsumanimi = kutsumanimi;
        this.#syntymavuosi = syntymavuosi;
    }

    // Getters and setters for the private fields of the class
    get Etunimet(){
        return this.#etunimet;
    }

    get Sukunimi(){
        return this.#sukunimi;
    }

    get Kutsumanimi(){
        return this.#kutsumanimi;
    }

    get Syntymavuosi(){
        return this.#syntymavuosi;
    }

    set Etunimet(etunimet){
        this.#etunimet = etunimet;
    }

    set Sukunimi(sukunimi){
        this.#sukunimi = sukunimi;
    }

    set Kutsumanimi(kutsumanimi){
        this.#kutsumanimi = kutsumanimi;
    }

    set Syntymavuosi(syntymavuosi){
        this.#syntymavuosi = syntymavuosi;
    }
}

module.exports = Henkilo; // Export the class so that it can be used in other files