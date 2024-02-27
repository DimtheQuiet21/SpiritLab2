import { useState, useEffect } from 'react';
import IngredientList from './subcomponents/IngredientList';
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

export default function Concoct() {
    //State Variables
    const [ingredient1, setIngredient1] = useState(0);
    const [ingredient2, setIngredient2] = useState(0);
    const [ingredient3, setIngredient3] = useState(0);
    const [ingredient4, setIngredient4] = useState(0);
    const [ingredient5, setIngredient5] = useState(0);
    const [ingredient6, setIngredient6] = useState(0);
    const [ingredient7, setIngredient7] = useState(0);

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

    const updateBeaker = async (ingredient, value) => {
        switch (ingredient) {
            case 'ingredient1':
                setIngredient1(value);
                break;
            case 'ingredient2':
                setIngredient2(value);
                break;
            case 'ingredient3':
                setIngredient3(value);
                break;
            case 'ingredient4':
                setIngredient4(value);
                break;
            case 'ingredient5':
                setIngredient5(value);
                break;
            case 'ingredient6':
                setIngredient6(value);
                break;
            case 'ingredient7':
                setIngredient7(value);
                break;
            default:
                break;
            }
    }

    // Calculate heights of ingredients based on their quantities
    const ingredient1Height = ingredient1 * 15;
    const ingredient2Height = ingredient2 * 15;
    const ingredient3Height = ingredient3 * 15;
    const ingredient4Height = ingredient4 * 15;
    const ingredient5Height = ingredient5 * 15;
    const ingredient6Height = ingredient6 * 15;
    const ingredient7Height = ingredient7 * 15;

    // Calculate y-coordinates for each ingredient rectangle
    const ingredient1Y = 190 - ingredient1Height;
    const ingredient2Y = 190 - ingredient2Height - ingredient1Height;
    const ingredient3Y = 190 - ingredient3Height - ingredient2Height - ingredient1Height;
    const ingredient4Y = 190 - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    const ingredient5Y = 190 - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    const ingredient6Y = 190 - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    const ingredient7Y = 190 - ingredient7Height - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;

    // SVG styles
    const beakerStyle = {
        stroke: '#ffffff',
        strokeWidth: '2px',
        fill: 'none'
      };

  return (
      <Card variant="outlined">
        <CardContent sx={{display: "flex", minHeight: "max-content"}}>
            {/* INGREDIENT LIST */}
            <Container maxWidth="xl">
                {/* <IngredientList 
                    
                /> */}

                {/* DRINK NAME */}
                <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>Vodka Soda</strong> </Typography>
                
                {/* SPIRITS */}
                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                {/* Ingredient 1 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[0]}} />
                        <Typography variant="h7">Vodka</Typography>
                    </Box>
                    
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient1', parseInt(e.target.value))}/>
                </Container>

                {/* Ingredient 2 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[1]}} />
                        <Typography variant="h7">Cointreau</Typography> 
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient2', parseInt(e.target.value))}/>
                </Container>

                {/* Ingredient 3 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[2]}} />
                        <Typography variant="h7">Orange Bitters</Typography>
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient3', parseInt(e.target.value))}/>
                </Container>

                <CardActions>
                    <Button size="small">+ Add Spirit</Button>
                </CardActions>

                {/* MIXERS */}
                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                {/* Ingredient 4 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[3]}} />
                        <Typography variant="h7">Club Soda</Typography>
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient4', parseInt(e.target.value))}/>
                </Container>

                {/* Ingredient 5 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>                   
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[4]}} />
                        <Typography variant="h7">Lime Juice</Typography>
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient5', parseInt(e.target.value))}/>
                </Container>

                {/* Ingredient 6 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[5]}} />
                        <Typography variant="h7">Lemon Juice</Typography>
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient6', parseInt(e.target.value))}/>
                </Container>

                {/* Ingredient 7 */}
                <Container maxWidth="lg" sx={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid 2px #2c2c2c", p: "8px"}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CircleIcon sx={{ mr: '4px', color: ingredientColors[6]}} />
                        <Typography variant="h7">Sweat of Manboob</Typography>
                    </Box>
                    <TextField label="Oz" type="number" sx={{maxWidth: "75px"}} onChange={(e) => updateBeaker('ingredient7', parseInt(e.target.value))}/>
                </Container>

                <CardActions>
                <Button size="small">+ Add Mixer</Button>
                </CardActions>
            </Container>

            {/* BEAKER UI */}
            <Container sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="150" height="200">
                    {/* BEAKER */}
                    <rect x="0" y="0" width="150" height="200" style={beakerStyle} />
                    {/* Ingredient 1 */}
                    <rect x="10" y={ingredient1Y} width="130" height={ingredient1Height} fill={ingredientColors[0]} />
                    {/* Ingredient 2 */}
                    <rect x="10" y={ingredient2Y} width="130" height={ingredient2Height} fill={ingredientColors[1]} />
                    {/* Ingredient 3 */}
                    <rect x="10" y={ingredient3Y} width="130" height={ingredient3Height} fill={ingredientColors[2]} />
                    {/* Ingredient 4 */}
                    <rect x="10" y={ingredient4Y} width="130" height={ingredient4Height} fill={ingredientColors[3]} />
                    {/* Ingredient 5 */}
                    <rect x="10" y={ingredient5Y} width="130" height={ingredient5Height} fill={ingredientColors[4]} />
                    {/* Ingredient 6 */}
                    <rect x="10" y={ingredient6Y} width="130" height={ingredient6Height} fill={ingredientColors[5]} />
                    {/* Ingredient 7 */}
                    <rect x="10" y={ingredient7Y} width="130" height={ingredient7Height} fill={ingredientColors[6]} />
                </svg>
            </Container>

            {/* ACTIONS UI */}
            <Container sx={{maxWidth: "25%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Stack spacing={2} direction="column">
                    <Button variant="outlined">Favorite</Button>
                    <Button variant="outlined">Modify</Button>
                    <Button variant="outlined">Find Similar</Button>
                </Stack>
            </Container>

        </CardContent>
        <CommercialBox />
      </Card>
  );
}