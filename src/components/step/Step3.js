import React from 'react'

export default function Step3(props) {
    return (
        <div>
            <h1>Step3</h1>
            <input placeholder="Enter School" />
            <br />
            <br />
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <button onClick={props.minusStep}>Back</button>
            </div>
        </div>
    )
}
