import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h4`
margin-bottom: 15px;
margin-right: 15px;
display: inline-block;
`
const Frase = styled.p`
    margin-left: 50px;
    margin: 1px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: center;

    border: 1px solid black;
    padding: 20px 10px;
    margin: -5px;
    height: 60px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

function CartaPequena(props) {
    return (
        <Container>
                <Titulo>{ props.tag }</Titulo>
                <Frase>{ props.descricao }</Frase>
        </Container>
    )
}

export default CartaPequena;

