import React, { useState, useEffect } from 'react';

import Register from './Register';
import RegisterFields from './RegisterFields';
import Login from './Login';
import Profile from './Profile';
import EditDetails from './EditDetails';
import SystemAdmin from './SystemAdmin';

export default function Main() {

    const [usersList, setUsersList] = useState([]);

    //gets user from child and adds it to the list
    const getUserFromChild = (user) => {
        let newUsers = [...usersList, user];
        // console.log('Main- updated user list', newUsers);

        //add to list
        setUsersList(newUsers);
    }

    const getLoginUserDetails = (email,password) => {
        
    }

    //Check local storage on component mount- only when the page loaded
    useEffect(() => {
        const usersFromLocalStorage = localStorage.getItem('usersList');
        //debugger
        if (usersFromLocalStorage) {
            setUsersList(JSON.parse(usersFromLocalStorage));
        }
    }, []);

    //runs foreach update in the usersList
    useEffect(() => {
        localStorage.setItem('usersList', JSON.stringify(usersList));
    }, [usersList]);



    //func for admin login 
    //  function login(username, pass){
    //     if(is admin)
    //   }

    console.log('Main-return userslist:', usersList);

    return (
        <div>

            <Register usersList={usersList} />
            <br />
            <RegisterFields send2Parent={getUserFromChild} />

            <Login users={usersList} />

            <br /><br />
            <Profile/>

            {/* <EditDetails/> */}

            {/* <SystemAdmin/> */}
        </div>
    )
}
