import styled from 'styled-components';

import { Input } from 'src/components/common';

export const Wrapper = styled.div`
  display: flex,
  margin-top: 10px;
  width: 100vh;
  flex-direction: column;
`;

export const NameInput = styled(Input)`
  padding: 13px 50px 13px;
  font-size: 20px;
  font-weight: 200;
  border: 1px solid black;
`;

export const Lable = styled.label`
  margin-right: 5px;
`;

export const Group = styled.h2`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 10px;

  &::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover::after {
    top: 0px;
  left: 0px;
  }
`;
