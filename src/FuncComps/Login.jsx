
import React, { useState, } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';


export default function Login(props) {

    const [userName, setUserName] = useState({ name: '', err: false, errMsg: '' });
    const [password, setPassword] = useState({ pw: '', err: false, errMsg: '' });
    //get users list from Main
    const users = props.users;


    //validation for user name
    const validateUserName = (e) => {
        let text = e.target.value;
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]{1,60}$/;
        if (!regex.test(text)) {
            setUserName((prev) => { return { ...prev, err: true, errMsg: 'Invalid input! Only English letters, numbers, and specific special characters allowed. Maximum 60 characters.' } });
        } else {
            setUserName((prev) => { return { ...prev, name: text, err: false, errMsg: '' } });
        }
    };

    //validation for password
    const validatePassword = (e) => {
        let text = e.target.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]).{7,12}$/;
        if (!regex.test(text)) {
            setPassword((prev) => { return { ...prev, err: true, errMsg: 'Invalid password! Password must contain between 7 and 12 characters, at least one special character, one uppercase letter, and one number.' } });
        } else {
            setPassword((prev) => { return { ...prev, pw: text, err: false, errMsg: '' } });
        }
    };

    //Login user to system
    const loginUser = () => {
        //check if users gets from Main properly
        console.log(users);

        //check that the fileds valid before continuing
        if (userName.err) {
            console.log('cant login with invalid user name');
            return;
        }
        if (password.err) {
            console.log('cant login with invalid password');
            return;
        }
        // Check if the users array is not empty
        if (users.length > 0) {
                       // Check if a user with the provided username and password exists
            let founduser = users.find(user => user.userName == userName.name && user.userPassword == password.pw);//finds a user with the matching details
            if (founduser) {
                console.log('User with matching username and password exists.');
                // save in session storage
                sessionStorage.setItem('connectedUser',JSON.stringify(founduser));
            } else {
                console.log('User with matching username and password does not exist in the array.');
            }
        } else {
            //users array is empty
            console.log('You have to register first');
        }
    }

    return (
        <>
            {/* {console.log(userName.name)}
            {console.log(password.pw)} */}

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{
                    bgcolor: 'purple',
                    m: 1
                }}>
                </Avatar>
                <Typography compomemt='h'>Login</Typography>
            </Box>

            <Box>
                <br />
                <TextField
                    label="User name"
                    type="text"
                    variant="standard"
                    color='secondary'
                    required
                    value={userName.name}
                    onChange={(e) => setUserName({ ...userName, name: e.target.value })}
                    onBlur={validateUserName}
                    error={userName.err}
                    helperText={userName.errMsg}
                    inputProps={{ maxLength: 60 }}
                />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    color='secondary'
                    margin='normal'
                    required
                    value={password.pw}
                    onChange={(e) => setPassword({ ...password, pw: e.target.value })}
                    onBlur={validatePassword}
                    error={password.err}
                    helperText={password.errMsg}
                />
                <br /> <br />
                <Button
                    type='login'
                    variant="outlined"
                    endIcon={<SendIcon />}
                    color="secondary"
                    onClick={loginUser}
                >
                    Login
                </Button>

            </Box>
        </>
    )
}

