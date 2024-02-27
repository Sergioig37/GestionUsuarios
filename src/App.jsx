import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserCreate } from "./Components/UserCreate";
import { NavBar } from "./Components/NavBar";
import { UserList } from "./Components/UserList";
import usersArray from "./js/UsersArrayV1";
import { useState } from "react";

export const App = () => {

  const [users, setUsers] = useState(usersArray);

  const addUser = (user) => {
    setUsers([user, ...users]);
  }

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList users={users}/>}></Route>
          <Route path="create" element={<UserCreate users={users} onAddUser={addUser}/>}></Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
};
