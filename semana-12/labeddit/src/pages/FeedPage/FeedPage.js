import React            from "react";
import Box              from '@mui/material/Box';
import Typography       from '@mui/material/Typography';

import Posts            from '../../components/posts.js';
import Mensagens        from '../../components/mensagens.js';

import useProtectedPage from '../../hooks/useProtectedPage';
import usePost          from '../../hooks/usePost';



const Feed = () => {
  useProtectedPage()
  const lista     = usePost()


  let postagens = []
  lista? postagens = lista.map(  (item)  =>{
    return <Posts 
              key       = {item.id} 
              id        = {item.id} 
              corpo     = {item.body} 
              titulo    = {item.title} 
              usuario   = {item.username}
              votoTotal = {item.voteSum}
              votoUser  = {item.userVote}
              votoUser  = {item.userVote}
              numeroC   = {item.commentCount}
            />
  }) : postagens = []



    return (

      <Box 
      sx={{
        marginTop:      '3vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'space-around',
        bgcolor:        'primary.lighter',
        width:          '100%',
        minHeight:      '100vh',
      }}> 

      

        <Typography color = "textPrimary" variant="h3"> Feed</Typography>

        <Box sx={{marginBottom: '2vh'}}>
          <Mensagens titulo={true} />
        </Box>

        <Box sx={{marginTop: '2vh'}}>
          <Typography variant="h4"> {postagens}</Typography>
        </Box>

      </Box>

    );
  }
  
  export default Feed;
  