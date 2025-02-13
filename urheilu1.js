// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this._etunimet = etunimet;
    this._sukunimi = sukunimi;
    this._kutsumanimi = kutsumanimi;
    this._syntymavuosi = syntymavuosi;
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
    return this._syntymavuosi;
  }

  set syntymavuosi(uusiSyntymavuosi) {
    this._syntymavuosi = uusiSyntymavuosi;
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

console.log(urheilija1);
console.log(urheilija2);
