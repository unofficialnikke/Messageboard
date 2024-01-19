import ChannelModel from '../model/channelModel'

export const createChannels = async () => {
    const channelsToCreate = [
        { name: 'Channel 1', messages: [] },
        { name: 'Channel 2', messages: [] },
        { name: 'Channel 3', messages: [] },
        { name: 'Channel 4', messages: [] },
        { name: 'Channel 5', messages: [] },
    ]
    await ChannelModel.insertMany(channelsToCreate);
}