export type MessageType = {
    message: String,
    channel_id: String
}

export type ChannelType = {
    _id: String
    name: String
    messages: MessageType
}