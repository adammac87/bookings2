import {useState, useEffect} from 'react';
import './App.css';

import { getBookings, deleteBooking as apiDeleteBooking } from './Services/bookings_services';
import BookingsGrid from './Components/bookingsGrid';
import BookingForm from './Components/bookingForm';


function App() {

const [bookings, setBookings] = useState([]);
useEffect(() =>{
  getBookings()
  .then((data) => {
    console.log('this is data in app.js', data)
    setBookings(data)
  })
}, [])

const addBooking = (booking) => {
  let temp = bookings.map(booking => booking);
  temp.push(booking);
  setBookings(temp)
}

const deleteBooking = (id) => {
  apiDeleteBooking(id).then(()=>{
    let temp = bookings.map(g=>g);
    const toDel = bookings.map(g =>g._id).indexOf(id);
    temp.splice(toDel, 1);
    setBookings(temp);
  })

}



  return (
    <div className="App">
      <h1>Very Excellent Bookings App</h1>
      <BookingForm addBooking={addBooking}/>
      <BookingsGrid bookings={bookings}  deleteBooking={deleteBooking}/>
    </div>
  );
}

export default App;
