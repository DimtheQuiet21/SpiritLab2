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

                {/* SPIRITS */}
                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                {/* Render Alcohol */}
                {ingredients.map((ingredient, index) => (
                <Container
                key={index}
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 'solid 2px #2c2c2c',
                    p: '8px',
                }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[index] }} />
                        <Typography variant="h7">{ingredient}</Typography>
                    </Box>
                    <TextField
                        label="Oz"
                        type="number"
                        sx={{ maxWidth: '75px' }}
                        onChange={(e) => updateBeaker(`ingredient${index + 1}`, parseInt(e.target.value))}
                    />
                </Container>
                ))}

                {/* MIXERS */}
                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                {/* Render Liquids */}
                {liquids.map((ingredient, index) => (
                <Container
                key={index}
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 'solid 2px #2c2c2c',
                    p: '8px',
                }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[index] }} />
                        <Typography variant="h7">{ingredient}</Typography>
                    </Box>
                    <TextField
                        label="Oz"
                        type="number"
                        sx={{ maxWidth: '75px' }}
                        onChange={(e) => updateBeaker(`ingredient${index + 1}`, parseInt(e.target.value))}
                    />
                </Container>
                ))}

                <CardActions>
                <Button size="small">+ Add Mixer</Button>
                </CardActions>
            </Container>
        </>
  );
}