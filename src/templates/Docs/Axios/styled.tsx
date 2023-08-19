import styled from 'styled-components';

export const StyledContent = styled.div`
  .install-command {
    font-family: 'Inconsolata', monospace;
    background-color: #ffff;
    color: #8e8b8b;
    padding: 15px;
    border-radius: 4px;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;

    svg {
      font-size: 20px;
    }
  }
`;

export const StyledInstaller = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    bottom: 0;
    left: 0;
    height: 3px;
    background: #dedddd;
    z-index: -1;
  }

  .selected {
    border-bottom: 3px solid #e94d61;
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 10px;
    gap: 5px;

    img {
      width: 20px;
    }
  }
`;

export const StyledCodeEditor = styled.div`
  padding: 0 20px 20px 0;
  background: #1e1e1e;
  position: relative;
  border-radius: 5px;

  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    color: #8e8b8b;
  }

  span,
  p {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    color: #dad9d9;
  }

  div,
  p {
    margin-left: 20px;
    word-break: break-all;
  }

  .comment-text {
    color: #9d9b9b;
  }

  .module-text {
    color: #e1eb26;
  }

  .param-text {
    color: #ff4a02;
  }

  .function-text {
    color: #d14edd;
  }

  .value {
    &-string {
      color: #30994c;
    }

    &-number {
      color: #ed4779;
    }
  }
`;
