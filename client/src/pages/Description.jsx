import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   IconButton,
//   Tabs,
//   Tab,
//   Button,
//   CircularProgress,
//   TextField,
// } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_FORMULAS } from "../utils/queries";
import { ADD_COMMENT_TO_FORMULA, REMOVE_COMMENT_FROM_FORMULA, EDIT_COMMENT_ON_FORMULA, ADD_REPLY_TO_COMMENT, REMOVE_REPLY_FROM_COMMENT } from "../utils/mutations";
import { useGlobalContext } from "../globalProvider";
import Auth from "../utils/auth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddToFavoritesButton from "../components/addFavorites/AddToFavoritesButton";
import UserReview from "../components/Reviews/UserReview";
import LikeDislikeButtons from "../components/Reviews/Like-Dislike/LikeDislikeButton";
import "../components/Search/FormulaDescription/DrinkPage.css";

const Description = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formula } = location.state || {};
  const { loading, error, data, refetch } = useQuery(GET_ALL_FORMULAS);
  const [addComment] = useMutation(ADD_COMMENT_TO_FORMULA);
  const [addReplyToComment] = useMutation(ADD_REPLY_TO_COMMENT);
  const [removeComment] = useMutation(REMOVE_COMMENT_FROM_FORMULA);
  const [removeReplyFromComment] = useMutation(REMOVE_REPLY_FROM_COMMENT);
  const [editComment] = useMutation(EDIT_COMMENT_ON_FORMULA);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [comment, setComment] = useState("");
  const { globalState, setGlobalState } = useGlobalContext();
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  const isFavorite = globalState.favorites?.includes(formula?.name); 

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  const drinkInfo = data.formulas.find((f) => f.name === formula?.name);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleGoToLab = () => {
    setGlobalState(formula);
    navigate("/lab", { state: { formula } });
  };

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to handle submitting a comment to the database
  const handleCommentSubmit = async () => {
    try {
      if (!comment.trim()) return;

      await addComment({
        variables: {
          userId,
          formulaId: drinkInfo._id,
          post: comment,
        },
      });

      refetch();
      console.log("Comment added successfully");
      setComment("");
      setShowCommentBox(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle submitting a reply to a comment
  const handleReplySubmit = async (commentId, replyComment) => {
    try {
      if (!replyComment.trim() || !commentId) {
        console.log("Error: Missing replyComment or commentId");
        return;
      }
  
      await addReplyToComment({
        variables: {
          userId,
          commentId,
          post: replyComment,
        },
      });
      
      refetch();
      console.log("Reply added successfully");
    } catch (err) {
      console.error("Error adding reply:", err);
    }
  };

  // Function to handle deleting a comment
  const handleCommentDelete = async (commentId) => {
    try {
      if (!userId) {
        console.error("Missing userId");
        return;
      }
  
      await removeComment({
        variables: {
          userId,
          commentId,
        },
      });
      
      refetch();
      console.log("Comment removed successfully");
    } catch (error) {
      console.error("Error removing comment:", error.message);
    }
  };
  
  // Function to handle editing a comment
  const handleCommentEdit = async (commentId, newPost) => {
    try {
      await editComment({
        variables: {
          userId,
          commentId,
          newPost,
        },
      });
      
      refetch();
      console.log("Comment edited successfully");
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle deleting a reply
  const handleReplyDelete = async (commentId, replyId) => {
    try {
      if (!userId) {
        console.error("Missing userId");
        return;
      }
  
      await removeReplyFromComment({
        variables: {
          userId,
          commentId,
          replyId,
        },
      });
      
      refetch();
      console.log("Reply removed successfully");
    } catch (error) {
      console.error("Error removing reply:", error.message);
    }
  };

  // Function to render the ingredients list
  const renderIngredientsList = () => {
    if (!drinkInfo) return null;

    return (
      <ul>
        {drinkInfo.alcohol && drinkInfo.alcohol.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
        {drinkInfo.liquid && drinkInfo.liquid.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
        {drinkInfo.garnish && drinkInfo.garnish.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
      </ul>
    );
  };


  return (
    <Box className='drinkCardBox'>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {formula?.name}
        </Typography>
      </Box>
      <Card className="drinkCard">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {userId && (
            <AddToFavoritesButton
              drinkName={drinkInfo?.name}
              userId={userId}
              isFavorite={isFavorite}
              onSuccess={() => {}}
            />
          )}
        </Box>
        <Box className="drinkCardIcon" sx={{ backgroundImage: `url('/assets/icons/${formula?.icon}')` }} />
      </Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5">{drinkInfo?.name}</Typography>
            <Typography variant="subtitle2">Concocted by: Spirit Labs</Typography>
          </Box>
          <Box>
            <LikeDislikeButtons
              userId={userId}
              formulaId={drinkInfo?._id}
              initialLikeCount={drinkInfo?.likeCount || 0}
              initialDislikeCount={drinkInfo?.dislikeCount || 0}
            />
          </Box>
        </Box>
      </CardContent>
      
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Ingredients" />
        <Tab label="Reviews" />
        <Tab label="Instructions" />
      </Tabs>
      <Box sx={{ padding: "20px" }}>
        {tabIndex === 0 && (
          <Box>
            {renderIngredientsList()}
            <Button variant="contained" color="primary" onClick={handleGoToLab} sx={{ width: "100%" }}>
              Modify Concoction in Lab
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6">Reviews</Typography>
            <UserReview reviews={drinkInfo?.comments || []} formulaId={drinkInfo?._id} handleCommentDelete={handleCommentDelete} handleCommentEdit={handleCommentEdit} handleReplySubmit={handleReplySubmit} handleReplyDelete={handleReplyDelete} />
            {userId && (
              <Box mt={2}>
                {!showCommentBox ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowCommentBox(true)}
                  >
                    Write a Review
                  </Button>
                ) : (
                  <Box>
                    <TextField
                      label="Write a review"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleCommentSubmit}
                      sx={{ marginTop: "10px" }}
                    >
                      Submit Review
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setShowCommentBox(false)}
                      sx={{ marginTop: "10px", marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
          <Typography variant="h6">Assembly:</Typography>
          {drinkInfo.assembly}
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default Description;