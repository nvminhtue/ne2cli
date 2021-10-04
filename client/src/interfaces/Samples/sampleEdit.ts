import { FormikValues } from 'formik';

export interface SamplePageEdit extends FormikValues {
  sample: TSampleData,
}

export interface SamplePageEditComponent extends FormikValues {
  sample: TSampleData | undefined,
}

export type TSampleData = {
  id: string,
  name: string,
}
