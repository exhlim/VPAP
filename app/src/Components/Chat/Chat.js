import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from "../Messages/Message"
import db from "../../firebase"
import ChatInput from './ChatInput'
function Chat() {
    // access the :roomId from the URL using userParams()
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        // wont run for the rest of the side bars options but just for the chat ones
        if(roomId) {
            // Access the datbase, go into the collection "rooms"
            // Go to the document and match the roomId its like `SELECT * FROM rooms WHERE roomId=useParams()
            // Set the roomDetails to the snapshot.data()
            // Here the snapshot.data() will contain the name only because we only have the name field
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=> (
                // Roomdetails will contain the name of the room
                setRoomDetails(snapshot.data())
            ))
        }
        // Same thing as above but now you access its collection of messages and orderthem then
        // After collection is docs. So its going to be snapshot.docs
        // Which means im mapping all the documents(all the messages) 
        db.collection("rooms").doc(roomId).collection('messages').orderBy("timestamp", "asc").onSnapshot(snapshot=>(
            setRoomMessages(snapshot.docs.map(doc => 
                    // For each doc(message) return the doc.data()
                    // collection > doc > collection > doc > data
                    doc.data()
                ))
        ))
        // The dependencies for this hook is on the roomId so when the roomId changes from the params, the hook will run again
    }, [roomId])
    console.log(roomMessages)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        {/* if room details exists then render the roomDetails.name else 
                        default it to null
                        */}
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> 
                        Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {/* destructuring the message or you can also use message.user message.userImage etc etc */}
                {roomMessages.map(({message, timestamp, user, userImage})=> (
                    <Message 
                    user={user} 
                    message={message}
                    userImage={userImage}
                    timestamp={new Date(timestamp?.toDate()).toGMTString()}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
