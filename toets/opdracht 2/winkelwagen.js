class Artikel
{
  constructor(item, aantal, maat){
      let VoorRaad = this;
      VoorRaad.artikel = item;
      VoorRaad.voorraad = parseFloat(aantal);
      VoorRaad.maat = maat;
  }

  showVoorraad(){
      console.log(` kleur = ${this.artikel} , maat = ${this.maat}`);
  }

  verhoogVoorraadMet(optellenMulti){
      let verhogerMulti = this;
          verhogerMulti.optellenMulti = parseFloat(optellenMulti);
          console.log((this.voorraad += verhogerMulti.optellenMulti));
      }
}

let ArtikelVariabel = new Artikel("T-shirt classic rood", 1, "Small");
let ArtikelVariabel2 = new Artikel("T-shirt classic wit", 2, "Medium");
let ArtikelVariabel3 = new Artikel("T-shirt classic blauw", 3, ";Large");

ArtikelVariabel.voorraad;

ArtikelVariabel.showVoorraad();
