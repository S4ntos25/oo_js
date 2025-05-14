// Instâncias
var moto = new Moto('Honda', 'CG', '2021', '160');
var carro = new Carro('Fiat', 'Uno', '2015', '1000', 4);
var carro2 = new Carro('Volkswagen', 'Gol', '2018', '1000', 4);

// Testando as instâncias
console.log(moto);
moto.ligar();
moto.empinar();

console.log(carro);
carro.ligar();
carro.abrirPorta();

console.log(carro2);
carro2.ligar();
carro2.desligar();
