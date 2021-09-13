import React from 'react';
import styled from 'styled-components';
import paus from './img/paus.png';


const Titulo = styled.h4`
margin-bottom:  15px;
`
const Texto = styled.h3`
margin:         0px;
`

const Carta = styled.div`
    display:        flex;
    flex-direction: column;
    border:         1px solid black;
    width:          200px;
    height:         300px;
    margin:         50px;
`

const Imagem = styled.img`
    width: 70px;
    margin-top: 25%;
    margin-right: 10px;
    margin-left:  10px;
    border-radius: 50%;
    align-self: center;

`

const Icone = styled.img`
    width: 20px;
    border-radius: 50%;
    align-self: center;
`

const Topo = styled.div`
    display:        flex;
    flex-direction: column;
    border:         1px solid black;
    align-self:     flex-start;
    margin:         5px;
`
const Base = styled.div`
    display:        flex;
    flex-direction: column;
    border:         1px solid black;
    align-self:     flex-end;
    margin-top:     27%;
    margin-right:   5px; 
    transform:      rotateX(180deg);
`

const Card = ({valor, naipe}) => {

    return (
        <div>
            <Carta>

                <Topo >
                    <Texto>{valor}</Texto>
                    <Icone src={ paus }  />
                </Topo>

                <Imagem src={ paus }  />

                <Base >                
                    <Texto>{valor}</Texto>
                    <Icone src={ paus }  />
                </Base>

            </Carta>
        </div>
    )

}

export default Card
