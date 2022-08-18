import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>

        <form action="">

            <div className="feedback-title">
                <p>Need a Service?</p>
                <h3>Send A Message</h3>
            </div>

            <div className="form-control">
                <input type="text" name="name" id="" required placeholder="Full Name" />
            </div>

            <div className="form-control">
                <input type="email" name="email" id="" required placeholder="Email Address" />
            </div>

            <div className="form-control">
                <textarea name="message" id="" cols="30" rows="5" required placeholder="Message" style={{resize: 'none'}}></textarea>
            </div>

            <div className='form-control'>
                <button type="submit">Send</button>
            </div>

        </form>

    </div>
  )
}

export default Contact