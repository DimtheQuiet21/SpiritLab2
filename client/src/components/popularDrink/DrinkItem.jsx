import { Typography, Divider } from "@mui/material";

// This component is a list of DrinkItem components. It maps over the drinkData array and renders a DrinkItem for each item in the array(which will be coming from the database). It also passes the hoveredIndex and setHoveredIndex functions to each DrinkItem component which is used to display the ingredients when the mouse hovers over the drink name.
function DrinkItem({ drink, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Typography variant="h6" component="h3">
        {drink.name} 
      </Typography>
      {isHovered && (
        <div>
          <ul>
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Typography variant="body1" color="gray">
                  {ingredient}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Divider sx={{ backgroundColor: "#2c2c2c", margin: "10px 0" }} />
    </li>
  );
}

export default DrinkItem;
