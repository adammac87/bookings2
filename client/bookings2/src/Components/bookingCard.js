const BookingCard = ({booking}) => {


    return(
        <>
        <h2>Booking info</h2>
            <p>Guest: {booking.guestName}</p>
            <p>Email: {booking.guestEmail}</p>
            <p>checked in: {booking.checked_in}</p>
        </>
     )
}

export default BookingCard