import { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Box } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const IngredientList = ({ props, colors }) => {

    console.log(props, colors);

    // const amountParse = (string) => {
    //     return parseInt(string.match(/\d+/g));
    // }

    const alcoholMap = props.alcohol.map((el, index) => {

        return (
            <Container
            key={`alcohol-${index}`}
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
                    <CircleIcon sx={{ mr: '4px', color: colors[index] }} />
                    <Typography variant="h7">{el.name}</Typography>
                </Box>
                <Typography color='accent'>{el.amount}</Typography>
            </Container>
    )})

        const liquidMap = props.liquid.map((el, index) => {
            return (
            <Container
            key={`liquid-${index}`}
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
                    <CircleIcon sx={{ mr: '4px', color: colors[index + props.alcohol.length] }} />
                    <Typography variant="h7">{el.name}</Typography>
                </Box>
                <Typography color='accent'>{el.amount}</Typography>
            </Container>
        )})

        const garnishMap = props.garnish.map((el, index) => {
            return (
            <Container
            key={`liquid-${index}`}
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
                    <Typography variant="h7">{el.name}</Typography>
                </Box>
                <Typography color='accent'>{el.amount}</Typography>
            </Container>
        )})

  return (
        <>
            <Container sx={{textAlign: "left", mb: "8px"}}>

                {/* SPIRITS */}
                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                {/* Render Alcohol */}
                <>{alcoholMap}</>

                {/* <CardActions>
                <Button size="small">+ Add Mixer</Button>
                </CardActions> */}

                <br/><br/>

                {/* MIXERS */}
                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                {/* Render Liquids */}
                <>{liquidMap}</>

                {/* <CardActions>
                <Button size="small">+ Add Mixer</Button>
                </CardActions> */}

                <br/><br/>

                {/* GARNISHES */}
                <Typography variant="h7" color="text.secondary">Garnish:</Typography>

                {/* Render Garnishes */}
                {garnishMap}

                <br/>

            </Container>
        </>
  );
}

export default IngredientList;