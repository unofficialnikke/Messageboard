## Message board Full Stack application (prototype)

This prototype of message board consists of client and server. Frontend is developed with React with vite.js and backend with Express.js. 
Whole implementation is coded with TypeScript. Database is implemented with Mongoose in-memory database using MongoMemoryServer.

### Features:
- User can view and access to all channels that exist by default
- User can view the messages on the specific channel
- User can submit new messages to the specific channel
  
- All Channels can be fetched with {Api_Url}/channels or by id {Api_Url}/channels/{id}
- All messages can be fetched with {Api_Url}/messages or by channel_id {Api_Url}/messages/{channel_id}
- New messages can be submitted wit post request to {Api_Url}/{channel_id}

Requirements have been carefully followed. Please, notice that for example, editor panel is hidden is channel is not selected or submit button 
is disabled if textfield input is empty.

This application includes a very little error handling as well, however not nearly as much as it would require.
