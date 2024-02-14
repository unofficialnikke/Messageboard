Message board Full Stack application (prototype)

This prototype of message board consists of client and server. Frontend is developed with React with vite.js and backend with Express.js. 
Whole implementation is coded with TypeScript. Database is implemented with Mongoose in-memory database using MongoMemoryServer.

Features:
- User can view and access to all channels that exist by default
- User can view the messages on the specific channel
- User can submit new messages to the specific channel

Endpoints:
- Get all Channels: {Api_Url}/channels
- Get Channel by Id:  {Api_Url}/channels/{id}
- Get all Messages: {Api_Url}/messages
- Get Message by channel_id: {Api_Url}/messages/{channel_id}
- Submit new messages to the channel: {Api_Url}/{channel_id}

Requirements have been carefully followed. Please, notice that for example, editor panel is hidden is channel is not selected or submit button 
is disabled if textfield input is empty.

This application includes a very little error handling as well, however not nearly as much as it would require.
