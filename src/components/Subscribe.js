import React, { useState } from 'react';
import { EmailOutlined, ClearOutlined, ArrowForwardOutlined } from '@material-ui/icons';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [focus, setFocus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email) {
            const formData = new FormData();
            formData.append('email', email);

            // API Request goes here. 
        } else {
            console.log('error')
        }
    }

    return (
        <div className="subscribe">
            <h3>Join our mailing list.</h3>
            <p>Recieve 15% off your order at checkout and save today!</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${focus === 'email' ? 'focus' : ''} ${email ? 'active' : ''}`}>
                    <EmailOutlined className="icon" />
                    <ClearOutlined className="clear" onClick={() => {setEmail('')}} />
                    <label>Email Address</label>
                    <input type="email" name="email" value={email} onFocus={(e) => {setFocus(e.target.name)}} onBlur={(e) => {setFocus('')}} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <button type="submit" className="submit-btn"><ArrowForwardOutlined /></button>
            </form>
        </div>
    )
}
export default Subscribe;