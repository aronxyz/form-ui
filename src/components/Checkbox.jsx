import React from 'react'

const Checkbox = ({ isInvalid, disabled }) => {
  return (
    <div className='form-check'>
        <input disabled={disabled} type="checkbox" name="" id="" className={`form-check-input ${isInvalid ? "is-invalid" : ""}`} />
        <label htmlFor="" className={`form-check-label ${isInvalid ? "is-invalid" : ""} ${disabled ? "disabled" : ""}`}>Checkbox</label>
    </div>
  )
}

export default Checkbox