import "./App.css";
import { Routes, Route } from "react-router-dom";
import RouteLayout from "./layouts/RouteLayout";
import Dashboard, { taskLoader } from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Dashboard />} ></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
