const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    latest_message: {
        type: String
    }
}, {
    timestamp: true
}
)

const conversation = mongoose.model('Conversation', conversationSchema)

module.exports = conversation