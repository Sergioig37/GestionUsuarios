import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserCreate } from "./Components/UserCreate";
import {NavBar} from "./Components/NavBar"
import { UserList } from "./Components/UserList";
import usersArray from "./js/UsersArrayV1";
import { useState } from "react";

export const App = () => {

  const [users, setUsers] = useState(usersArray);

  const addUser = (user) => {
    setUsers([user, ...users]);
  }


  //   fetch('https://www.melivecode.com/api/users/delete', {
  //   method: 'DELETE',
  //   headers: {
  //     Accept: 'application/form-data',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  // var data = {
  //   'id': id
  // }

  return (
    <>
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<UserList users={users}/>}></Route>
          <Route path="create" element={<UserCreate users={users} onAddUser={addUser}/>}></Route>  
          <Route path="/update/:id" element={<UserCreate/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
