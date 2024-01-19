import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server';
import { channelSchema } from './model/channelModel';

export default async function connect() {
    const mongodb = await MongoMemoryServer.create()
    const uri = mongodb.getUri()

    await mongoose.connect(uri, { dbName: 'MessageboardDb' })
    createChannelExample()
    console.log(`MongoDB succesfully connected to ${uri}`)
}

const createChannelExample = async () => {
    const newChannel1 = await channelSchema.create({
        name: 'Channel 1',
        messages: []
    })
    const newChannel2 = await channelSchema.create({
        name: 'Channel 2',
        messages: []
    })
    const newChannel3 = await channelSchema.create({
        name: 'Channel 3',
        messages: []
    })
    const newChannel4 = await channelSchema.create({
        name: 'Channel 4',
        messages: []
    })
    const newChannel5 = await channelSchema.create({
        name: 'Channel 5',
        messages: []
    })
}