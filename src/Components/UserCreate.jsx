import React from "react";
import { Container } from "@mui/material";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";

export const UserCreate = () => {

  


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
        <Typography sx={{ p: 5 }} component="h1" variant="h5">
          Datos del nuevo usuario:
        </Typography>
        <form sx={{ width: "100%", marginTop: "3" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                label="Nombre"
                onChange={(e) => setFname(e.target.value)}
                autoFocus
              />
              {/* … resto de textfields*/}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Crear Usuario
          </Button>
        </form>
      </Container>
    </>
  );
};
