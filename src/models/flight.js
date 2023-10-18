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

const flightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      trim: true,
      required: true,
    },

    airline: {
      type: String,
      trim: true,
      required: true,
    },
    departure: {
      type: Number,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    arrival: {
      type: Number,
      required: true,
    },

    arrivalDate: {
      type: Date,
      required: true,
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "flights", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Flight", flightSchema);
