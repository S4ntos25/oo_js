class Arvore {
    constructor(nomePopular, nomeCientifico, origem, frutifera) {
        this.nomePopular = nomePopular;
        this.nomeCientifico = nomeCientifico;
        this.orgiem = origem;
        this.frutifera = frutifera;
    }
}

class AlturaMedia extends Arvore {
    constructor(nomePopular, nomeCientifico, origem, frutifera, altura) {
        super(nomePopular, nomeCientifico, origem, frutifera);
        this.altura = altura;
    }
}

class FichaCompleta extends AlturaMedia {
    constructor(nomePopular, nomeCientifico, origem, frutifera, altura, dap) {
        super(nomePopular,nomeCientifico, origem, frutifera, altura);
        this.dap = dap
    }

    exibirFicha() {
        return `
    Ficha Técnica:
    Nome Popular: ${this.nomePopular}
    Nome Científico: ${this.nomeCientifico}
    Origem: ${this.origem}
    Frutífera: ${this.frutifera}
    Altura: ${this.altura}
    DAP: ${this.dap}
        `;
    }
}

const arvore1 = new FichaCompleta("Aroeira pimenteira", "Schinus terebinthifolius", "Nativa", "Sim", "5 - 10 metros", "Dap 25cm");
const arvore2 = new FichaCompleta("Pitangueira", "Eugenia uniflora", "Nativa", "Sim", "2 - 4 metros", "Dap 10cm" );
const arvore3 = new FichaCompleta("Jabuticabeira", "Psidium cattleianum", "Nativa", "Sim", "2 - 3 metros", "Dap 10cm");
const arvore4 = new FichaCompleta("Ipê amarelo", "Tabebuia serratifolia", "Nativa", "Não", "2 - 10 metros", "Dap 40cm");




console.log(arvore1.exibirFicha());
console.log(arvore2.exibirFicha());
console.log(arvore3.exibirFicha());
console.log(arvore4.exibirFicha());
