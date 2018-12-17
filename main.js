class Tezga {

  constructor() {
    this.novac = 0
    this.proizvodi = [
      {
        naziv: "krompir",
        cena: 50,
        kolicina: 500
      },
      {
        naziv: "kajmak",
        cena: 800,
        kolicina: 20
      }
    ]
  }

  kupovina(kupac, naziv, kolicina) {
    let proizvod = this.proizvodi.find(p => p.naziv == naziv)
    if (proizvod && proizvod.kolicina >= kolicina) {
      proizvod.kolicina -= kolicina
      this.novac += (kolicina * proizvod.cena)
      kupac.novac -= (kolicina * proizvod.cena)
      kupac.korpa.push({
        naziv: naziv,
        cena: proizvod.cena,
        kolicina: kolicina
      })
    }
  }
}

class Kupac {
  constructor() {
    this.novac = 10000
    this.korpa = []
  }
}
