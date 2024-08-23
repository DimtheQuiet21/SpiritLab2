import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GET_ALL_FORMULAS } from "../../../utils/queries";
import { LIKE_COMMENT } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import { useGlobalContext } from "../../../globalProvider";

const LikeCommentButton = ({
  commentId,
  initialLikeCount,
  isInitiallyLiked,
  likedByOthers 
}) => {
  const { globalState, setGlobalState } = useGlobalContext(); 
  const [likeComment] = useMutation(LIKE_COMMENT, {
    refetchQueries: [{ query: GET_ALL_FORMULAS }],
  });
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(isInitiallyLiked);

  useEffect(() => {
    if (!userId){ 
        setIsLiked(false);
        return;
    }

    // Ensure globalState.favorites is an array before using it
    const favorites = globalState.favorites || [];

    // Check if the comment is liked by the current user from global state
    if (favorites.includes(commentId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [globalState.favorites, commentId, userId]);

  const handleLikeComment = async () => {
    if (!userId) {
        // If user is not logged in, do nothing
        return;
    }

    try {
      const { data } = await likeComment({
        variables: { userId, commentId },
      });

      if (data.likeComment) {
        setLikeCount(data.likeComment.likeCount);

        // Update the global state with the liked status
        const updatedFavorites = isLiked
          ? (globalState.favorites || []).filter((id) => id !== commentId)
          : [...(globalState.favorites || []), commentId];

        setGlobalState({ ...globalState, favorites: updatedFavorites });
        setIsLiked(!isLiked);
      }
    } catch (err) {
      console.error("Error liking/unliking the comment:", err);
    }
  };

  return (
    <>
      <IconButton 
      onClick={handleLikeComment}
      sx={{ color: isLiked || likedByOthers ? 'var(--main-coral)' : 'var(--main-blue)' }}
      >
        {isLiked || likedByOthers ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <span>{likeCount}</span>
    </>
  );
};

export default LikeCommentButton;
