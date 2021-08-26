

let cartaJogador = []
let cartaOponente = []
let pontuacaoJogador = 0
let pontuacaoOponente = 0 



console.log("Bem vindo ao jogo de Blackjack!")



if(confirm("Você quer jogar um novo jogo?")){   


   cartaJogador   =    [comprarCarta(), comprarCarta()]
   cartaOponente  =    [comprarCarta(), comprarCarta()]

   pontuacaoJogador  = cartaJogador[0].valor    + cartaJogador[1].valor
   pontuacaoOponente = cartaOponente[0].valor   + cartaOponente[1].valor


   console.log(`Usuário - cartas: ${cartaJogador[0].texto} ${cartaJogador[1].texto} - pontuação ${pontuacaoJogador}`)
   console.log(`Oponente - cartas: ${cartaOponente[0].texto} ${cartaOponente[1].texto} - pontuação ${pontuacaoOponente}`)


   
   if ( pontuacaoJogador > pontuacaoOponente){
      console.log("O usuário ganhou!")

   } else if(pontuacaoOponente > pontuacaoJogador){
      console.log("O adversário ganhou!")

   } else if (pontuacaoJogador === pontuacaoOponente) {
      console.log("Empate!")

   } else {
      console.log("Esta mensagem não deveria aparecer. Contate o dev")
   }



} else {

   console.log("Fim de jogo!")

}



