import express from 'express'
import channelRouter from './routes/channels'
import messageRouter from './routes/messages'
import connect from './index'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/channels', channelRouter)
app.use('/', messageRouter)

connect().then(async () => {
    app.listen(5000, () => {
        console.log('Server started on port 5000')
    })
}).catch((error) => {
    console.log('Invalid database connection')
})


