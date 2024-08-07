import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';

// Sample reviews data
const reviews = [
  {
    username: 'Woody Allen',
    review: 'This drink is unbelievably bussin! I recommend.',
    date: 'August 1, 2024',
  },
  {
    username: 'Alice Smith',
    review: 'Great taste and very refreshing.',
    date: 'August 2, 2024',
  },
  {
    username: 'Big John',
    review: 'Not bad, but I expected more flavor.',
    date: 'August 3, 2024',
  },
  {
    username: 'Carol Williams',
    review: 'Absolutely delicious! Will have it again.',
    date: 'August 4, 2024',
  },
];

const UserReview = () => {
  return (
    <div>
      {reviews.map((review, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          p={2}
          borderBottom="1px solid #ddd"
        >
          <Avatar alt={review.username} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">{review.username}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>{review.date}</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body1">{review.review}</Typography>
              <Box ml={1}>
                <Star color="primary" />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default UserReview;
