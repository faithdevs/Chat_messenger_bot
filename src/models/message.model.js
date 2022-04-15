const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    senderId: {
        type: String,
        required: true
    },
    text: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model("Messages", MessageSchema);