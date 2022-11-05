import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2 className="contact-header">Contact Me</h2>
        <p className="contact-txt">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form className='form-item'>
        <section className='form-flex'>
          <div className='form-flex-1'>
            <label className='form-label'>First Name</label>
            <input type="text" name="" placeholder='Enter your first name' className='txt-field' id="first_name" />
          </div>
          <div className='form-flex-1'>
            <label className='form-label'>Last Name</label>
            <input type="text" name="" placeholder='Enter your last name name' className='txt-field' id="last_name" />
          </div>
        </section>

        <section className='form-flex-1'>
          <label className='form-label'>Email Address</label>
          <input type="text" placeholder='yourname@gmail.com' name="" className='email-field' id="email" />
        </section>

        <section className='form-flex-1'>
          <label className='form-label'>Message</label>
          <textarea
            id='message'
            className='message-field'
            placeholder='Send me a message and I will reply you as soon as possible...'
          >

          </textarea>
        </section>

        <section className='check-box-input'>
          <input type="checkbox" className='check-box' name="" id="checkbox" />
          <label className='form-label check-box-label'>You agree to providing your data to Divine Edwin, who may contact you.</label>
        </section>

        <section>
          <button type='submit' className='form-btn'>Send message</button>
        </section>
      </form>
      < Footer />
    </div>
  );
}
export default Contact;