import Grid from '@mui/material/Grid';
import Welcome from "../components/home/Welcome";
import PopularDrink from "../components/home/PopularDrink";
import DrinkOfDay from "../components/home/DrinkOfDay";
import RandomGen from '../components/home/RandomGen';
import { Container } from '@mui/material';

function Home() {
    return (
        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Welcome />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DrinkOfDay />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PopularDrink />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RandomGen />
                </Grid>
            </Grid>
        </Container>

    );
}

export default Home;