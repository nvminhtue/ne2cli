import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getSamples as getSamplesAction, deleteSample as sampleDeleteAction, saveSamplesData } from 'src/components/Samples/sampleAction';
import SampleReadComponent from 'src/components/Samples/SampleList';
import { samplesSelector } from 'src/components/Samples/sampleSelector';
import { SamplePageIndex } from 'src/interfaces/Samples/sampleList';

const SampleRead: NextPage<SamplePageIndex> = ({ getSamples, deleteSample, samples: sampleData }) => {
  const [samples, setSample] = useState(sampleData);
  useEffect(() => {
    getSamples();
    () => (saveSamplesData([]));
  }, [getSamples]);
  
  useEffect(() => {
    setSample(sampleData);
  }, [sampleData]);

  const handleDelete = useCallback((id: string) => {
    deleteSample(id);
    const remainingData = (samples || []).length ? samples.filter(sample => sample.id !== id) : [];
    setSample(remainingData);
    saveSamplesData(remainingData);
  }, [samples, deleteSample]);

  return (
    <SampleReadComponent
      samples={samples || []}
      handleDelete={handleDelete}
    />
  );
};

export default connect(samplesSelector, {
  getSamples: getSamplesAction,
  deleteSample: sampleDeleteAction,
})(SampleRead);
