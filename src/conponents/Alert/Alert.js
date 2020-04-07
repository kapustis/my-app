import React from 'react';
import classes from './Alert.module.scss';

// eslint-disable-next-line import/prefer-default-export
export const Alert = () => (
  <div className={classes.Alert}>
    <span className={classes.closeBtn}>&times;</span>
    <strong>Danger!</strong>
    {' '}
    Indicates a dangerous or potentially negative action.
  </div>
);

// <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
