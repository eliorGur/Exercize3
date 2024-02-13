
import React from 'react';
import Register from './Register';
import RegisterFields from './RegisterFields';

import { useState } from 'react';

// const users=[];

export default function Main() {

 const [usersList, setusersList] = useState([])

 //gets user from child and adds it to the list
 const getUserFromChild =(user)=>{

    console.log('Main- new user:',user);
    let newUsers=[...usersList, user];
    console.log('Main- updated user list', newUsers);

    setusersList (newUsers);

 }

    return (
        <div>
            {console.log('Main- in the render userslist:',usersList)}
            <Register usersList={usersList} />
             {/* the input fields */} <br />
             <RegisterFields send2Parent={getUserFromChild}/>
             
        </div>
    )
}
