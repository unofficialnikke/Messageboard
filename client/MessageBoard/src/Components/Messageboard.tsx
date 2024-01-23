import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getAllChannels, getChannelById, getMessageById, addNewMessage } from "./Request"
import { ChannelType, MessageType } from "../type"

export default function Channel() {
    const [channels, setChannels] = useState<ChannelType[]>([])
    const [messages, setMessages] = useState<MessageType[]>([])
    const [selectedChannelId, setSelectedChannelId] = useState<String>('')
    const [currentChannel, setCurrentChannel] = useState<String>('')
    const initialFormState: MessageType = {
        message: '',
        channel_id: ''
    }
    const [newMessage, setNewMessage] = useState<MessageType>(initialFormState)

    useEffect(() => {
        const fetchData = async () => {
            const newChannels = await getAllChannels()
            setChannels(newChannels)
        }
        fetchData()
    }, [])

    const getChannelMessages = async (channelId: String) => {
        setSelectedChannelId(channelId)
        setMessages(await getMessageById(channelId))
        getChannelName(channelId)
        setNewMessage({ ...newMessage, message: String('') })
    }

    const getChannelName = async (id: String) => {
        const newCurrentChannel = await getChannelById(id)
        setCurrentChannel(newCurrentChannel)
    }

    const addMessage = async () => {
        setNewMessage({ ...newMessage, channel_id: String(selectedChannelId) })
        await addNewMessage(newMessage, selectedChannelId)
        setChannels(await getAllChannels())
        setMessages(await getMessageById(selectedChannelId))
        setNewMessage(initialFormState)
    }

    return (
        <>
            <Stack alignItems='center'>
                <Stack justifyContent="center" direction='row' spacing={1} marginBottom={2}>
                    {channels.map((channel, index) => (
                        <Button
                            variant='outlined' size='large'
                            key={index} onClick={() => getChannelMessages(channel._id)}>
                            <Typography>{channel.name}</Typography>
                        </Button>
                    ))}
                </Stack>
                <Stack width={350} spacing={1}>
                    {currentChannel && (
                        <Typography textAlign='center'>Currently in {currentChannel}</Typography>
                    )}
                    {selectedChannelId === '' ? (
                        <Typography textAlign='center'>Select channel to type messages.</Typography>
                    ) : (
                        <Box display='flex' justifyContent='center' marginBottom={1}>
                            <TextField
                                fullWidth
                                size='small'
                                value={newMessage.message}
                                onChange={e =>
                                    setNewMessage({ ...newMessage, message: String(e.target.value) })}
                                placeholder='add new message..'></TextField>
                            <Button style={{ marginLeft: '5px' }} disabled={newMessage.message === '' ? true : false} onClick={() => addMessage()} variant='contained'>Add</Button>
                        </Box>
                    )}
                    {selectedChannelId !== '' && messages.length === 0 ? (
                        <Typography textAlign='center'>
                            No messages in this channel yet.
                        </Typography>
                    ) : (
                        messages.map((m, index) => (
                            <Stack key={index}>
                                <Typography style={{ whiteSpace: 'normal', overflow: 'hidden' }}>{m.message}</Typography>
                                <Divider />
                            </Stack>
                        ))
                    )}
                </Stack>
            </Stack>
        </>
    )
}

