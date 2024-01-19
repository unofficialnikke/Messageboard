import express, { Request, Response } from 'express'
import MessageModel from '../model/messageModel'
import cors from 'cors'

const router = express.Router()

router.get('/', cors(), async (req: Request, res: Response) => {
    const messages = await MessageModel.find()
    res.json(messages)
})

router
    .route('/:id')
    .get(async (req: Request, res: Response) => {
        const messages = await MessageModel.findById(req.params.id)
        res.json(messages)
    })

router.post('/', cors(), (req: Request, res: Response) => {
    const message = new MessageModel({
        channel_id: req.body.channel_id,
        message: req.body.message
    })
    message.save().then(function () {
        return res.status(201).json(message)
    }).catch((error) => {
        console.log('error', error)
    })
})

export default router