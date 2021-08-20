
let cartaJogador = []
let cartaOponente = []
let pontuacaoJogador = 22
let pontuacaoOponente = 22 
let i = 0
let cartas = 2

let resultado = ""
let outputJogador = ""
let outputAdversario = ""


while (pontuacaoJogador === 22) {
   cartaJogador = [comprarCarta(), comprarCarta()]
   pontuacaoJogador = cartaJogador[0].valor + cartaJogador[1].valor

}

while(pontuacaoOponente === 22) {

   cartaOponente = [comprarCarta(),comprarCarta()]
   pontuacaoOponente = cartaOponente[0].valor + cartaOponente[1].valor

}



console.log("Bem vindo ao jogo de Blackjack!")



if(confirm("Você quer jogar um novo jogo?")){   


   console.log(`Suas cartas são ${cartaJogador[0].texto} ${cartaJogador[1].texto}. A carta revelada do computador é ${cartaOponente[0].texto}.`)


      while (pontuacaoJogador < 22) {

         if (pontuacaoJogador === 21 ) {
            console.log("Blackjack! Você venceu!")
            break
         }



         if(confirm(`Deseja comprar mais uma carta?`)){

            cartaJogador[cartas] = comprarCarta()
            pontuacaoJogador = pontuacaoJogador + cartaJogador[cartas].valor



            for (i = 0; i <= cartas; i++){ 
               outputJogador = outputJogador + `${cartaJogador[i].texto}`
            }

            console.log(`Suas cartas são ${outputJogador}`) 

            if (pontuacaoJogador === 21 ) {
               console.log("Blackjack! Você venceu!")
               break
            }
                                                      
            cartas = cartas + 1 


         } 
         else {

            cartasOponente = 2

                              
            outputAdversario = ""


            while(pontuacaoOponente <= pontuacaoJogador){

               cartaOponente[cartasOponente] = comprarCarta()
               pontuacaoOponente = pontuacaoOponente + cartaOponente[cartasOponente].valor

               for (i = 0; i <= cartasOponente; i++){ 
                  outputAdversario = outputAdversario + cartaOponente[i].texto
                                       
               }
               console.log(`As cartas do seu adversário são: ${outputAdversario}`) 


               cartasOponente = cartasOponente + 1
                                             
            }



            outputAdversario = ""
            outputJogador = ""

            for (i = 0; i < cartasOponente; i++){ 
               outputAdversario +=  cartaOponente[i].texto      
            }

            for (i = 0; i < cartas; i++){ 
               outputJogador +=  cartaJogador[i].texto      
            }


                              


            console.log(`A pontuação do adversário é ${pontuacaoOponente} e suas cartas são: ${outputAdversario}`) 


            if(pontuacaoOponente > 21 && pontuacaoJogador <= 21) {
               console.log("O adversário estourou! Você venceu!")
            break
            }

            if(pontuacaoOponente > pontuacaoJogador) {
               console.log("O adversário venceu!")
               break
            }

            if(pontuacaoJogador > 21 ) {
               console.log("Você estourou! O adversário venceu!")
               break
            }

            if (pontuacaoJogador > pontuacaoOponente) {
               console.log("Você venceu!")
               break
            }



                           
                           



         }

               
      }

  


   
   

  

   
} else {

   console.log("Fim de jogo")

}












