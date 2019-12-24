const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favorite: {
        type: [Schema.Types.ObjectId],
        ref: 'Recipe'
    }
});

module.exports = mongoose.model('User', UserSchema);
