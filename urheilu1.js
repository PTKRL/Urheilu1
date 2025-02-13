// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this._etunimet = etunimet;
    this._sukunimi = sukunimi;
    this._kutsumanimi = kutsumanimi;
    this._syntymavuosi = new Date(syntymavuosi, 0, 1);
  }

  get etunimet() {
    return this._etunimet;
  }

  set etunimet(uusiEtunimet) {
    this._etunimet = uusiEtunimet;
  }

  get sukunimi() {
    return this._sukunimi;
  }

  set sukunimi(uusiSukunimi) {
    this._sukunimi = uusiSukunimi;
  }

  get kutsumanimi() {
    return this._kutsumanimi;
  }

  set kutsumanimi(uusiKutsumanimi) {
    this._kutsumanimi = uusiKutsumanimi;
  }

  get syntymavuosi() {
    return this._syntymavuosi.getFullYear();
  }

  set syntymavuosi(uusiSyntymavuosi) {
    if (uusiSyntymavuosi instanceof Date) {
      this._syntymavuosi = uusiSyntymavuosi;
    } else if (typeof uusiSyntymavuosi === "number") {
      this._syntymavuosi = new Date(uusiSyntymavuosi, 0, 1);
    } else {
      throw new Error("Syntymävuoden on oltava joko numero tai Date-olio.");
    }
  }
}

// Aliluokka Urheilija
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuva,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._kuva = kuva;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  get kuva() {
    return this._kuva;
  }

  set kuva(uusiKuva) {
    this._kuva = uusiKuva;
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(uusiPaino) {
    this._omapaino = uusiPaino;
  }

  get laji() {
    return this._laji;
  }

  set laji(uusiLaji) {
    this._laji = uusiLaji;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(uusiSaavutukset) {
    this._saavutukset = uusiSaavutukset;
  }

  toString() {
    return `Urheilija: ${this.etunimet} ${this.sukunimi} 
Kutsumanimi: ${this.kutsumanimi}  
Kuva: ${this.kuva}
Syntymävuosi: ${this.syntymavuosi} 
Laji: ${this.laji} 
Paino: ${this.omapaino} kg 
Saavutukset: ${this.saavutukset}`;
  }
}

// Esimerkkejä urheilijoista
const urheilija1 = new Urheilija(
  "Matti Viljami",
  "Meikäläinen",
  "Matti",
  1995,
  "example.com/matti.jpg",
  75,
  "Tennis",
  "Pronssimitali"
);

const urheilija2 = new Urheilija(
  "Elli Annikki",
  "Esimerkki",
  "Elli",
  1985,
  "example.com/elli.jpg",
  90,
  "Kuulantyöntö",
  "Euroopan mestaruus"
);

console.log(urheilija1.toString());
console.log(urheilija2.toString());
