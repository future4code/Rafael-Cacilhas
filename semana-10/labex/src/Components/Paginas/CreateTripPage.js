import React, {useState}    from "react";
import axios                from "axios";
import Box                  from '@mui/material/Box';
import Typography           from '@mui/material/Typography';
import Button               from '@mui/material/Button';



        /* No material a tag é 
            inputProps = {{ pattern: "[a-z]"}}
        */


export default function CreateTripPage() {

    const [form,setForm] = useState({nome:"", planeta:"",data:"", descrição:"", duração:"",})

    const criarViagem = () => {

        const token     = window.localStorage.getItem("token")
        const nome      =   form.nome
        const planeta   =   form.planeta
        const data      =   form.data
        const descrição =   form.descrição
        const duração   =   form.duração

    
        const URL       = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-cacilhas-maryam/trips'
        
        const header    = {
            headers:{
                'Content-Type': 'application/json', 
                'auth': `${token}`
            }
        }

        const body      = {
            "name"              :   {nome},
            "planet"            :   {planeta},
            "date"              :   {data},
            "description"       :   {descrição},
            "durationInDays"    :   {duração}
        }
    
        axios.post(URL, body,header)
        .then(  (resposta ) => {
            console.log('Deu certo:', resposta.data);
        }).catch( (erro) => {
            console.log('Deu errado:', erro);
        })
    
    }

    const mudaForm = (event) => {
        const nome  = event.target.name
        const valor = event.target.value

        /* Ou:
        const {name,value} = event.target
        */

        setForm({ ...form, [nome]: valor });
    }



    return (
        <div>

        
            <Box 
            sx={ { 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
                marginBottom: 10, 
                fontFamily: '"Montserrat"',
                height: '50vh',
            }}>

                        
                <Box 
                sx={ { 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Box
                    sx={ { marginLeft: 0, marginTop: 5, fontFamily: '"Montserrat"',  }}>
                        <Typography  variant="h2" component="div" >
                            Criar viagem                        
                        </Typography>
                    </Box>

                        <Typography  variant="h7" component="div" >
                        <ul>
                            <li>Nome: mínimo de 5 letras</li>
                            <li>Data: início em 2022</li>
                            <li>Duração: mínimo de 50 dias</li>
                        </ul>                        </Typography>
                </Box>

                <Box
                sx={ { 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: '"Montserrat"',
                }}>


                <Box
                sx={ { marginBottom: 10, marginTop:0, fontFamily: '"Montserrat"',  }}>

                

                    <form onSubmit={criarViagem}>
                        <input
                        required
                        name        =   "nome"
                        type        =   "text"
                        value       =   {form.nome}
                        onChange    =   {mudaForm}
                        placeholder =   {'Nome'}
                        />

                    <br/>
                    <select
                        required
                        name        =   "planeta"
                        id          =   "planeta"
                        value       =   {form.planeta}
                        onChange    =   {mudaForm}
                        >

                        <option>            Mercúrio    </option>
                        <option>            Vênus       </option>
                        <option>            Terra       </option>
                        <option>            Marte       </option>
                        <option>            Júpiter     </option>
                        <option>            Saturno     </option>
                        <option>            Urano       </option>
                        <option>            Neturno     </option>
                        <option disabled>   Plutão      </option>

                    </select>

                    <br/>
                    <input
                        required
                        pattern     =   ""
                        name        =   "data"
                        id          =   "data"
                        type        =   "date"
                        value       =   {form.mail}
                        onChange    =   {mudaForm}
                    />


                    <br/>
                    <input
                        required
                        name        =   "duração"
                        pattern     =   ""
                        id          =   "duração"
                        type        =   "text"
                        value       =   {form.duração}
                        onChange    =   {mudaForm}
                        placeholder =   {'Duração (dias)'}
                        />

                    <br/>
                    <input
                        required
                        name        =   "descrição"
                        pattern     =   ""
                        id          =   "descrição"
                        type        =   "text"
                        value       =   {form.descrição}
                        onChange    =   {mudaForm}
                        placeholder =   {'Uma breve descrição'}
                        />
                        

                    </form>
                </Box>


                <Button onClick={criarViagem} size='900' variant="contained"><h2>Criar</h2></Button>

                </Box>

            </Box>


            
        </div>
    )
}