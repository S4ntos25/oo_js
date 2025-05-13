function Arvore(nomePopular, origem, frutifera) {
    this.nomePopular = nomePopular;
    this.origem = origem;
    this.frutifera = frutifera;
}

function AlturaMedia(nomePopular, origem, frutifera, altura) {
    Arvore.call(this, nomePopular, origem, frutifera);
    this.altura = altura;
}

function FichaCompleta(nomePopular, origem, frutifera, altura, dap) {
    AlturaMedia.call(this, nomePopular, origem, frutifera, altura)
    this.dap = dap;
}

const arvore1 = new FichaCompleta("Aroeira pimenteira", "Nativa", "Sim", "5 - 10 metros", "Dap 25cm");
const arvore2 = new FichaCompleta("Pitangueira", "Nativa", "Sim", "2 - 4 metros", "Dap 10cm" );
const arvore3 = new FichaCompleta("Jabuticabeira", "Nativa", "Sim", "2 - 3 metros", "Dap 10cm");
const arvore4 = new FichaCompleta("Ipê amarelo", "Nativa", "Não", "2 - 10 metros", "Dap 40cm");


console.log(arvore1);
console.log(arvore2);
console.log(arvore3);
console.log(arvore4);
