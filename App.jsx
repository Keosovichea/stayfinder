import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useApp } from './context/AppContext.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Hotels from './pages/Hotels.jsx'
import HotelDetails from './pages/HotelDetails.jsx'
import Booking from './pages/Booking.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Auth from './pages/Auth.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Admin from './pages/Admin.jsx'

function AdminGate({ children }) {
  const { user } = useApp()
  return user?.role === 'admin' ? children : <Navigate to="/login" replace state={{ from: '/admin' }} />
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:hotelId" element={<HotelDetails />} />
          <Route path="/booking/:hotelId" element={<Booking />} />
          <Route path="/confirmation/:bookingId" element={<Confirmation />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth register />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/admin" element={<AdminGate><Admin /></AdminGate>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer"><Link className="brand" to="/">stayfinder<span>.</span></Link><span>Find your somewhere.</span><span>Made for the way you travel.</span></footer>
    </>
  )
}