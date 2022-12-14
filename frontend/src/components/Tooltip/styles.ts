import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    white-space: nowrap;
    background: #c53030;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
