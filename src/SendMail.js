import React from 'react'
import "./SendMail.css"
import { Close } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {useForm} from  "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from "firebase";

function SendMail() {
    const {register,handleSubmit,errors} = useForm();
    const dispatch= useDispatch()
    const onSubmit = (formData) =>{
        console.log(formData);
        db.collection('email').add({
            to: formData.To,
            subject: formData.Subject,
            message:formData.Message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };
    
    return (
        
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={() => dispatch(closeSendMessage())}/ >
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="To" type="email" placeholder="To" ref={register({required:true })}/>
                {errors.To && <p className="sendMail__error">To is required</p>}
                <input name="Subject" type="text" placeholder="Subject" ref={register({ required:true })}/>
                {errors.Subject && <p className="sendMail__error">Subject is required</p>}
                <input name="Message" type="text" placeholder="Message.." className="sendMail__message" ref={register({required:true})}/ >
                {errors.Message && <p className="sendMail__error">Message is required</p>}
                <div className="sendMailOptions">
                    <Button type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
