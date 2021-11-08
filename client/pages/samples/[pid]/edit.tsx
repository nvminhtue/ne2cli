import { FormikHandlers, withFormik } from 'formik';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { compose } from 'redux';

import { 
  editSamdple as editSampleAction,
  getSample as getSampleAction,
  SampleActions,
} from 'src/components/Samples/sampleAction';
import SampleEditComponent from 'src/components/Samples/SampleEdit';
import { sampleSelector } from 'src/components/Samples/sampleSelector';
import { SamplePageEdit } from 'src/interfaces/Samples/sampleEdit';
import { validateUpdatedSchema } from 'src/validation/Samples/update';

const SampleEdit: NextPage<SamplePageEdit, FormikHandlers> = ({ sample, getSample, handleSubmit }) => {
  const { pid } = useRouter().query;

  useEffect(() => {
    getSample(pid);
  }, [getSample, pid]);

  if (!sample) {
    return <h1>No Data Found</h1>;
  }

  return (
    <SampleEditComponent sample={sample} handleSubmit={handleSubmit} />
  );
};

export default compose(
  connect(sampleSelector, {
    editSample: editSampleAction,
    getSample: getSampleAction,
  }),
  withFormik<SamplePageEdit, MapDispatchToProps<SampleActions, any>>({
    validationSchema: validateUpdatedSchema,
    handleSubmit: (values, { props }) => {
      const { editSample } = props;
      editSample(values);
    },
  })
)(SampleEdit);
