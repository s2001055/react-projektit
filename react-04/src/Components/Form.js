import React, { useState } from 'react';
import View from './View';
import './Form.css';

const Form = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    return (
        <div className="Form">
            <form>
                <h2>Fill the Form</h2>

                <div className="mb-3">
                    <label for="firstname" className="form-label">First name</label>

                    <input
                        className="form-control"
                        placeholder="Your name..."
                        aria-describedby="firstname"
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label for="lastname" className="form-label">Last name</label>

                    <input
                        className="form-control"
                        placeholder="Your last name..."
                        aria-describedby="lastname"
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label for="phone" className="form-label">Phone number</label>

                    <input
                        className="form-control"
                        placeholder="Your phone number..."
                        aria-describedby="phone"
                        id="phone"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>

                    <input
                        className="form-control"
                        placeholder="Message (optional)"
                        aria-describedby="message"
                        id="message"
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </form>

            <View firstName={firstName} lastName={lastName} phone={phone} message={message} />
        </div>
    );
}

export default Form;