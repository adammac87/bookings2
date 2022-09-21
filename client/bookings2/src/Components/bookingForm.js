import { useState } from "react"
import { postBooking } from "../Services/bookings_services"

const BookingForm = (({ addBooking }) => {


    const [guestName, setGuestName] = useState("")
    const [guestEmail, setGuestEmail] = useState("")
    const [isCheckedIn, setIsCheckedIn] = useState("off")


    const handleGuestNameChange = event => setGuestName(event.target.value)
    const handleGuestEmail = event => setGuestEmail(event.target.value)
    const handleIsCheckedIn = event => setIsCheckedIn(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = {
            guestName,
            guestEmail,
            isCheckedIn
        }

        postBooking(booking)
            .then(result => addBooking(result))

        setGuestName("")
        setGuestEmail("")
        setIsCheckedIn("off")
    }






    return (

        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="guestName">Guest Name:</label>
            <input onChange={handleGuestNameChange} value={guestName} type="text" id="guestName" required />

            <label htmlFor="guestEmail">Email:</label>
            <input onChange={handleGuestEmail} value={guestEmail} type="email" id="guestEmail" required />

            <label htmlFor="isCheckedIn">Checked in?</label>
            <input onChange={handleIsCheckedIn} value={isCheckedIn} type="checkbox" id="isCheckedIn" />



            <input type="submit" value="Save" id="save" />
        </form>

    )
});


export default BookingForm;