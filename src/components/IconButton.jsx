import React from 'react'

const IconButton = ({ children, ghost, danger, disabled }) => {
    return (
        <button disabled={disabled} className={`icon-button ${ghost ? "ghost" : ""} ${danger ? "danger" : ""}`}>{children}</button>
    )
}

export default IconButton