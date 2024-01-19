import express, { Express, Request, Response } from 'express'
import ChannelModel from '../model/channelModel'
import cors from 'cors'

const router = express.Router()

router.get('/', cors(), async (req, res) => {
    const channels = await ChannelModel.find()
    res.json(channels)
})

router
    .route('/:id')
    .get((req: Request, res: Response) => {
    })

router.param('id', (req: Request, res: Response, next, id) => {
    //req.channel = channels[id]
    next()
})

export default router