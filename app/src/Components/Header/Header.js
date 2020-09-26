import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Avatar 
                    className="header-avatar"
                    alt="Eugene Lim"
                    src=""

                />
                <AccessTimeIcon/>
            </div>
            <div className="header-search">
                <SearchIcon />
                <input placeholder="Search..." name=""/>
            </div>
            <div className="header-right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
