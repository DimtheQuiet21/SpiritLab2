import { Typography, Box, Divider, Button, Container } from "@mui/material";
import Card from '@mui/material/Card';
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth'; 

function Welcome() {
  return (
    <Card
      sx={{
        padding: 4,
        width: "100%",
        margin: "auto",
        marginTop: "3rem",
      }}
      variant="outlined"
    >
      <Typography variant="h3" color="primary.light" align="left" gutterBottom={true}>
        Welcome to Spirit Labs 🧪
      </Typography>
      <Typography variant="h6" color="white" align="left">
        You gotta be 21 to be here, bruh.. 🎭
      </Typography>

      <Container maxWidth="lg" sx={{ borderBottom: 'solid 2px #2c2c2c', p: '8px', mb: '8px' }}/>

      <Typography variant="h7" color="white" align="left">
        Spirit Labs is the place to be if you're looking for the best way to discover new drinks!    
      </Typography>
      <br/><br/>
      <Typography variant="h7" color="white" align="left" gutterBottom={true}>
        Not sure what you're looking for? Take a gander at our Drink Of The Day! Or test your luck with the amazing Random Cocktail Generator!
        <br/><br/>
        Have at it:
       
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", marginBottom: "16px", fontSize: "14pt" }}
          component={Link} to="/search"
        >
          Find That Drink Pal!🍹
        </Button>
        {!Auth.loggedIn() && (
          <Button variant="outlined" sx={{  width: "100%", marginBottom: "16px", fontSize: "14pt" }}>
            Sign up/Login
          </Button>
        )}
      </Box>
    </Card>
  );
}

export default Welcome;
