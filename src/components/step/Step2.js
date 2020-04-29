import React from 'react'

export default function Step2(props) {
    return (
        <div>
            <h1>Step2</h1>
            <input placeholder="Enter address" />
            <br />
            <input placeholder="Enter phone" />
            <br />
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <button onClick={props.minusStep}>Back</button>
                <button onClick={props.plusStep}>Next</button>
            </div>
        </div>
    )
}
