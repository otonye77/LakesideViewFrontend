import AddRoom from "./components/room/AddRoom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ExistingRooms from "./components/room/ExistingRooms.jsx";
import Home from "./components/home/Home.jsx";
import EditRoom from "./components/room/EditRoom.jsx";
import BookingSuccess from "./components/bookings/BookingSuccess"
import Checkout from "./components/bookings/Checkout.jsx";
import Admin from "./components/admin/Admin.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-room/:roomId" element={<EditRoom />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} /> 
        <Route path="/book-room/:roomId" element={<Checkout />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
