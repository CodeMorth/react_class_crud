import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddUserPage } from "../app/AddUserPage";
import { ViewAllUsers } from "../app/ViewAllUsers";
import { UserByIdPage } from "../app/UserByIdPage";

export const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="NavBar">
        <a href="/">Agregar Usuario</a>
        <a href="/viewUsers">Todos los Usuarios</a>
        {/* <a href="/viewUsers">Usuario por Id</a> */}
        {/* <a href="/viewUsers">Editar Usuario</a> */}
        {/* <a href="/viewUsers">Eliminar Usuario</a> */}
      </nav>
      <Routes>
        <Route path="/" element={<AddUserPage/>} />
        <Route path="/viewUsers" element={<ViewAllUsers/>} />
        <Route path="/viewUsers/:id" element={<UserByIdPage/>} />
        {/* <Route path="/editUser/:id" element={<h1>Editar Usuario</h1>} /> */}
        {/* <Route path="/deleteUser/:id" element={<h1>Eliminar Usuario</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
