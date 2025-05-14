class Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cilindradas = cilindradas;
  }

  ligar() {
    console.log(`O ${this.modelo} está ligado.`);
  }

  desligar() {
    console.log(`O ${this.modelo} está desligado.`);
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano, cilindradas);
  }

  empinar() {
    console.log(`A ${this.modelo} está empinando.`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, cilindradas, portas) {
    super(marca, modelo, ano, cilindradas);
    this.portas = portas;
  }

  abrirPorta() {
    console.log(`A porta do ${this.modelo} foi aberta.`);
  }
}

