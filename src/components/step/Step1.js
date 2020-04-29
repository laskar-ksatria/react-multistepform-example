import React from 'react'

export default function Step1(props) {
    return (
        <div>
            <h1>Step1</h1>
            <input placeholder="Enter name" />
            <br />
            <input placeholder="Enter email" />
            <br />
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <button onClick={props.minusStep}>Back</button>
                <button onClick={props.plusStep}>Next</button>
            </div>
        </div>
    )
}
