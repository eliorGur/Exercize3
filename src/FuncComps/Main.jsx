
import React from 'react';
import Register from './Register';
import RegisterFields from './RegisterFields';

import { useState } from 'react';

export default function Main() {

 const [usersList, setUsersList] = useState([])

 //gets user from child and adds it to the list
 const getUserFromChild =(user)=>{

    console.log('Main- new user:',user);
    let newUsers=[...usersList, user];
    console.log('Main- updated user list', newUsers);

    //add to list
    setUsersList (newUsers);
 }

//filter for delete 

 //func for admin login 
//  function login(username, pass){
//     if(is admin)
//   }


//עבודה עם הלוקל סטורג
// useEffect(()=>{
//     //load all users from local
//   },[])
 
//   useEffect(()=>{
//     //update local storage
//   },[usersList])

    return (
        <div>
            {console.log('Main-return userslist:',usersList)}
            <Register usersList={usersList} />
             {/* the input fields */} <br />
             <RegisterFields send2Parent={getUserFromChild}/>
             
        </div>
    )
}
