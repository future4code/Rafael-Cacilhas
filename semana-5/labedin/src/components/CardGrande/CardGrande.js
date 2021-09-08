import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h4`
margin-bottom: 15px;
`

const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardGrande(props) {
    return (
        <Container>
            <Imagem src={ props.imagem }  />
            <Corpo>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Corpo>
        </Container>
    )
}

export default CardGrande;