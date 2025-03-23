import React from 'react'
import Spinner from './Spinner';

const Button = ({
  children,
  accent,
  startIcon,
  endIcon,
  loading,
  disabled
}) => {

  const renderButton = () => (<button disabled={disabled || loading} className={`${accent ? "accent" : ""}`}>
    {startIcon ?? ""}
    {loading ? <Spinner small /> : children}
    {endIcon ?? ""}
  </button>);

  return (
    <React.Fragment>{renderButton()}</React.Fragment>
  )
}

export default Button