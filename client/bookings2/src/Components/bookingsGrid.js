import BookingCard from "./bookingCard"

const BookingsGrid = ({bookings}) => {
    if (!bookings) return <h2>Loading, plz wait ta</h2>
    const bookingsList = bookings.map((booking)=>{
        return (
            <>
                <BookingCard booking={booking} key={booking._id}/>
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