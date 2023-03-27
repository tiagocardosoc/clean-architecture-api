import mongoose, { Schema } from "mongoose";

const ContactsSchema = new mongoose.Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: false
    },
    phoneNumber: {
        type: Schema.Types.String,
        required: true
    },
    ownerUserId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Contacts = mongoose.model('Contacts', ContactsSchema);

export default Contacts;


