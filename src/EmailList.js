import React, { useEffect, useState } from 'react'
import "./EmailList.css";
import Section from "./Section";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import { Checkbox, IconButton } from '@material-ui/core';
import { Inbox, LocalOffer, People } from '@material-ui/icons';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    const[emails,setEmails] = useState([]);
    useEffect(()=>{
        db.collection("email").orderBy("timestamp","desc").onSnapshot
        (snapshot => setEmails(snapshot.docs.map(doc => ({
            id : doc.id,
            data: doc.data(),
        }))))
    },[])
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emaiList__settingsLeft">
                <Checkbox/>
                 <IconButton>   
                 <ArrowDropDownIcon/>
                 </IconButton>
                 <IconButton>
                     <RedoIcon/>
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon/>
                 </IconButton>
                </div>
                <div className="emailList__settingsRight">
                  <IconButton>
                      <ChevronLeftIcon/>
                  </IconButton>
                  <IconButton>
                      <ChevronRightIcon/>
                  </IconButton>
                  <IconButton>
                      <KeyboardHideIcon/>
                  </IconButton>
                  <IconButton>
                      <SettingsIcon/>
                  </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <Section Icon={Inbox} title="Primary" color="red" selected/>
                <Section Icon={People} title="Social" color="yellow"/>
                <Section Icon={LocalOffer} title="Promotion" color="green" />
            </div>
            <div className="emailList__list">
            {emails.map(({ id,data : {to,subject,message,timestamp
            }}) => (
                <EmailRow
                  id={id}
                  key={id}
                  title={to}
                  subject={subject}
                  description={message}
                  time={new Date(timestamp?.seconds * 1000).toUTCString()}

                />
            ))}
              
            </div>
        </div>
    )
}

export default EmailList
