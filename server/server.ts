import express from 'express'
import channelRouter from './routes/channels'
import messageRouter from './routes/messages'
import { createChannels } from './data/data'
import connect from './conn'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/channels', channelRouter)
app.use('/messages', messageRouter)

connect().then(async () => {
    await createChannels();
    app.listen(5000, () => {
        console.log('Server started on port 5000')
    })
}).catch((error) => {
    console.log('Invalid database connection')
})

