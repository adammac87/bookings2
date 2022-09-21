import { useState } from "react"
import { postBooking } from "../Services/bookings_services"

const BookingForm = (({addBooking}) => {

    const [formData, setFormData] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();
        formData
        formData["guestName"] = formData.guestName;
        formData["guestEmail"] = formData.guestEmail;
        formData["isCheckedIn"] = formData.isCheckedIn;
        postBooking(formData).then((data) =>
        addBooking(data));
        
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }


    return (
        
            <form className="" onSubmit={handleSubmit} method="post">
                <label htmlFor="guestName">Guest Name:</label>
                <input onChange={onChange} type="text" id="guestName" required />

                <label htmlFor="guestEmail">Email:</label>
                <input onChange={onChange} type="email" id="guestEmail" required />

                <label htmlFor="isCheckedIn">Checked in?</label>
                <input onChange={onChange} type="checkbox" id="isCheckedIn" />

    

                <input type="submit" value="Save" id="save" />
            </form>
        
            )});


            export default BookingForm;