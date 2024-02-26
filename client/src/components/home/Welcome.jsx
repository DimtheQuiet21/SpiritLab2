import { Typography, Box, Divider, Button } from "@mui/material";

function Welcome() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 4,
        textAlign: "center",
        borderRadius: "20px",
        width: "85%",
        margin: "auto",
        marginTop: "3rem",
      }}
    >
      <Typography variant="h4" component="h2" color="white" sx={{textAlign: "center"}}>
        Welcome to Spirit Labs 2.0🧪:
      </Typography>
      <Typography variant="subtitle" color="white" sx={{textAlign: "left"}}>
        You gotta be 21 to be here, bruh..🎭
      </Typography>
      <Divider sx={{ backgroundColor: "white", margin: "20px auto" }} />
      <Typography
        variant="h6"
        color="white"
        sx={{ textAlign: "left"}}
      >
        Spirit Labs is the place to be if you're looking for the best way to
        discover new drinks! <br />
        <span style={{ marginTop: "20px", display: "block" }}>
          Not sure what you're looking for? Take a gander at our Drink Of The Day! Or test your luck with the amazing Random Cocktail Generator! <br />
          </span>
          <span style={{ marginTop: "20px", display: "block", textAlign:"center" }}>
          Have at it: <br />
          </span>
       
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          sx={{ width: "100%", marginBottom: "10px", height: "50px", fontSize: "1.1rem", borderRadius: "15px", color: "black", backgroundColor: "#29b0ff"}}
        >
          Create That Drink Pal!🍹
        </Button>
        <Button variant="outlined" sx={{ width: "100%", height: "50px", fontSize: "1.1rem", borderRadius: "15px" }}>
          Sign up/Login
        </Button>
      </Box>
    </Box>
  );
}

export default Welcome;
