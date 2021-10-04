import { FormikHandlers, FormikValues } from 'formik';
import type { NextPage } from 'next';

import * as S from './styled';

const SampleEditComponent: NextPage<FormikValues, FormikHandlers> = ({ sample, handleSubmit }) => {
  return (
    <S.Wrapper>
      <h1>SAMPLE EDIT COMPONENT</h1>
      <S.Group>
        <S.Lable>Name</S.Lable>
        <S.NameInput
          name="name"
          type="text"
          value={sample.name}
        />
        <S.Button type="submit" onClick={() => handleSubmit()}>
          Submit
        </S.Button>
      </S.Group>
    </S.Wrapper>
  );};

export default SampleEditComponent;
