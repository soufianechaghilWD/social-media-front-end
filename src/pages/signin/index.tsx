import React, { useState } from 'react'
import Logo from '../../files/logo.png'
import '../../styles/signup/index.css'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [viewpassword, setViewPassword] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='signin'>
            <div className='signin__container'>
                <img src={Logo} alt="" />
                <div className='signin__form'>
                    <div className='form__block'>
                        <label>Username</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='form__block'>
                        <label>Password</label>
                        <input type={viewpassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <br/>
                    <input type="checkbox" checked={viewpassword} onChange={e => setViewPassword(e.target.checked)} />
                    <label style={{marginLeft: "0.8rem"}}>View password</label>
                    <br />
                    <button>Sign up</button>
                </div>
                <p>If you don't have an account <span onClick={() => navigate('/signup')}>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Index
