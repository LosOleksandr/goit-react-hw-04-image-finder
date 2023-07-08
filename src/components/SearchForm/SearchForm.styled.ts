import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';

export const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  input {
    font-family: inherit;
    border: 1px #000 solid;
    border-radius: 10px;
    background-color: transparent;
    outline: none;
    font-size: 16px;
    padding: 10px 15px;
    transition: all 0.1s ease;
    position: relative;

    &::placeholder {
      color: #000;
    }
    &:focus {
      border: 1px #fff solid;
      color: #fff;
    }

    &:focus::placeholder {
      color: #fff;
    }
  }

  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px #000 solid;
    margin-left: 15px;
    border-radius: 50%;
    transition: all 0.1s ease;
    color: #000;

    :hover {
      background-color: #fff;
      color: #000;
      border: 1px transparent solid;
    }
  }

  small {
    margin-top: 5px;
    position: absolute;
    left: 42.7%;
    top: 100%;
  }
`;

export const SearchIcon = styled(GoSearch)`
  transition: color 0.2s ease;

  &:hover {
    color: inherit;
  }
`;
