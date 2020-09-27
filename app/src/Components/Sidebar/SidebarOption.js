import React from 'react'
import "./SidebarOption.css"
import { useHistory } from 'react-router-dom'
import db from '../../firebase'
function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory()
    const selectChannel= ()=> {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }
    const addChannel=()=> {
        const newChannelName = prompt("Please enter new channel name:")
        if(newChannelName) {
            db.collection("rooms").add({
                name: newChannelName
            })
        }
    }
    return (
        <div className="sidebarOption"
        // When we click on any of the sidebar options, if addChannelOption 
        // Props exists, we add a new channel, ELSE we will just select the channel
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {/* If the icon is present then render the Icon with its Icon and the Icon with its title */}
            {/* Else render the # with the tilte given */}
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (<h3>{title}</h3>) : (<h3 className="sidebarOption__channel"> <span className="sidebarOption__hashtag">#</span> {title}</h3>)}
        </div>
    )
}

export default SidebarOption
