// // component will be what is used to render the icons for the specific ingredients
// import React from "react";
// import { Grid, Box } from "@mui/material";

// const liquorEmojis = [
//   "🍸", "🍹", "🥃", "🍺", "🍶", "🍾", "🍷", "🥂", "🧉", "🍻", "🍵", "🥤", "🥛", 
//   "☕", "🫖", "🍼", "🧋"
// ];
// const getRandomEmoji = () => liquorEmojis[Math.floor(Math.random() * liquorEmojis.length)];

// const IngredientIcons = () => {
//   return (
//     <Box display="flex" justifyContent="center" marginTop="20px">
//       <Grid container spacing={2} justifyContent="center">
//         {Array.from({ length: 40 }).map((_, index) => (
//           <Grid item key={index}>
//             <Box
//               component="span"
//               fontSize="70px"
//               sx={{ cursor: "pointer" }}
//             >
//               {getRandomEmoji()}
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default IngredientIcons;
