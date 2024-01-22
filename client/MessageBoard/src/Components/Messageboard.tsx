import { Box, Button, Divider, Grid, Stack, TextField, Typography } from "@mui/material"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { useEffect, useState } from "react"
import { getAllChannels, getMessageById, addNewMessage } from "./Request"
import { ChannelType, MessageType } from "../type"

export default function Channel() {
    const [channels, setChannels] = useState<ChannelType[]>([])
    const [messages, setMessages] = useState<MessageType[]>([])
    const [selectedChannelId, setSelectedChannelId] = useState<String>('')
    const initialFormState: MessageType = {
        message: '',
        channel_id: ''
    }
    const [newMessage, setNewMessage] = useState<MessageType>(initialFormState)

    useEffect(() => {
        const fetchData = async () => {
            const newChannels = await getAllChannels()
            setChannels(newChannels)
            console.log(newChannels)
        }
        fetchData()
    }, [])

    const getChannelMessages = async (channelId: String) => {
        setSelectedChannelId(channelId)
        setMessages(await getMessageById(channelId))
        setNewMessage({ ...newMessage, message: String('') })
        console.log(channelId)
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
                <List>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                {channels.map((channel, index) => (
                                    <ListItemButton
                                        key={index} onClick={() => getChannelMessages(channel._id)}>
                                        <Typography>{channel.name}</Typography>
                                    </ListItemButton>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </List>
                <Stack width={350} spacing={1}>
                    {selectedChannelId === '' ? (
                        <Typography>Select channel to type messages.</Typography>
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
                            No messages yet in this Channel.
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

