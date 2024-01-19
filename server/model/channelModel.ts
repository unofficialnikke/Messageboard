import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = mongoose.model('Message', new Schema({
    message: String,
    channel_id: {
        type: Schema.Types.ObjectId,
        ref: 'Channel',
        required: true
    },
}))

const channelSchema = mongoose.model('Channel', new Schema({
    name: String,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
}))

export { channelSchema, messageSchema }
