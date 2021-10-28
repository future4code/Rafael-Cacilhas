import React            from "react";
import Box              from '@mui/material/Box';
import Typography       from '@mui/material/Typography';

import Posts            from '../../components/posts.js';
import Mensagens        from '../../components/mensagens.js';

import useProtectedPage from '../../hooks/useProtectedPage';
import useComent        from '../../hooks/useComent';
import {useParams}      from "react-router-dom";



const Post = () => {
useProtectedPage()

const params  = useParams()
const lista   = useComent(params.id)

let comentarios = []

lista? comentarios = lista.map(  (item)  =>{
    return <Posts 
                key       ={item.id} 
                id        ={item.id} 
                corpo     ={item.body} 
                titulo    ={false} 
                usuario   ={item.username}
                votoTotal ={item.voteSum}
                votoUser  ={item.userVote}
            />
}) : comentarios = []


    return (

    <Box 
    sx={{
        marginTop:      '3vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        bgcolor:        'primary.lighter',
        width:          '100%',
        minHeight:      '100vh'
    }}> 

        <Typography color = "textPrimary" variant="h3"> Comentários</Typography>

        <Box sx={{marginBottom: '2vh'}}>
            <Mensagens titulo={false}  id={params.id} />
        </Box>

        <Typography variant="h4"> {comentarios}</Typography>



    </Box>

    );
}

export default Post;
