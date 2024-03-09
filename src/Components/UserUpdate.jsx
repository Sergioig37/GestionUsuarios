import React from "react";
import { Container } from "@mui/material";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {Avatar} from "@mui/material";

export const UserUpdate = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [apellido, setApellido] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState("");

  

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setApellido(result.user.lname);
        setAvatar(result.user.avatar);
      });
  },[]);

  const updateUser = () => {
    var data = {
      id: id,
      lname: apellido
    };
  
    fetch('https://www.melivecode.com/api/users/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      navigate("/");
    
  };
  


  return (
    <>
    
    <Container
    maxWidth="xs"
    sx={{
      marginTop: "8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Avatar src={avatar}></Avatar>
    <Typography sx={{ p: 5 }} component="h1" variant="h5">
      Datos del nuevo usuario:
    </Typography>
    <form sx={{ width: "100%", marginTop: "3" }} onSubmit={updateUser} action="PUT">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            variant="outlined"
            required
            label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            autoFocus
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className="submit"
      >
        Actualizar Usuario
      </Button>
    </form>
  </Container>
  </>
  )
}
