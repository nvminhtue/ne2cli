import { connect, getIn } from 'formik';
import { NextPage } from 'next';
import React, { FocusEvent, useCallback } from 'react';
import styled from 'styled-components';

import { InputInterface, FormikInput } from 'src/interfaces/common';

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props: InputInterface) => props.error ? 'red' : 'black'};
`;

const ErrorMessage = styled.label`
  color: red;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
`;

const Input: NextPage<InputInterface & FormikInput> = ({
  name,
  type,
  formik: { setFieldValue, setFieldTouched, errors, submitCount, values },
  ...rest
}) => {
  const error = submitCount && getIn(errors, name, '');
  const handleOnBlur = useCallback(() =>
    setFieldTouched(name), [name, setFieldTouched]);
    
  const handleOnChange = useCallback((event: FocusEvent<HTMLInputElement>) =>
    setFieldValue(name, event.target.value), [name, setFieldValue]);

  return (
    <InputWrapper>
      <StyledInput
        name={name}
        type={type}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        value={getIn(values, name, '')}
        error={error}
        {...rest}
      />
      <ErrorMessage>{error || ''}</ErrorMessage>
    </InputWrapper>
  );
};

export default connect<InputInterface>(Input);
