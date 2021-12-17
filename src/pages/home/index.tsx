import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../../comp/Error'
import requestAPI from '../../requests'

const Index = () => {

    const navigate = useNavigate()
    const [err, setErr] = useState(null)

    useEffect(() => {
        if(localStorage.getItem('so-social-token')){
            requestAPI.post('/checkuser', {
                token: localStorage.getItem('so-social-token')
            })
            .then((res) => {
                if(res.status !== 200) setErr(res.data.msg)
            })
            .catch((err) => setErr(err.response.message))
        }else navigate('/signup')
    }, [])

    return (
        <div className='home'>
            <h1>Home page</h1>
            {
                err !== null && <Error data={err} />
            }
        </div>
    )
}

export default Index
