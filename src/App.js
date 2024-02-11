import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Dashbord from "./pages/dashboard/Dashbord";
import Customer from "./pages/custemer/Customer";
import Shoping from "./pages/shoping/Shoping";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/eccomerece" element={<Login />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/custemer" element={<Customer />} />
        <Route path="/shop" element={<Shoping />} />
      </Routes>
    </>
  );
}

export default App;
