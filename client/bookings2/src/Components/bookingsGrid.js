import BookingCard from "./bookingCard"

const BookingsGrid = ({bookings, deleteBooking}) => {
    if (!bookings) return <h2>Loading, plz wait ta</h2>
    const bookingsList = bookings.map((booking)=>{
        return (
            <>
                <BookingCard booking={booking} key={booking._id} deleteBooking={deleteBooking}/>
            </>
        )
    })
    return(
        <>
        {bookingsList}
        </>
    )
    
}

export default BookingsGrid;