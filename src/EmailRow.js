import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import React from 'react'
import './EmailRow.css'
import { useHistory } from 'react-router';

function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory();



    return (
        <div onClick={() => history.push("/mail")} className="emailrow">

            <div className="email_row_options">
                <Checkbox />
                <IconButton >
                    <StarBorderIcon />
                </IconButton>
                <IconButton >
                    <LabelImportantIcon />
                </IconButton>

            </div>
            <h3 className="email_row_title">
                {title}
            </h3>
            <div className="email_row_message">
                <h4>{subject} -
                    <span className="email_row_description"> {description}</span>
                </h4>
            </div>
            <p className="email_row_time">
                {time}

            </p>

        </div>
    )
}

export default EmailRow
