import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #171a21;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsideContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  width: 80vw;
  height: 80vh;
  overflow: auto;

  background: #171a21;
  padding: 16px 20px;
`;

export const Counter = styled.div`
  margin-top: 1rem;
  color: #f7feff;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    align-self: flex-start;
  }
`;
