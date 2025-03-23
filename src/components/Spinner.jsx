import React from 'react'

const Spinner = ({ small }) => {
    return (
        <React.Fragment>
            {small
                ? <div class="spinner spinner-small"></div>
                : <div class="spinner"></div>}
        </React.Fragment>
    )
}

export default Spinner