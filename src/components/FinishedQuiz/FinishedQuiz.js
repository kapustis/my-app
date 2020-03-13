import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {
  console.log(props);
  const successCount = Object.keys(props.res).reduce((total, key) => {
    if (props.res[key] === 'success') total++;
    return total;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((item, index) => {
          const cls = ['fa', props.res[item.id] === 'success' ? 'fa-check' : 'fa-times', classes[props.res[item.id]]];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {item.question}
              <i className={cls.join(' ')}/>
            </li>
          );
        })}
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to={'/'}>
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
