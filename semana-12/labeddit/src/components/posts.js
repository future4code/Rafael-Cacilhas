
import Typography        from '@mui/material/Typography';
import Box               from '@mui/material/Box';
import Button            from '@mui/material/Button';
import CardActions       from '@mui/material/CardActions';
import CardContent       from '@mui/material/CardContent';
import ArrowDropUpIcon   from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {useHistory}      from 'react-router-dom';
import {gotoPost}        from '../router/coordinator';
import useComent         from '../hooks/useComent';

import {curtir}          from '../services/feed.js'
import {descurtir}       from '../services/feed.js'

import {useState}       from  'react';


const Posts = (props) => {
    const   history   = useHistory()
    let     nComent   = useComent(props.id)
    nComent?    nComent = nComent.length    :   nComent=0

    const [votoUser,setVoto]    = useState(props.votoUser?  1:0)
    const [votoTotal,setTotal]  = useState(props.votoTotal? Number(props.votoTotal):0 )



    const   likePost = (id) => {


        if(votoUser === 1){
            setVoto(0)
            descurtir(id)
            setTotal(votoTotal - 1)
        }

        if(votoUser=== 0){
            setVoto(1)
            curtir(id)
            setTotal(votoTotal + 1)
        }

        if(votoUser===-1){
            setVoto(1)
            curtir(id)
            curtir(id)
            setTotal(votoTotal +2)
        }

    }


    const   dislikePost = (id) => {
            
        if(votoUser ===1){
            setVoto(-1)
            descurtir(id)
            descurtir(id)
            setTotal(votoTotal - 2)

        }
        if(votoUser===0){
            setVoto(-1)
            descurtir(id)
            setTotal(votoTotal - 1)

        }
        if(votoUser===-1){
            setVoto(0)
            curtir(id)
            setTotal(votoTotal + 1)

        }
    }


    return (
    <Box
        sx={{
            border: '1px solid black',
            minWidth:  '45vh'
        }}    
    >
        <CardContent>
            <Typography variant="h5" component="div">
                {props.titulo}
            </Typography>

            <Typography variant="body1">
                {props.corpo}
            </Typography>
        </CardContent>

        <Box  
            sx={{  
                display:        'flex', 
                justifyContent: 'space-around',
                alignItens:     'center',
                height:         '4vh',
        }} >

<Box sx={{position: 'inherit',  height: '4vh', display:'flex',alignItens:'center',justifyContent:'center',marginRight:'-5vw',marginLeft:'-10px'}}>
                
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

            <Box sx={{position: 'inherit', height: '4vh', display:'flex',alignItens:'center',justifyContent:'center'}}>

                <CardActions>
                    <Button onClick = {  () => gotoPost(history,props.id)    }  size="small" variant='text'> {nComent}  Comentários    </Button>
                </CardActions>

            </Box>

            <Box sx={{position: 'inherit', height: '4vh', display:'flex',alignItens:'center',justifyContent:'center'}}>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.usuario}
                </Typography>
            </Box>

        </Box>

    </Box>
        );
    }

export default Posts

