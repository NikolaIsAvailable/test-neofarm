import React from 'react'
import './loading.css'

const Loading = () => {
    return (
        <div className="loading-box">            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading
