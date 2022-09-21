const BookingCard = ({booking, deleteBooking}) => {


    return(
        <>
        <h2>Booking info</h2>
            <p>Guest: {booking.guestName}</p>
            <p>Email: {booking.guestEmail}</p>
            <p>checked in: {booking.isCheckedIn}</p>
            <button onClick={()=>deleteBooking(booking._id)}>Delete</button>
        </>
     )
}

export default BookingCard