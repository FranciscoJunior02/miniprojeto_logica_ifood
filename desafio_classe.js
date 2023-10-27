class heroi{
    constructor(nome, idade, tipo ){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
   
    acao(){
        this.ataque = " ";

        if(this.tipo == "guerreiro"){
            this.ataque = "ataque"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

        }if(this.tipo == "mago"){
            this.ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

        }if(this.tipo == "monge"){
            this.ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }

        else if(this.tipo == "ninja"){
            this.ataque = "usou shuriken"
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
    }
}

 let personagem = new heroi("Francisco", 21, "monge");
 let personagem2 = new heroi("antonio", 21, "mago");
 let personagem3 = new heroi("Queiroz", 21, "guerreiro");
 let personagem4 = new heroi("Junior", 21, "ninja");


 personagem.acao()
 personagem2.acao()
 personagem3.acao()
 personagem4.acao()
