import {useState, useEffect} from 'react';
import './App.css';
import { getBookings } from './Services/bookings_services';
import BookingsGrid from './Components/bookingsGrid';


function App() {

const [bookings, setBookings] = useState([]);
useEffect(() =>{
  getBookings()
  .then((data) => {
    console.log('this is data in app.js', data)
    setBookings(data)
  })
}, [])



  return (
    <div className="App">
      <h1>Very Excellent Bookings App</h1>
      {/* <BookingForm/> */}
      <BookingsGrid bookings={bookings}/>
    </div>
  );
}

export default App;
