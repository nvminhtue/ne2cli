import { FormikContextType } from 'formik';

export interface InputInterface {
  name: string
  type: string
  error?: boolean | string,
  value?: string
}

export interface FormikInput {
  formik: FormikContextType<any>,
}
