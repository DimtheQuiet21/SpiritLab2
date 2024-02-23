import { Typography, Box, Divider, Button } from "@mui/material";

function Welcome() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 5,
        textAlign: "center",
        borderRadius: "20px",
        width: "95%",
        marginTop: "15px",
      }}
    >
      <Typography variant="h3" component="h2" color="white" sx={{textAlign: "left"}}>
        Welcome to Spirit Labs 2.0:
      </Typography>
      <Typography variant="h5" color="white" sx={{textAlign: "left"}}>
        You gotta be 21 to be here, bruh
      </Typography>
      <Divider sx={{ backgroundColor: "white", margin: "20px auto" }} />
      <Typography
        variant="h5"
        color="white"
        sx={{ textAlign: "left"}}
      >
        Spirit Labs is the place to be if you're looking for the best way to
        discover new drinks! <br />
        <span style={{ marginTop: "30px", display: "block" }}> {/* Added span to style */}
          Not sure what you're looking for? Try out the drink of the day or let us
          pick one for you with the random cocktail generator! <br />
          Get started: <br />
        </span>
      </Typography>
      <Box sx={{ marginTop: "25px" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "100%", marginBottom: "10px", height: "50px", fontSize: "1.3rem", borderRadius: "15px"}}
        >
          Create a Drink
        </Button>
        <Button variant="outlined" color="primary" sx={{ width: "100%", height: "50px", fontSize: "1.3rem", borderRadius: "15px" }}>
          Sign up/Login
        </Button>
      </Box>
    </Box>
  );
}

export default Welcome;
