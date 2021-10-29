
import Typography        from '@mui/material/Typography';
import Box               from '@mui/material/Box';
import Button            from '@mui/material/Button';
import CardActions       from '@mui/material/CardActions';
import CardContent       from '@mui/material/CardContent';
import ArrowDropUpIcon   from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar            from '@mui/material/Avatar';


import {useHistory}      from 'react-router-dom';
import {gotoPost}        from '../router/coordinator';

import {curtir}          from '../services/feed.js'
import {descurtir}       from '../services/feed.js'

import {useState}        from  'react';


const Posts = (props) => {
    const   history         =   useHistory()
    const   nComent         =   props.numeroC? props.numeroC:0
    const   primeiraLetra   =   props.usuario? props.usuario.charAt(0).toUpperCase() : ''


    const [votoUser,setVoto]    = useState(props.votoUser?  props.votoUser:0)
    const [votoTotal,setTotal]  = useState(props.votoTotal? Number(props.votoTotal):0 )

    const postEscolhido = props

    const   likePost = (id) => {

    if(props.titulo !== false) {
        
        if(votoUser === 1){
            setVoto(0)
            descurtir(id,true)
            setTotal(votoTotal - 1)
        }

        if(votoUser=== 0){
            setVoto(1)
            curtir(id,true)
            setTotal(votoTotal + 1)
        }

        if(votoUser===-1){
            setVoto(1)
            curtir(id,true)
            curtir(id,true)
            setTotal(votoTotal +2)
        }
    } else {

        if(votoUser === 1){
            setVoto(0)
            descurtir(id,false)
        }

        if(votoUser=== 0){
            setVoto(1)
            curtir(id,false)
            setTotal(votoTotal + 1)
        }

        if(votoUser===-1){
            setVoto(1)
            curtir(id,false)
            curtir(id,false)
            setTotal(votoTotal +2)
        }

    }

    }


    const   dislikePost = (id) => {
            

    if(props.titulo !== false) {
    
        if(votoUser ===1){
            setVoto(-1)
            descurtir(id,true)
            descurtir(id,true)
            setTotal(votoTotal - 2)

        }
        if(votoUser===0){
            setVoto(-1)
            descurtir(id,true)
            setTotal(votoTotal - 1)

        }
        if(votoUser===-1){
            setVoto(0)
            curtir(id,true)
            setTotal(votoTotal + 1)

        }
    }else {

        if(votoUser === 1){
            setVoto(-1)
            descurtir(id,false)
            descurtir(id,false)
            setTotal(votoTotal - 2)
        }

        if(votoUser=== 0){
            setVoto(-1)
            descurtir(id,false)
            setTotal(votoTotal - 1)
        }

        if(votoUser===-1){
            setVoto(0)
            curtir(id,false)
            setTotal(votoTotal +1)
        }

    }




    }


    return (

        <Box 
        sx={{
            border:         '1px solid black',
            display:        'flex',
            flexDirection:  'column',
            height:         '25vh',
            width:          '85vw',
            maxWidth:       '800px',
            justifyContent: 'center',
            alignItems:     'flex-start',
            backgroundColor: 'white',
            marginBottom:   '1vh'
            }}
        >

        <CardContent>

            <Box>
                <Box sx={{display:'flex'}}>

                    <Avatar sx={{bgcolor: "#913129" }} >{primeiraLetra} </Avatar>
                    <Box sx={{marginTop:'1vh', marginLeft:'1vw'}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {props.usuario}
                        </Typography>
                    </Box>

                </Box>
            

                <Typography variant="h5" component="div">
                    {props.titulo? props.titulo:''}
                </Typography>

                <Typography variant="body1">
                    {props.corpo}
                </Typography>

            </Box>

        </CardContent>

        <Box  
            sx={{  
                display:        'flex', 
                justifyContent: 'space-around',
                alignItens:     'center',
                height:         '4vh',
                width:          '75vw',
                maxWidth:       '750px',

        }} >

            <Box 
                sx={{
                    position: 'inherit',  
                    height: '4vh', 
                    display:'flex',
                    alignItens:'center',
                    justifyContent:'center',
                    marginRight:'-5vw',
                    marginLeft:'-10px',
                    marginTop:      '0vh',
                }}>
                
                <CardActions>

                    <Box sx={{ marginRight: '-3vh',marginLeft:'-3vw'}}>
                        <Button onClick = {  () => likePost(props.id)    }  size="small" variant='text'>   {votoUser ===1? <ArrowDropUpIcon  color="success" /> : <ArrowDropUpIcon  color="primary" /> }      </Button>
                    </Box>

                    <Box sx={{ marginRight: '-3vh',marginTop:'1vh', marginLeft: '-3vh'}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {votoTotal} 
                        </Typography>
                    </Box>

                    <Box sx={{ marginRight: '0vh', marginLeft: '-3vh'}}>
                        <Button onClick = {  () => dislikePost(props.id)    }  size="small" variant='text'>   {votoUser ===-1? <ArrowDropDownIcon  color="success" /> : <ArrowDropDownIcon  color="primary" /> }         </Button>
                    </Box>

                </CardActions>

            </Box>

            <Box 
                sx={{
                    position: 'inherit', 
                    height: '4vh', 
                    display:'flex',
                    alignItens:'center',
                    justifyContent:'center',
                    marginTop:      '1vh',
                    }}>

                <CardActions>
                    <Button onClick = {  () => gotoPost(history,postEscolhido)    }  size="small" variant='text'> {nComent}  Comentários    </Button>
                </CardActions>

            </Box>



        </Box>

    </Box>
        );
    }

export default Posts

