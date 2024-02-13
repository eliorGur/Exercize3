import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete, Box, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function RegisterFields(props) {
    const cities = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba', 'Netanya', 'Eilat', 'Ashdod', 'Rishon LeZion'];

    //flag
    // const [validFildes, setValidFildes] = useState(true);

    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [password2, setPassword2] = useState('');
    const [passwordError2, setPasswordError2] = useState('');


    //validation for user name
    const validateUserName = () => {
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]{0,60}$/;
        // console.log('userName tset:',userName);
        // console.log(regex.test(userName));
        if (!regex.test(userName)) {
            setUserNameError('Invalid input! Only English letters, numbers, and specific special characters allowed. Maximum 60 characters.');
            setUserName('');
        } else {
            setUserNameError('');
        }
    };

    //validation for password
    const validatePassword = () => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]).{7,12}$/;

        console.log('pass test: ', regex.test(password));

        if (!regex.test(password)) {
            setPasswordError('Invalid password! Password must contain between 7 and 12 characters, at least one special character, one uppercase letter, and one number.');
            setPassword('');
        } else {
            setPasswordError('');
        }
    };

    //validation for second password input
    const validatePassword2 = () => {
        if (password2 !== password) {
            setPasswordError2('Passwords are not the same. currecet your password');
            setPassword2('');
        } else {
            setPasswordError2('');
        }
    };


    //creating user if all the inputs valid     
    const registerUser = () => {
        // console.log('flag ', validFildes);

        if (userName == '', password == '', password2 == '') {
            return;
        }


        let user = { userName, password, };
        //send user obj to add is to users list
        props.send2Parent(user);

        clearFileds;
    }

    //clear all the fildes
    const clearFileds = () => {

        setUserName('');
        setPassword('');
        setPassword2('');
    }

    return (
        <>
            <Box>
                <FormControl fullWidth sx={{ mb: '1rem' }}>
                    <TextField
                        label="User name"
                        type="text"
                        variant="standard"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onBlur={validateUserName}
                        error={!!userNameError}
                        helperText={userNameError}
                        inputProps={{ maxLength: 60 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        color='secondary'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword}
                        error={!!passwordError}
                        helperText={passwordError}
                    />

                    <TextField
                        label="Validate password"
                        type="password"
                        variant="standard"
                        color='secondary'
                        // autoComplete="current-password"
                        required
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        onBlur={validatePassword2}
                        error={!!passwordError2}
                        helperText={passwordError2}
                    />
                    <br />
                    <TextField
                        label="Upload image"
                        type="file"
                        variant="outlined"
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />

                    <TextField
                        label="First name"
                        type="text"
                        variant="standard"
                        color='secondary'
                        required
                    //   value={firstName}
                    // onChange={(e) => setUserName(e.target.value)}
                    // onBlur={validateUserName}
                    // error={!!userNameError}
                    // helperText={userNameError}
                    />

                    <TextField
                        label="Last name"
                        type="text"
                        variant="standard"
                        color='secondary'
                        required
                    //   value={lastName}
                    // onChange={(e) => setUserName(e.target.value)}
                    // onBlur={validateUserName}
                    // error={!!userNameError}
                    // helperText={userNameError}
                    />

                    <TextField
                        label="Email"
                        type="email"
                        variant="standard"
                        color='secondary'
                        required
                    //   value={lastName}
                    // onChange={(e) => setUserName(e.target.value)}
                    // onBlur={validateUserName}
                    // error={!!userNameError}
                    // helperText={userNameError}
                    />

                    <br />
                    <TextField
                        label="Date of birth"
                        type="date"
                        variant="outlined"
                        color='secondary'
                        required
                        //   value={lastName}
                        // onChange={(e) => setUserName(e.target.value)}
                        // onBlur={validateUserName}
                        // error={!!userNameError}
                        // helperText={userNameError}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Autocomplete
                        options={cities}
                        renderInput={(params) => (
                            <TextField
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                                {...params}
                                label="City"
                                type="text"
                                variant="standard"
                                color='secondary'
                                required
                            />
                        )}
                    />

                    <TextField
                        label="Street name"
                        type="text"
                        variant="standard"
                        color='secondary'
                        required
                    //   value={firstName}
                    // onChange={(e) => setUserName(e.target.value)}
                    // onBlur={validateUserName}
                    // error={!!userNameError}
                    // helperText={userNameError}
                    />

                    <TextField
                        label="Number"
                        type="number"
                        variant="standard"
                        color='secondary'
                        required         
                        inputProps={{min:1}}        
                    />

                    <br />
                    <Button
                        id="submitBTN"
                        type='submit'
                        variant="outlined"
                        endIcon={<SendIcon />}
                        color="secondary"
                        onClick={registerUser}
                        // disabled={}
                    >
                        Register
                    </Button>

                </FormControl>
            </Box>
        </>
    );
}
