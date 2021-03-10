import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import SendMail from './SendMail';
import {  selectSendMessageIsOpen } from './features/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from "./Login"
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser)
  const sendMessageIsOpen =  useSelector(selectSendMessageIsOpen)
  const dispatch = useDispatch();
  
  useEffect(()=>{
   auth.onAuthStateChanged(user =>{
     if (user) {
       dispatch(login({
         displayName : user.displayName,
         email:user.email,
         photoUrl : user.photoURL,
       })
       )
     }
   })
  },[])
  return (
    <Router>
    { !user ? 
     ( <Login />)
    :(
      <div className="App">
    <Header/>
    <div className="app__body">
    <Sidebar/>
      <Switch>
      <Route path="/mail">
       <Mail/>
      </Route>
      <Route path="/">
      <EmailList/>
      </Route>
      </Switch>
    </div>
      
    {sendMessageIsOpen && <SendMail/> } 
    </div>
    )}
   
    </Router>
  );
}

export default App;
