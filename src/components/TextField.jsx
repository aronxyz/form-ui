import React from 'react'

const TextField = ({
    type = "text",
    id,
    name,
    label,
    withFeedback,
    isInvalid,
    inputAdorment
}) => {
    const hasAdornments = inputAdorment?.startAdorment || inputAdorment?.endAdorment;
    
    const renderInput = () => (
        <input
            className={`form-control ${isInvalid ? "is-invalid" : ""}`}
            type={type}
            id={id}
            name={name}
        />
    );

    return (
        <div className='form-group'>
            {label && <label className='form-label' htmlFor={id}>{label}</label>}
            
            {hasAdornments ? (
                <div className='input-adorment'>
                    {inputAdorment?.startAdorment && (
                        <div 
                            onClick={inputAdorment.startAdorment.onClick} 
                            className={`input-start-adorment ${inputAdorment.startAdorment.onClick ? "input-adorment-interactive" : ""}`}
                        >
                            {inputAdorment.startAdorment.content}
                        </div>
                    )}
                    
                    {renderInput()}
                    
                    {inputAdorment?.endAdorment && (
                        <div 
                            onClick={inputAdorment.endAdorment.onClick} 
                            className={`input-end-adorment ${inputAdorment.endAdorment.onClick ? "input-adorment-interactive" : ""}`}
                        >
                            {inputAdorment.endAdorment.content}
                        </div>
                    )}
                </div>
            ) : renderInput()}
            
            {withFeedback && (
                <div className={`form-text ${isInvalid ? "invalid-feedback" : ""}`}>
                    Invalid text field is a required field
                </div>
            )}
        </div>
    );
}

export default TextField;