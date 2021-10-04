import * as Yup from 'yup';

import { EntityConstant, ValidationMessages } from 'src/constants/common';

export const validateCreatedSchema =
  Yup.object().shape({
    name: Yup.string()
      .required(ValidationMessages.requiredField)
      .max(
        EntityConstant.MaxStringLength,
        ValidationMessages.maxLengthExceeded(EntityConstant.MaxStringLength)
      )
  });
