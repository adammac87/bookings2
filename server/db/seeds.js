use bookings_hub;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Helen",
        guestEmail: "Helen@reallycoolemail.com",
        checked_in: false
    },
    {
        guestName: "Adam",
        guestEmail: "Adam@reallycoolemail.com",
        checked_in: true
    },
    {
        guestName: "Mhairi",
        guestEmail: "Mhairi@reallycoolemail.com",
        checked_in: false
    },
])