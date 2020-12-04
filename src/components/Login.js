import React, { useState } from 'react';
import { EmailOutlined, VisibilityOutlined, ClearOutlined } from '@material-ui/icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email && password) {
            const formData = new FormData;
            formData.append('email', email);
            formData.append('password', password);

            // API Request goes here. 
        } else {
            console.log('error')
        }
    }

    return (
        <div className="login-forms">
            <form onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Login</h3>
                <div className={`form-group ${active === 'email' ? 'active' : ''}`}>
                    <EmailOutlined className="icon" />
                    <ClearOutlined className="clear" onClick={() => {setEmail('')}} />
                    <label>Email</label>
                    <input type="email" name="email" value={email} onFocus={(e) => {setActive(e.target.name)}} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className={`form-group ${active === 'password' ? 'active' : ''}`}>
                    <VisibilityOutlined className="icon" />
                    <ClearOutlined className="clear" onClick={() => {setPassword('')}} />
                    <label>Password</label>
                    <input type="password" name="password" value={password} onFocus={(e) => {setActive(e.target.name)}} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    )
}
export default Login;