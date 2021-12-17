import React, { useState, useEffect, FC } from 'react'


interface errProps {
    data: string 
}

const Error: FC<errProps> = (props): JSX.Element => {

    const [errMsg, setErrMsg] = useState(props.data)
    return (
        <div className='error'>
            <h1>{errMsg}</h1>
            <button>Exit</button>
        </div>
    )
}

export default Error
