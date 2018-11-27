import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';

const ButtonComponent = ({ text, type, btnClass, clickFunction }) => {
  let classType = btnClass || 'default';
  let buttonType = type || 'button';

  return (
    <button type={buttonType} className={classType} onClick={clickFunction}>
      {text}
    </button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  btnClass: PropTypes.string,
  clickFunction: PropTypes.func
}

export default ButtonComponent;
