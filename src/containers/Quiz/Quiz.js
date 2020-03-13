import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import Loader from '../../components/UI/Loader/Loader';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import {connect} from 'react-redux';
import {answerClick, fetchQuiz, retryQuiz} from '../../store/actions/quiz';

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuiz(this.props.match.params.id);
  }

  UNSAFE_componentWillMount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          {this.props.loading || !this.props.quiz
            ? <Loader/>
            : this.props.isCompleted
              ? <FinishedQuiz res={this.props.res} quiz={this.props.quiz} onRetry={this.props.retryQuiz}/>
              :
              <>
                <h1>Ответьте на все вопросы</h1>
                <ActiveQuiz
                  answers={this.props.quiz[this.props.activeQuestion].answers}
                  question={this.props.quiz[this.props.activeQuestion].question}
                  onAnswerClick={this.props.answerClick}
                  quizLength={this.props.quiz.length}
                  answerNumber={this.props.activeQuestion + 1}
                  state={this.props.answerState}
                />
              </>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.quiz.quiz,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState, // { [id]: 'success' 'error' }
    isCompleted: state.quiz.isCompleted,
    res: state.quiz.res,
    loading: state.quiz.loading,
    error: state.quiz.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    fetchQuiz: id => dispatch(fetchQuiz(id)),
    answerClick: answerId => dispatch(answerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
