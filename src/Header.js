import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png" alt="gmail-logo" />



            </div>
            <div className="header_middle">
                <SearchIcon />
                <input placeholder="Search mail" />
                <ArrowDropDownIcon />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar>

                </Avatar>
            </div>
        </div>
    )
}

export default Header
