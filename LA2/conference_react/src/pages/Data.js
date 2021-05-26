import React from 'react'
import "./data.css"
const Data = ({ details }) => {

    return (
        <div className='main'>
            <h1>Your submited data</h1>
            <div className='data'>
                <h3>Your Name: {details.name}</h3>
                <h3>Your City: {details.city}</h3>
                <h3>Your Branch: {details.branch}</h3>
                <h3>Your Conference: {details.conference}</h3>
            </div>
        </div>
    )
}

export default Data
