import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./EmailRow.css"
import { selectMail } from './features/mailSlice'

function EmailRow({id,title,subject,description ,time}) {
    const history = useHistory();
     const dispatch = useDispatch()
    const openMail = ()=> {
        dispatch(selectMail({
         id,title,subject,description,time
        })
       );
        history.push("/mail")
    } 
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
             <Checkbox/>
             <IconButton>
                 <StarBorderOutlined/>
             </IconButton>
             <IconButton>
                 <LabelImportantOutlined/>
             </IconButton>
            </div>
            <h3 className="emailRow__title">
            {title}
            </h3>
            <div className="emailRow__message">
            <h4>{subject}
            <span className="emailRow__description">{description}
            </span>
            </h4>
            </div>
            <div className="emailRow__time">
             <p>{time}</p> 
            </div>
        </div>
    )
}

export default EmailRow
