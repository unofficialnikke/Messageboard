import mongoose from 'mongoose'

const Schema = mongoose.Schema

const messageSchema = new Schema({
    channel_id: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    { versionKey: false }
)

export default mongoose.model('Message', messageSchema)