
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Profile() {
  let userInSession=JSON.parse(sessionStorage.getItem('connectedUser'));
  console.log(userInSession);
  
  
  return (
    <Card>
      
      {/* <CardContent>
        <Typography variant="h5" component="div">
          {userInSession}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Email: {email}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Address: {address}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Birth Date: {birthDate}
        </Typography>
        <Button variant="contained" onClick={onUpdateClick}>
          Update
        </Button>
        <Button variant="contained" onClick={onToGameClick}>
          To the Game
        </Button>
        <Button variant="contained" onClick={onDisconnectClick}>
          Disconnect
        </Button>
      </CardContent> */}
    </Card>
  )
}






