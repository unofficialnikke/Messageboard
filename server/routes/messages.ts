import express, { Request, Response } from 'express'
import { messageSchema, channelSchema } from '../model/channelModel'
import cors from 'cors'

const router = express.Router()

router.get('/messages', cors(), async (req: Request, res: Response) => {
    const messages = await messageSchema.find()
    res.json(messages)
})

router
    .route('/messages/:channelId')
    .get(async (req: Request, res: Response) => {
        const { channelId } = req.params
        if (channelId.length !== 24) {
            res.send("Invalid channel ID")
        } else {
            const messages = await messageSchema.find({ channel_id: channelId })
            res.json(messages)
        }
    })

router.post('/:channelId', cors(), async (req: Request, res: Response) => {
    const { channelId } = req.params
    const newMessage = new messageSchema({
        channel_id: channelId,
        message: req.body.message
    })
    await newMessage.save()
    await channelSchema.findByIdAndUpdate(channelId, {
        $push: { messages: newMessage._id }
    })
    return res.status(201).json(newMessage)
})

export default router