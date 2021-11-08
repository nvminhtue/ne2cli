import { FormikHandlers, FormikValues, withFormik } from 'formik';
import type { NextPage } from 'next';
import { connect, MapDispatchToProps } from 'react-redux';
import { compose } from 'redux';

import { createSample as createSampleAction, SampleActions } from 'src/components/Samples/sampleAction';
import SampleCreateComponent from 'src/components/Samples/SampleCreate';
import { validateCreatedSchema } from 'src/validation/Samples/create';

const SampleCreate: NextPage<FormikValues, FormikHandlers> = (props) => {
  return (
    <SampleCreateComponent {...props} />
  );
};

export default compose(
  connect(null, { createSample: createSampleAction }),
  withFormik<FormikValues, MapDispatchToProps<SampleActions, any>>({
    enableReinitialize: true,
    validationSchema: validateCreatedSchema,
    handleSubmit: (values, { props, resetForm }) => {
      const { createSample } = props;
      createSample(values);
      resetForm({});
    },
  })
)(SampleCreate);
