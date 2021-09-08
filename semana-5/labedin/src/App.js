import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';





function App() {
  return (

    <div className="App">

      <div className="page-section-container">

        <h2>Dados pessoais</h2>
        
        <CardGrande 
          imagem="" 
          nome="Rafael Cacilhas" 
          descricao="Sou formado em Física e atualmente estou terminando meu doutorado pela Universidade Federal de Viçosa."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          tag="Email:" 
          descricao="email@email.com.br"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          tag="Endereço:" 
          descricao="Lugar Nenhum"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando desenvolvimento full-stack." 
        />
        
        <CardGrande 
          imagem="https://unidades.damasio.com.br/wp-content/uploads/2020/03/brasao-ufv.gif" 
          nome="Universidade Federal de Viçosa" 
          descricao="Doutorado em Física." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
