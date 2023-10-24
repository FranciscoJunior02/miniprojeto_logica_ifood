function calc (vitorias, derrotas){
    
    let resultado
    resultado = (vitorias - derrotas)
    
    let elo = " " 

    if(resultado <=10){
        elo = " Ferro"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }if((resultado >= 11) && (resultado <= 20)){
        elo = " Bronze"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }if((resultado >= 21) && (resultado <= 50)){
        elo = " Prata"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }if((resultado >= 51) && (resultado <= 80)){
        elo = " Ouro"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)
        
    }if((resultado >= 81) && (resultado <= 90)){
        elo = " Diamante"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }if((resultado >= 91) && (resultado <= 100)){
        elo = " Lendário"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }else if(resultado >=101){
        elo = " Imortal"
        return(`O herói tem um saldo de ${vitorias} Vitórias, e está no elo:${elo}`)

    }
}
console.log(calc(23, 4))
console.log(calc(11, 1))
console.log(calc(85, 10))
console.log(calc(250, 163))
console.log(calc(250, 100))
