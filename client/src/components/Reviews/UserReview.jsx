import React, { useState } from 'react';
import { Typography, Box, Avatar, IconButton, TextField, Button, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Auth from '../../utils/auth';
import LikeCommentButton from './LikeComment/LikeCommentButton';

const UserReview = ({ reviews, handleCommentDelete, handleCommentEdit }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedComment, setEditedComment] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentReviewId, setCurrentReviewId] = useState(null);
  const [replyMode, setReplyMode] = useState(null);
  const [replyText, setReplyText] = useState('');

  const startEditing = (reviewId, post) => {
    setEditMode(reviewId);
    setEditedComment(post);
  };

  const submitEdit = async (reviewId) => {
    await handleCommentEdit(reviewId, editedComment);
    setEditMode(null);
    setEditedComment('');
  };

  const handleMenuClick = (event, reviewId) => {
    setAnchorEl(event.currentTarget);
    setCurrentReviewId(reviewId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentReviewId(null);
  };

  const handleEdit = () => {
    const review = reviews.find(r => r._id === currentReviewId);
    if (review) {
      startEditing(currentReviewId, review.post);
    }
    handleMenuClose();
  };

  const handleDelete = () => {
    if (currentReviewId) {
      handleCommentDelete(currentReviewId);
    }
    handleMenuClose();
  };

  const handleReplyClick = (reviewId) => {
    setReplyMode(reviewId);
    setCurrentReviewId(reviewId);
  };

  const handlePostReply = () => {
    // Logic for posting reply will be implemented later
    console.log('Reply posted:', replyText);
    setReplyText('');
    setReplyMode(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {reviews.map((review) => (
        <Box
          key={review._id}
          display="flex"
          alignItems="center"
          p={2}
          borderBottom="1px solid #ddd"
          flexDirection="column"
          textAlign="left"
        >
          <Box display="flex" alignItems="center" width="100%">
            <Avatar alt={review.userName} sx={{ mr: 2 }} />
            <Box flex="1">
              <Typography variant="subtitle1" fontWeight="bold">
                {review.userName}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {/* {new Date(review.timestamp).toLocaleDateString()} */}
              </Typography>
              {editMode === review._id ? (
                <Box>
                  <TextField
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => submitEdit(review._id)}
                    sx={{ marginTop: "10px" }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setEditMode(null)}
                    sx={{ marginTop: "10px", marginLeft: "10px" }}
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Typography variant="body1">{review.post}</Typography>
              )}
            </Box>
            {Auth.loggedIn() && (  // Only show the MoreVertIcon if the user is logged in
              <Box>
                <IconButton onClick={(e) => handleMenuClick(e, review._id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && currentReviewId === review._id}
                  onClose={handleMenuClose}
                >
                  {Auth.getProfile().data.userName === review.userName ? (
                    <Box>
                      <MenuItem key="edit" onClick={handleEdit}>Edit</MenuItem>
                      <MenuItem key="delete" onClick={handleDelete}>Delete</MenuItem>
                    </Box>
                  ) : null}
                  <MenuItem key="reply" onClick={() => handleReplyClick(review._id)}>Reply</MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
          
          {/* This is a placeholder for now. The box for a user to reply to a post will appear but nothing will happen if a user press submit  */}
          {replyMode === review._id && (
            <Box mt={2} ml={5}>
              <TextField
                variant="outlined"
                multiline
                rows={2}
                fullWidth
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handlePostReply}
                sx={{ marginTop: "10px" }}
              >
                Post Reply
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setReplyMode(null)}
                sx={{ marginTop: "10px", marginLeft: "10px" }}
              >
                Cancel
              </Button>
            </Box>
          )}
          <Box display="flex" alignItems="center" mt={1} width="100%">
            <LikeCommentButton
              commentId={review._id}
              initialLikeCount={review.likeCount}
              isInitiallyLiked={review.isLiked}
            />
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default UserReview;
