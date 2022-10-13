import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 0.5rem;
  align-items: center;
  border-radius: 2rem;
  background: #171a60;

  width: 100%;
`;

export const Results = styled.div`
  padding: 16px;
  width: 100%;
  max-height: 25vh;
  overflow: auto;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: #171a60;

  color: #fff;

  button {
    margin-left: 24px;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 2rem;
`;

export const AnswerButton = styled.button`
  border: node;
  background: white;
  border-radius: 2rem;
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  :hover {
    background: #d9d9d9;
  }
`;
