use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Helen",
        guestEmail: "Helen@reallycoolemail.com",
        isCheckedIn: false
    },
    {
        guestName: "Adam",
        guestEmail: "Adam@reallycoolemail.com",
        isCheckedIn: true
    },
    {
        guestName: "Mhairi",
        guestEmail: "Mhairi@reallycoolemail.com",
        isCheckedIn: false
    },
])