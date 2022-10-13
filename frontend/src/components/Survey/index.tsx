import React, { EventHandler, useCallback, useEffect, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { TbEditCircleOff } from 'react-icons/all';
import {
  Container,
  Results,
  Result,
  TitleContainer,
  AnswerContainer,
  AnswerButton,
} from './styles';
import api from '../../services/api';

type Answer = {
  id: number;
  survey_id: number;
  answer: string;
  answer_count: number;
  created_at: Date;
};

type Survey = {
  id: number;
  question: string;
  created_at: Date;
};

type Props = {
  survey: Survey;
};

type Results = {
  question: string;
  answers: {
    id: string;
    answer: string;
    surveyId: string;
    count: number;
    percent: number;
    isCurrentAccountAnswered: boolean;
  }[];
};

const Survey = ({ survey }: Props): JSX.Element => {
  const [answers, setAnswers] = useState<Answer[]>();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`answer/all/${survey.id}`)
      .then(response => {
        setAnswers(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id, answers]);

  const handleAnswer = (id: number) => {
    api.put(`/answer/${id}`);
  };

  return (
    <Container>
      <TitleContainer>
        <h2>{survey.question}</h2>
        <div />
      </TitleContainer>
      {answers &&
        answers.map(answer => (
          <AnswerContainer key={answer.id}>
            <AnswerButton onClick={() => handleAnswer(answer.id)}>
              <h1>{answer.answer}</h1>
              <h2>Votes: {answer.answer_count}</h2>
            </AnswerButton>
          </AnswerContainer>
        ))}
    </Container>
  );
};

export default Survey;
