import React from 'react'
import "./SidebarOption.css"
function SidebarOption({ Icon, title }) {
    return (
        <div className="sidebarOption">
            {/* If the icon is present then render the Icon with its Icon and the Icon with its title */}
            {/* Else render the # with the tilte given */}
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (<h3>{title}</h3>) : (<h3 className="sidebarOption__channel"> <span className="sidebarOption__hashtag">#</span> {title}</h3>)}
        </div>
    )
}

export default SidebarOption
