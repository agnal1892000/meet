// RegisterPage.js
import React, { useState } from 'react';
import './signup.css';
// import { useHistory } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a request to your backend API to register the user
            const response = await fetch('http://example.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            console.log('Registration successful:', data);

            // Redirect to the login page
            // history.push('/login');
        } catch (error) {
            console.error('Error occurred during registration:', error);
            // Handle error
        }
    };

    return (
        <div>
             <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
            
            <form className="container"  onSubmit={handleSubmit}>
            <div className="card">
            
            <div className="card-header">
               
            <h2>Register</h2>
            </div>
            <div className="card-body">
                 <div className="column">
                 <div className="col-lg-9">
                    <div className="form-group">
                    
                    <label>Username: <span className="errmsg">*</span></label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' />
                </div>
                </div>
                <br />
                
                <div className="col-lg-9">
                    <div className="form-group">
                    <label>Email: <span className="errmsg">*</span></label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'  />
                </div>
                </div>
                <br />
            
                <div className="col-lg-9">
                  <div className="form-group">
                    <label>Password: <span className="errmsg">*</span></label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                </div>
                </div>
                </div>
                </div>
                <br />

                <div className="card-footer">
                <button type="submit" class="btn btn-primary" >Register</button>
                </div>
                </div>
            </form>
            </div>
        </div> 
    );
};

export default SignupPage;
