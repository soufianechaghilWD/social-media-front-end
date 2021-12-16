import React, { useState } from 'react'
import Logo from '../../files/logo.png'
import '../../styles/signup/index.css'
import { useNavigate } from 'react-router-dom'


const Index = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [viewpassword, setViewPassword] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='signup'>
            <div className='signup__container'>
                <img src={Logo} alt="" />
                <div className='signup__form'>
                    <div className='form__block'>
                        <label>Username</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='form__block'>
                        <label>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='form__block'>
                        <label>Password</label>
                        <input type={viewpassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='form__block'>
                        <label>Confirm Password</label>
                        <input type={viewpassword ? "text" : "password"} value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                    </div>
                    <br />
                    <input type="checkbox" checked={viewpassword} onChange={e => setViewPassword(e.target.checked)} />
                    <label style={{marginLeft: "0.8rem"}}>View password</label>
                    <br />
                    <button>Sign up</button>
                </div>
                <p>If you already have an account <span onClick={() => navigate('/signin')}>Log In</span></p>
            </div>
        </div>
    )
}

export default Index
