import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    phoneNumber: {
        type: Schema.Types.String,
        required: true
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: "Contacts"
    }]
}
)

const User = mongoose.model('Users', UserSchema);

export default User;


