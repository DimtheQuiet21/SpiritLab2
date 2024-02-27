import { useState, useEffect } from 'react';
import IngredientList from './subcomponents/IngredientList';
import DrinkVisualizer from './subcomponents/DrinkVisualizer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container } from '@mui/material';
import CommercialBox from './subcomponents/CommercialBox';

const Concoct = ({ props }) => {
    //State Variables
    // const [ingredient1, setIngredient1] = useState(0);
    // const [ingredient2, setIngredient2] = useState(0);
    // const [ingredient3, setIngredient3] = useState(0);
    // const [ingredient4, setIngredient4] = useState(0);
    // const [ingredient5, setIngredient5] = useState(0);
    // const [ingredient6, setIngredient6] = useState(0);
    // const [ingredient7, setIngredient7] = useState(0);

    const [ingredientColors, setIngredientColors] = useState([]);
    
    //Generate values for ingredient colors
    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            const hex = randomHex();
            setIngredientColors(ingredientColors => [...ingredientColors, hex]);
        }
    }, [])
    // console.log(ingredientColors);

    const randomHex = () => {
        const char = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += char[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // const updateBeaker = async (ingredient, value) => {
    //     switch (ingredient) {
    //         case 'ingredient1':
    //             setIngredient1(value);
    //             break;
    //         case 'ingredient2':
    //             setIngredient2(value);
    //             break;
    //         case 'ingredient3':
    //             setIngredient3(value);
    //             break;
    //         case 'ingredient4':
    //             setIngredient4(value);
    //             break;
    //         case 'ingredient5':
    //             setIngredient5(value);
    //             break;
    //         case 'ingredient6':
    //             setIngredient6(value);
    //             break;
    //         case 'ingredient7':
    //             setIngredient7(value);
    //             break;
    //         default:
    //             break;
    //         }
    // }

    // // Calculate heights of ingredients based on their quantities
    // const ingredient1Height = ingredient1 * 15;
    // const ingredient2Height = ingredient2 * 15;
    // const ingredient3Height = ingredient3 * 15;
    // const ingredient4Height = ingredient4 * 15;
    // const ingredient5Height = ingredient5 * 15;
    // const ingredient6Height = ingredient6 * 15;
    // const ingredient7Height = ingredient7 * 15;

    // // Calculate y-coordinates for each ingredient rectangle
    // const ingredient1Y = 190 - ingredient1Height;
    // const ingredient2Y = 190 - ingredient2Height - ingredient1Height;
    // const ingredient3Y = 190 - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient4Y = 190 - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient5Y = 190 - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient6Y = 190 - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient7Y = 190 - ingredient7Height - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;

    // // SVG styles
    // const beakerStyle = {
    //     stroke: '#ffffff',
    //     strokeWidth: '2px',
    //     fill: 'none'
    //   };

  return (
    <>
      <Card variant="outlined" sx={{mb: "24px"}}>
        {/* DRINK NAME */}
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>{props.name}</strong> </Typography>
        </CardContent>
        
        <CardContent sx={{display: "flex", minHeight: "max-content"}}>

            {/* INGREDIENT LIST */}
            <Container maxWidth="xl">
                <IngredientList props={props} colors={ingredientColors}/>
            </Container>

            {/* BEAKER UI */}
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                <DrinkVisualizer props={props} colors={ingredientColors}/>
            </Container>

            {/* ACTIONS UI */}
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "space-around"}}>
                <Container sx={{textAlign: "left"}}>
                    <Typography variant='h7' color='text.secondary'>Assembly:</Typography>
                    <br/> <br/>
                    <Typography variant='h7'>{props.assembly}</Typography>
                </Container>

                <Container sx={{borderBottom: "solid 2px #2c2c2c"}}></Container>

                <Stack spacing={2} direction="column">
                    <Button variant="outlined">Favorite</Button>
                    <Button variant="outlined">Modify</Button>
                    <Button variant="outlined">Find Similar</Button>
                </Stack>
            </Container>

        </CardContent>
      </Card>
      
      <Container>
        <CommercialBox />
      </Container>
    </>
  );
}

export default Concoct;