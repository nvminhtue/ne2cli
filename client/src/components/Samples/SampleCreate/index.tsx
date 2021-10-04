import { FormikHandlers, FormikValues } from 'formik';
import type { NextPage } from 'next';

import * as S from './styled';

const SampleCreateComponent: NextPage<FormikValues, FormikHandlers> = (props) => {
  return (
    <S.Wrapper>
      <h1>SAMPLE CREATE COMPONENT</h1>
      <S.Group>
        <S.Lable>Name</S.Lable>
        <S.NameInput
          name="name"
          type="text"
        />
        <S.Button type="submit" onClick={() => props.handleSubmit()}>
          Submit
        </S.Button>
      </S.Group>
    </S.Wrapper>
  );};

export default SampleCreateComponent;
