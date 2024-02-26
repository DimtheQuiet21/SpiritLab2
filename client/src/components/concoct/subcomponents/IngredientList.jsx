import { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

export default function IngredientList() {

  return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>Vodka Soda</strong> </Typography>

                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Typography variant="h7">Vodka</Typography>
                    <TextField id="alcohol1" label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient1', parseInt(e.target.value))}/>
                </Container>

                <CardActions>
                    <Button size="small">+ Add Spirit</Button>
                </CardActions>

                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Typography variant="h7">Club Soda</Typography>
                    <TextField id="mixer1" label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient2', parseInt(e.target.value))}/>
                </Container>

                <CardActions>
                <Button size="small">+ Add Mixer</Button>
                </CardActions>
            </Container>
        </>
  );
}