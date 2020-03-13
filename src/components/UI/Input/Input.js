import React from 'react';
import classes from './Input.module.scss';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || 'text';
  const inputName = props.name || null;
  const inputPlaceholder = props.placeholder || null;
  const cls = [classes.Input];
  const htmlFor = props.name || `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(' ')}>
      { props.label ?  <label htmlFor={htmlFor}>{props.label}</label> : null}
      <input
        id={htmlFor}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={props.value}
        onChange={props.onChange}
      />
      {
        isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null
      }
    </div>
  );
};

export default Input;
