import React from 'react';
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header () {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const signOut = () =>{
        auth.signOut().then(() => {
            dispatch(logout())
        })
        
    }
    return (
        <div className="header">
        <div className="header_left">
         <IconButton>
         <MenuIcon/> 
         </IconButton> 
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt=""></img>
        </div>
        <div className="header_middle">
         <SearchIcon/>
         <input type="text" placeholder="Search email"/>
         <ArrowDropDown className="header_inputCaret"/>
        </div>
        <div className="header_right">
         <IconButton>    
         <AppsIcon/>
         </IconButton>
         <IconButton>
             <NotificationsIcon/>
         </IconButton>
         <IconButton>
         <Avatar onClick={signOut} src={user?.photoUrl}/>
         </IconButton>
         
        </div>
        </div>
    )
}

export default Header
