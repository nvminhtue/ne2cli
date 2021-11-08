import styled from 'styled-components';

import { Input } from 'src/components/common';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100vh;
  flex-direction: column;
`;

export const NameInput = styled(Input)`
  padding: 10px 10px 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
  font-weight: 200;
`;

export const Lable = styled.label`
  margin-right: 5px;
  font-size: 20px;
`;

export const Group = styled.h2`
  display: flex;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
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
  margin: 10px 0;
  width: 200px;

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
