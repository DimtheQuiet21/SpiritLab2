import Grid from '@mui/material/Grid';
import Welcome from "../components/Home/Welcome";
import PopularDrink from "../components/Home/PopularDrink";
import DrinkOfDay from "../components/Home/DrinkOfDay";
// import RandomGen from '../components/home/RandomGen';
import { Container } from '@mui/material';

import ExploreCard from '../components/Explore/ExploreCard';

function Home() {
    return (
        <Container maxWidth='xl'>
            <ExploreCard />
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
                {/* <Grid item xs={12} md={6}>
                    <RandomGen />
                </Grid> */}
            </Grid>
        </Container>


    );
}

export default Home;