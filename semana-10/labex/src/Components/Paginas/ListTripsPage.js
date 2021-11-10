import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import TripDetailsPage      from "./TripDetailsPage";


import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';




export default function ListTripsPage() {

    return (
        

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

        }}>

            <Box sx={{ height: 50  }}>
            </Box>

            <Box sx={{ marginLeft: 14  }}>
                <Typography  variant="h1" component="div" >
                    Nossas viagens
                </Typography>
            </Box>

            <Box sx={{ height: 150  }}>
            </Box>        

            <Box sx={{ marginLeft: -20  }}>
                <Typography  variant="h2" component="div" >
                    Recomendações
                </Typography>
            </Box>

            <Box sx={{ marginTop: 5  }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        width ="200"
                        image="https://cdn.theatlantic.com/media/img/photo/2020/05/photos-jupiter-and-its-galilean-moo/a01_PIA02879-1/original.jpg"
                        alt="viagem 1"
                        />
                    </CardActionArea>
                </Card>
    
                <Typography gutterBottom variant="h6" component="div">
                            Viagem 1
                </Typography>
                <Box sx={{ marginTop: -2  }}>
                    <Typography variant="body" >
                                R$ 120,00
                    </Typography>
                </Box>
            </Box> 

        
        
        
        
        
        </Box>
    )
}