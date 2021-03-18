import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import React from 'react'
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="email_list">
            <div className="email_list_settings">
                <div className="email_list_settings_left">

                    <Checkbox />
                    <IconButton >
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton >
                        <RedoIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>



                </div>

                <div className="email_list_settings_right">

                    <IconButton >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton >
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton >
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton >
                        <SettingsIcon />
                    </IconButton>



                </div>
            </div>
            <div className="email_list_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="email_list_list">
                <EmailRow
                    title="Developer"
                    subject="kiran"
                    description="im here for you"
                    time="10pm"

                />
                <EmailRow
                    title="Developer"
                    subject="kiran"
                    description="im here for you im here for youim here for youim here for you"
                    time="10pm"

                />

            </div>


        </div>
    )
}

export default EmailList
