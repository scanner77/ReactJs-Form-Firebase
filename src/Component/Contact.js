import React, {useState} from 'react'
import "../App.css"
import {db} from '../firebase'

const Contact = () => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');

    const[loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); //If you dont do this, after each input your page will refresh and your informaiton is erased
        //once the user submit the form, let's set the loader to be true


        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        }).then(() => {
            alert("Message has been Submitted \u{1F911} "); //success response of promise
            setLoader(false); //because we want our loader to stop after it has completed submission
        }).catch((error) => {
            alert(error.message)
            setLoader(false)//stop loading because the screen will be showing the error message
        })
        setName('');
        setEmail('');
        setMessage('');
};

    return (
        <form className="form" onSubmit={handleSubmit} >

            <h1>Contact Form </h1>
                
            <label>Name </label>
            <input 
            placeholder="name" 
            value = {name}
            onChange = {(e) => {
               setName(e.target.value
               )
            }}
            />
               
            <label>Email </label>
            <input placeholder="Email" 
            value = {email} 
            onChange = {(e) => {
                setEmail(e.target.value)
             }}
            />
               
            <label>Message </label>
            <textarea placeholder="Message" 
            value={message}
            onChange = {(e) => {
                setMessage(e.target.value)
             }}
            />

            <button type = "submit"
            style = {{background: loader ? "blue" : "#FF0000"}}
            >Submit</button>
        </form>
        
    )
}

export default Contact; 