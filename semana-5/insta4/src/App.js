import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import {IconeComContador} from './components/IconeComContador/IconeComContador'

import iconeCoracaoBranco from './img/favorite-white.svg'
import iconeCoracaoPreto  from './img/favorite.svg'
import iconeComentario    from './img/comment_icon.svg'
import {SecaoComentario}  from './components/SecaoComentario/SecaoComentario'
import iconeBookmark      from './img/bookmark.png'
import iconeBookmarkPreto from './img/bookmarkpreto.png'




const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const Bookmark = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`



class App extends React.Component {

  state = {

    postagens: [

      {
        nomeUsuario:  'paulinha',
        fotoUsuario:  'https://picsum.photos/50/50',
        fotoPost:     'https://picsum.photos/200/150'

      },
      {
        nomeUsuario:  'Jorge',
        fotoUsuario:  'https://picsum.photos/51/51',
        fotoPost:     'https://picsum.photos/201/151'
      }
    ],

    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    bookmark: false,
    valorInputPost: "",
    valorInputPessoa: "",
    valorInputFoto: ""



  };

  onClickCurtida = () => {

    if(this.state.curtido === false) {

      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })

    }

    else if(this.state.curtido === true ){


      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas -1
      })

    }

  }




  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickBook = () => {

    if( this.state.bookmark === false) {
      this.setState({
        bookmark: true,
      })
    }
    if( this.state.bookmark === true) {

      this.setState({
      bookmark: false,
      })
    }

  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }


  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  }

  adicionaPost = (event) => {

    const novoPost = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoPost: 'https://picsum.photos/199/149',
      fotoUsuario:  'https://picsum.photos/49/49'  
    }

    console.log(novoPost)
    const novosPost = [ novoPost, ...this.state.postagens]

    this.setState({ postagens: novosPost        });
    this.setState({ valorInputPessoa: ""        });
    this.setState({ valorInputPost:  ""    });
    this.setState({ valorInputFoto:     ""    });    
  }

  render() {

    let iconeCurtida

    if(this.state.curtido === true) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }


    let iconeB 
    if(this.state.bookmark === true ) {
      iconeB = iconeBookmarkPreto
    } else {
      iconeB = iconeBookmark
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }




    const listaDeComponentes = this.state.postagens.map(
      (item) => {
      return ( <PostContainer>

          <PostHeader>
            <UserPhoto src={item.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{item.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={item.fotoPost} alt={'Imagem do post'}/>


          <PostFooter>
          <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />



        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />


          </PostFooter>

        {componenteComentario}


        </PostContainer>

      );
    });

    let Posts = [...listaDeComponentes]







    /* <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>

      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeB}
          onClickIcone={this.onClickBook}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      </PostContainer> */ 

    return (


      <MainContainer>


        <div>{Posts}</div>

        <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />

        <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto"}
          />

        <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Post"}
          />

        <button onClick={this.adicionaPost}>Adicionar</button>



      </MainContainer>
    );
  }
}

export default App;
