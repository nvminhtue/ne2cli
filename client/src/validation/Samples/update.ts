import * as Yup from 'yup';

import { EntityConstant, ValidationMessages } from 'src/constants/common';

export const validateUpdatedSchema =
  Yup.object().shape({
    id: Yup.string().required().uuid(),
    name: Yup.string()
      .required(ValidationMessages.requiredField)
      .max(
        EntityConstant.MaxStringLength,
        ValidationMessages.maxLengthExceeded(EntityConstant.MaxStringLength)
      )
  });
