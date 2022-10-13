import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { Container, InsideContainer, Counter } from './styles';
import api from '../../services/api';
import Survey from '../../components/Survey';
import { ReturnButton } from '../../components/ReturnButton';

interface ISurvey {
  id: number;
  question: string;
  created_at: Date;
}

export const ListSurveys: React.FunctionComponent = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>();

  const history = useHistory();

  useEffect(() => {
    api
      .get('/survey')
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleReturn = () => {
    history.push('/');
  };

  return (
    <Container>
      <Counter>
        <ReturnButton type="button" onClick={handleReturn}>
          <BiLeftArrowAlt color="#f7feff" />
        </ReturnButton>
        <h1>Pesquisas Ativas: {surveys ? surveys.length : 0}</h1>
      </Counter>
      {surveys ? (
        <InsideContainer>
          {surveys && surveys.map(s => <Survey survey={s} key={s.id} />)}
        </InsideContainer>
      ) : (
        <InsideContainer>
          <p>Não há surveys ainda</p>
        </InsideContainer>
      )}
    </Container>
  );
};
