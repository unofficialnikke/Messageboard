import mongoose from 'mongoose'

const Schema = mongoose.Schema

const channelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    messages: {
        type: [],
        required: false
    }
},
    { versionKey: false }
)

export default mongoose.model('Channel', channelSchema)