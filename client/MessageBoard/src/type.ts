export type MessageType = {
    message: string,
    channel_id: string
}

export type ChannelType = {
    _id: string
    name: string
    messages: MessageType
}