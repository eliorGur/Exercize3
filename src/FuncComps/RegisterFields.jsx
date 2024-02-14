import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete, Box, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function RegisterFields(props) {
    const cities = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba', 'Netanya', 'Eilat', 'Ashdod', 'Rishon LeZion'];

    const [user, setUser] = useState({
        userName: '',
        userPassword: '',
        userImage: '',
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        UserDofBirth: '',
        userCity: '',
        userStreet: '',
        userHomeNum: '',
    });

    const [userError, setUserError] = useState({}); //user.name:true|false, ...כדי לגשת
    const [userErrorMsg, setUserErrorMsg] = useState({});


    //validation for user name
    const validateUserName = (e) => {
        let text = e.target.value;
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]{0,60}$/;
        // console.log('userName tset:',userName);
        // console.log(regex.test(userName));
        if (!regex.test(text)) {
            setUserError(prev => {return {...prev, userName: false,}})
            setUserErrorMsg((prev)=>{return {...prev, userName:'Invalid input! Only English letters, numbers, and specific special characters allowed. Maximum 60 characters.' }});
        } else {
            setUser(prev => { return { ...prev, userName: text } });
            setUserError(prev => {return {...prev, userName: true,}})
            setUserErrorMsg('');
        }
    };

    //validation for password
    const validatePassword = (e) => {
        let text = e.target.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]).{7,12}$/;

        console.log('pass test: ', regex.test(text));

        if (!regex.test(text)) {
            setUserError(prev => {return {...prev, userPassword: false,}})
            setUserErrorMsg((prev)=>{return {...prev, userPassword:'Invalid password! Password must contain between 7 and 12 characters, at least one special character, one uppercase letter, and one number.'}});
        } else {
            setUser(prev => { return { ...prev, userPassword: text } });
            setUserError(prev => {return {...prev, userPassword: true,}})
            setUserErrorMsg('');
        }
    };

    //validation for second password input
    const validatePassword2 = (e) => {
        if (e.target.value !== user.userPassword) {
            //setPasswordError2('Passwords are not the same. currecet your password');
            //setPassword2('');
        } else {
            //setPasswordError2('');
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
                        value={user.userName}
                        onBlur={validateUserName}
                        error={!userError.userName}
                        helperText={userErrorMsg.userName}
                        inputProps={{ maxLength: 60 }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                        color='secondary'
                        required
                        value={user.userPassword}                        
                        onBlur={validatePassword}
                        error={!userError.userPassword}
                        helperText={userErrorMsg.userPassword}
                    />

                    <TextField
                        label="Validate password"
                        type="password"
                        variant="standard"
                        color='secondary'
                        // autoComplete="current-password"
                        required
                        value={password2}
                        onBlur={validatePassword2}
                        error={!passwordError2}
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
                        inputProps={{ min: 1 }}
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
