import { Autocomplete, TextField, ToggleButton, Button, ToggleButtonGroup, ButtonGroup, CircularProgress } from '@mui/material';
import {Card, CardHeader, CardMedia, CardActions, CardContent, Container, Typography, Box}  from '@mui/material';

function CommercialCards ({items}) {
    console.log(items)
    const inventoryAlcohols = items.map((alcohol) => {
        console.log(alcohol.name)
        return (
        
            
                <Card sx = {{margin: 10}}>
                    <CardHeader
                        // avatar={
                        // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        //     R
                        // </Avatar>
                        // }
                        // action={
                        // <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        // </IconButton>
                        // }
                        title={alcohol.name}
                        subheader={alcohol.proof}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={alcohol.image}
                        alt={alcohol.name}
                    />
                    <Button 
                     variant="contained"
                     href = {alcohol.url}
                    >Purchase!</Button>

                </Card>
            
            
        
        )
    })

    return (
        <Container sx ={{overflow:"auto !important"}}>
            {inventoryAlcohols}
        </Container>
    )
        
}

export default CommercialCards;