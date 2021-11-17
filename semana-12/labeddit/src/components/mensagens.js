import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';
import TextField        from '@mui/material/TextField';

import CreateIcon       from '@mui/icons-material/Create';


import useForm          from '../hooks/useForm';
import {enviaPost}      from '../services/feed';
import {enviaComent}    from '../services/feed';



const Mensagens = (props) => {

    const [form,onChange,clear] = useForm({title:'',body:''})

    
    const enviaForm = (event) => {
        event.preventDefault()

        if(props.titulo){
            enviaPost(form)
        }
        if(!props.titulo){
            enviaComent(form,props.id)
        }

        clear()
    }




    return(

        <Box 
        sx={{
            border:         '1px solid black',
            display:        'flex',
            flexDirection:  'column',
            height:         '40vh',
            width:          '80vw',
            maxWidth:       '750px',
            justifyContent: 'center',
            alignItems:     'center',
            backgroundColor: 'white'
            }}
        >



            <Box     
            sx={{
            display:        'flex',
            flexDirection:  'column',
            height:         '35vh',
            width:          '65vw',
            maxWidth:       '700px',
            alignItens:     'center',
            }}>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Usuário
                </Typography>

                <form onSubmit={enviaForm}>

                    <Box
                    sx={{
                        marginBottom:   '15vh',
                        display:        'flex',
                        flexDirection:  'column',
                        width:          '65vw',
                        maxWidth:       '700px',
                        alignItens:     'center',
                    }}>

                        {props.titulo? 
                            <TextField  
                                name={'title'}
                                value={form.title}  
                                onChange={onChange} 
                                label="Título" 
                                variant="outlined" /> 
                        :''}


                        <TextField   
                            name={'body'} 
                            value={form.body} 
                            onChange={onChange} 
                            multiline rows={4} 
                            label="Mensagem" 
                            variant="outlined" 
                        />
                        <br/>

                        <Button  
                            variant='contained' 
                            type='submit'
                            size="small"
                        > 
                        <CreateIcon/>
                            Post 
                        </Button>
                    </Box>

                </form>
                

            </Box>
        </Box>
    )
}


    export default Mensagens