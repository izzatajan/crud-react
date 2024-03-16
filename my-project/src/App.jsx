import Edit from "./Components/Edit";
import UserList from "./Components/UserList"
import AddUser from "./Components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  )
}