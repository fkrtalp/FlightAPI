"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "firstName": "test",
    "lastName": "1234",
    "gender": "male",
    "email": "test@site.com",
    "createdId": "id",
}
/* ------------------------------------------------------- */
// Passenger Model:


const PassengerSchema = new mongoose.Schema({

    firstname: {
        type: String,
        trim: true,
        required: true,
    },

    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female' , 'other'],
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        unique: [true, 'There is this email. Email field must be unique'],
        validate: [
            (email) => email.includes('@') && email.includes('.'),
            'Email type is not correct.'
        ]
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },


}, { collection: 'passengers', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Passenger', PassengerSchema)