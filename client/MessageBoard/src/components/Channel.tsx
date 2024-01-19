import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

type ChannelData = {
    channels: string[]
}

export default function Channel() {
    const [backendData, setBackendData] = useState({ channels: [] })

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/channels")
            const data = await response.json()
            setBackendData(data)
        } catch (err) {
            console.log('Error getting channels', err)
        }
    }

    useEffect(() => {
        fetchData()

    }, [])

    return (
        <>
            {typeof backendData.channels === 'undefined' ? (
                <Typography>loading...</Typography>
            ) : (
                backendData.channels.map((channel, index) => (
                    <Typography key={index}>{channel}</Typography>
                ))
            )}
        </>
    )
}


