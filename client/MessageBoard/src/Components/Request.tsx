import { MessageType } from "../type"
import { API_URL } from "../constants"

export const getAllChannels = async () => {
    try {
        const response = await fetch(`${API_URL}/channels`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log('Error getting channels', err)
    }
}

export const getMessageById = async (channelId: String) => {
    try {
        const response = await fetch(`${API_URL}/messages/${channelId}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log('Error getting messages', err)
    }
}

export const addNewMessage = async (newMessage: MessageType, channelId: String) => {
    const requestConfig: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    }
    try {
        const response = await fetch(`${API_URL}/${channelId}`, requestConfig)
        if (!response.ok) {
            alert('Failed to add new message')
        } else {
            return response.ok
        }
    } catch (err) {
        console.log(err)
    }
}