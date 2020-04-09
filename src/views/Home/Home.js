import React, { useContext } from 'react';
import classes from './Home.module.scss';
import { AlertContext } from '../../context/alert/alertContext';

// eslint-disable-next-line import/prefer-default-export
export function Home() {
  const { show } = useContext(AlertContext);

  const onSubmit = () => {
    show('Alert', 'Success');
  };
  return (
    <div className={classes.Home}>
      <h1>Home</h1>
      <button type="button" className={[classes.info, classes.Btn].join(' ')} onMouseUp={onSubmit}> Danger </button>
    </div>
  );
}
