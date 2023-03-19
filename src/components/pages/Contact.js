import React from 'react';
import '../../App.css';
import { useState } from 'react';

export default function Contact() {
  const [data,setData] = useState({name: "",email: "",phone:"",message:""});
  const handleChange = (e) =>{
    const name=e.target.name
    const value=e.target.value
    setData({...data,[name]:value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(data)

  }
    return(
    <div>
        <h1 className='contact'></h1>
        <h2>Contact Info</h2>
        <p className='para'>
        Thank you for considering contacting us! We are always here to help and are happy to answer any questions you may have about our services or products.

To get in touch with us, you can fill out the contact form on this page. Once you submit the form, one of our representatives will get back to you as soon as possible.

If you prefer to reach out to us directly, you can use the contact information listed below. We are available by phone, email, and social media, so feel free to reach out to us in whichever way is most convenient for you.

At our company, we value customer satisfaction above all else. That's why we are committed to providing exceptional customer service to each and every one of our clients. Our team of experts is dedicated to ensuring that you have a positive experience with us, from the moment you first contact us to the completion of your project.

We use React to build our web applications, which enables us to create highly responsive and interactive user interfaces. We also use CSS to style our applications, ensuring that they look great on all devices and screen sizes.

If you have any questions or concerns, please don't hesitate to get in touch with us. We look forward to hearing from you and helping you achieve your goals!
        </p>

        <form method='post' onSubmit={handleSubmit} action='#'>
        <h1>Contact Here</h1>
        <input type="text" name="name" onChange={handleChange} value={data.name} placeholder='Enter your name' />
        <input type="email" name="email" onChange={handleChange} value={data.email} placeholder='Example@gmail.com' />
        <input type="phone" name="phone" onChange={handleChange} value={data.phone} placeholder='+91' />
        <textarea name="message" id="" cols="10" rows="10" onChange={handleChange} value={data.message} placeholder='Type here...'/>
        <button type='submit'>send</button>
        <p>Name Entered :{data.name}<br/>Email Enterd: {data.email}<br/>Phone No Entered :{data.phone}<br/>Message Entered :{data.message}</p>
    </form>
    </div>
    
    
  ) 

  
}

