import React from 'react';
import classes from './Select.module.scss';

const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className={classes.Select}>
      { props.label ?  <label htmlFor={htmlFor}>{props.label}</label> : null}
      <select value={props.value} onChange={props.onChange}>
        {
          props.options.map((option, index) => {
            return (
              <option value={option.value} key={option.value + index}>
                {option.text}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

export default Select;
