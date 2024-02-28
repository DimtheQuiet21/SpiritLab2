import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_USER_FAVORITE_DRINKS } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_FAVORITE_DRINK } from "../utils/mutations";
import Auth from "../utils/auth";

const Profile = () => {
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;

  // Fetch user's favorite drinks
  const { data, loading, error, refetch } = useQuery(GET_USER_FAVORITE_DRINKS, {
    variables: { userId: userId || "" },
    skip: !userId,
  });

  const [removeFavoriteDrink] = useMutation(REMOVE_FAVORITE_DRINK);

  if (!userId) {
    return (
      <div
        style={{
          backgroundColor: "lightgrey",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p>Either log in or sign up dude..... you got liquor to drink</p>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const favoriteDrinks = data.userFavorites || [];

  const handleRemoveFavorite = async (drinkName) => {
    try {
      await removeFavoriteDrink({
        variables: { userId: userId, drink: drinkName },
      });
      // After removing, refetch the user's favorite drinks to update the list
      refetch();
    } catch (error) {
      console.error("Failed to remove drink from favorites", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {userId ? (
        <>
          {favoriteDrinks.length > 0 ? (
            <div>
              <h2>Favorite Drinks</h2>
              <ul>
                {favoriteDrinks.map((drink, index) => (
                  <li key={index}>
                    <h3>{drink.name}</h3>
                    <button onClick={() => handleRemoveFavorite(drink.name)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <p>No favorite drinks yet.</p>
            </div>
          )}
        </>
      ) : (
        <p>Either log in or sign up dude..... you got liquor to drink</p>
      )}
    </div>
  );
};

export default Profile;
