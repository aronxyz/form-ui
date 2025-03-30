import React from 'react'

const Radio = ({isInvalid}) => {
    return (
        <div className='form-check'>
        <input type="radio" name="" id="" className={`form-check-input ${isInvalid ? "is-invalid" : ""}`} />
        <label htmlFor="" className={`form-check-label ${isInvalid ? "is-invalid" : ""}`}>Radio</label>
    </div>
    )
}

export default Radio