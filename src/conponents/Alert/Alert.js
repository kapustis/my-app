import React, { useContext } from 'react';

import { AlertContext } from '../../context/alert/alertContext';
import classes from './Alert.module.scss';

// eslint-disable-next-line import/prefer-default-export
export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (alert) {
    return (
      <div className={`${classes.Alert} ${classes[alert.type]}`}>
        <button type="button" className={classes.closeBtn} onClick={hide}>&times;</button>
        <strong>Danger!</strong>
        &emsp;
        {alert.text}
        Indicates a dangerous or potentially negative action.
      </div>
    );
  }
  return null;
};
