import React from 'react'
import { useState, useEffect } from "react"
import Footer from './Footer'

function Contact() {
  const initialValues = { firstName: "", lastName: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Please enter First Name";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter Last Name";
    }
    if (!values.email) {
      errors.email = "Please enter valid Email";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  }

  return (
    <div className="contact-container">
      <div className="contact">
        <h2 className="contact-header">Contact Me</h2>
        <p className="contact-txt">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form className='form-item' onSubmit={handleSubmit}>
        <section className='form-flex'>
          <div className='form-flex-1'>
            <label className='form-label'>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              placeholder='Enter your first name' 
              className='txt-field' 
              id="first_name" 
              value={ formValues.firstName } 
              onChange={ handleChange }
            />
            <p className='error'>{ formErrors.firstName}</p>
          </div>
          
          <div className='form-flex-1'>
            <label className='form-label'>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              placeholder='Enter your last name' 
              className='txt-field' 
              id="last_name" 
              value={ formValues.lastName }
              onChange={ handleChange }
            />
             <p className='error'>{ formErrors.lastName}</p>
          </div>
        </section>

        <section className='form-flex-1'>
          <label className='form-label'>Email Address</label>
          <input 
            type="text" 
            name='email' 
            placeholder='yourname@gmail.com' 
            className='email-field' 
            id="email" 
            value={ formValues.email } 
            onChange={ handleChange }
          />
           <p className='error'>{ formErrors.email}</p>
        </section>

        <section className='form-flex-1'>
          <label className='form-label'>Message</label>
          <textarea
            id='message'
            name='message'
            className='message-field'
            placeholder='Send me a message and I will reply you as soon as possible...'
            value={ formValues.message }
            onChange={ handleChange }
          >

          </textarea>
          <p className='error'>{ formErrors.message}</p>
        </section>

        <section className='check-box-input'>
          <input 
            type="checkbox" 
            className='check-box' 
            name="checkbox" 
            id="checkbox" 
          />
          <label className='form-label check-box-label'>You agree to providing your data to Divine Edwin, who may contact you.</label>
        </section>

        <section>
          <button 
            type='submit' 
            // className='form-btn'
            className={Object.keys(formErrors).length === 0 && isSubmit ? 'form-btn-1' : 'form-btn'}
            id='submit_btn'
          >
            Send message
            </button>
        </section>
      </form>
      
      <div className="contact-footer">
        < Footer />
      </div>
    </div>
  );
}
export default Contact;