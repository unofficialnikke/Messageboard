import { channelSchema } from "../model/channelModel"

export const createChannels = async () => {
    await channelSchema.create(
        { name: 'Channel 1' },
        { name: 'Channel 2' },
        { name: 'Channel 3' },
        { name: 'Channel 4' },
        { name: 'Channel 5' },
    )

    console.log('Channels created')
}