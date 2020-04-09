import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import classes from './Alert.module.scss';

// eslint-disable-next-line import/prefer-default-export
export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  console.log(alert);
  if (!alert) return null;

  return (
    <div className={`${classes.Alert} ${classes[alert.type]}`}>
      <span className={classes.closeBtn} onClick={hide}>&times;</span>
      <strong>Danger!</strong>
      {alert.text}
      {' '}
      Indicates a dangerous or potentially negative action.
    </div>
  );
};
// <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
