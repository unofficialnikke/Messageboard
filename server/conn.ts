import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function connect() {
    const mongodb = await MongoMemoryServer.create()
    const uri = mongodb.getUri()

    await mongoose.connect(uri, { dbName: 'MessageboardDb' })
    console.log(`MongoDB succesfully connected to ${uri}`)
}