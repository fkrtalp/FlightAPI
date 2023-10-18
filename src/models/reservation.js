"use strict";

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "firstName": "test",
    "lastName": "1234",
    "gender": "male",
    "email": "test@site.com",
    "createdId": "id",
}
/* ------------------------------------------------------- */
// flight Model:

const reservationSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },

    passengers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Passenger",
      },
    ],

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "reservations", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Reservation", reservationSchema);
