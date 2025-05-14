class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
  }


  abrirPorta() {
    console.log(`A porta do ${this.modelo} foi aberta.`);
  }
}


class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano);
    this.cilindradas = cilindradas;
  }


  empinar() {
    console.log(`A ${this.modelo} está empinando.`);
  }
}
