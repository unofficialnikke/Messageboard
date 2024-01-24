import express, { Request, Response } from 'express'
import { channelSchema } from '../model/channelModel'

const router = express.Router()

router.get('/', async (req, res) => {
    const channels = await channelSchema.find()
    res.json(channels)
})

router
    .route('/:id')
    .get(async (req: Request, res: Response) => {
        const channels = await channelSchema.findById(req.params.id)
        res.json(channels)
    })

export default router