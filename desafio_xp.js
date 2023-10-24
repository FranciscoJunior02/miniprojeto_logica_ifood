
const hero = {nome: 'Francisco', rank: 8056}

let elo = " "

if(hero.rank <= 1000){
    elo = "ferro"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 1001 && hero.rank <= 2000){
    elo = "bronze"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 2001 && hero.rank <= 5000){
    elo = "prata"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 6001 && hero.rank <= 7000){
    elo = "ouro"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 7001 && hero.rank <= 8000){
    elo = "platina"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 8001 && hero.rank <= 9000){
    elo = "ascendente"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}if(hero.rank >= 9001 && hero.rank <= 10000){
    elo = "imortal"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)

}else if(hero.rank >= 10001){
    elo = "radiante"
    console.log(`O Heroi ${hero.nome}, tem o seguinte rank:${elo}`)
}