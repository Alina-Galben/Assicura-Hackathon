import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        // La password è obbligatoria SOLO se non ci si registra tramite Google o Facebook
        required: function() {
            return !this.googleId && !this.facebookId;
        },
        select: false, // Non includere la password nelle query di default
    },
    isEmailConfirmed: {
        type: Boolean,
        default: false,
    },
    confirmationToken: {
        type: String,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
},
{
    timestamps: true,
})
    
const User = mongoose.model('User', userSchema);

export default User;