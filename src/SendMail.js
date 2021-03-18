
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'
import './SendMail.css'

import { useForm } from 'react-hook-form'



function SendMail() {

    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="send_mail">
            <div className="send_mail_header">
                <h3>New Mail</h3>

                <CloseIcon className="send_mail_close" />

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="text" ref={register({ required: true })} />
                {errors.to && <p className="send_mail_errors">to is required</p>}


                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                {errors.subject && (<p className="send_mail_errors">subject is required</p>)}


                <input name="message" placeholder="Message..." className="send_mail_message" type="text" ref={register({ required: true })} />
                {errors.message && (<p className="send_mail_errors">message is required</p>)}

                <div className="send_mail_options">
                    <Button className="send_mail_button"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Send</Button>

                </div>
            </form>


        </div>
    )
}

export default SendMail
