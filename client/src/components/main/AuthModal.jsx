import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Tab, Tabs } from '@mui/material';
import { LOGIN_USER, ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const AuthModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({ email: '', userName: '', password: '' });
    const [isLoginTab, setIsLoginTab] = useState(true); // This will be how we switch between the login and signup tabs
    const [loginUser, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_USER);
    const [addUser, { loading: signupLoading, error: signupError }] = useMutation(ADD_USER);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async () => {
        try {
            const response = await loginUser({
                variables: {
                    email: formData.email,
                    password: formData.password,
                },
            });

            Auth.login(response.data.login.token);
            onClose(); 
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSignupSubmit = async () => {
        try {
            const { data } = await addUser({
                variables: {
                    email: formData.email,
                    userName: formData.userName,
                    password: formData.password
                }
            });

            Auth.login(data.addUser.token);
            onClose(); 
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#0091ff', boxShadow: 24, p: 4, minWidth: 300, borderRadius: "50px" }}>
                <Tabs value={isLoginTab ? 0 : 1}  // The way the tabs are set up, 0 is the index of the login tab and 1 is the index of the signup tab
                    onChange={() => setIsLoginTab(!isLoginTab)}>
                    <Tab label="Log In"  />
                    <Tab label="Sign Up" />
                </Tabs>
                <Typography variant="h5" gutterBottom sx={{marginTop: "1rem"}}>
                    {/* simply switches the title */}
                    {isLoginTab ? 'Log In' : 'Sign Up'} 
                </Typography>
                <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
                {!isLoginTab && <TextField label="Username" name="userName" value={formData.userName} onChange={handleChange} fullWidth margin="normal" />}
                <TextField label="Password" name="password" value={formData.password} onChange={handleChange} fullWidth margin="normal" type="password" />
                <Button variant="contained" color="primary" onClick={isLoginTab ? handleLoginSubmit : handleSignupSubmit} fullWidth>
                    {isLoginTab ? 'Log In' : 'Sign Up'}
                </Button>
            </Box>
        </Modal>
    );
};

export default AuthModal;
