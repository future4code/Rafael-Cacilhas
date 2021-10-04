import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'


const Post = (props) => {

  const [iconeCurtido, setIcone] = useState(iconeCoracaoBranco);
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setCurtidas] = useState(0);
  const [numeroComentarios, setComentarios] = useState(0);
  const [comentario, setComent] = useState(false);
  const [comentarios, setLista] = useState([]);



  const onClickCurtida = () => {
    if(curtido === false){
      setCurtidas(numeroCurtidas + 1)
      setIcone(iconeCoracaoPreto)
    } 
    if(curtido === true){
      setCurtidas(numeroCurtidas - 1)
      setIcone(iconeCoracaoBranco)
    }
    setCurtido(!curtido)
  };

  const onClickComentario = () => {
    setComent(!comentario)

  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    setLista(listaDeComentarios)
    setComent(false)
    setComentarios(numeroComentarios+1)
    console.log(listaDeComentarios)
    console.log(comentarios)
  }

  const caixaDeComentario = comentario?(
    <SecaoComentario enviarComentario={enviarComentario}/>
    ):(
      comentarios.map(item => {
        return (
          <CommentContainer>
            <p key={item}>{item}</p>
          </CommentContainer>
        )
      })
  )


  return (
    <PostContainer>

      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>

        <IconeComContador
          icone={iconeCurtido}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>

      {caixaDeComentario}
      
    </PostContainer>
  )
}

export default Post