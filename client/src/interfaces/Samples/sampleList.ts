import { deleteSample, getSamples } from 'src/components/Samples/sampleAction';

import { TSamplesState } from './sampleSelector';

export interface SamplePageIndex {
  deleteSample: typeof deleteSample,
  getSamples: typeof getSamples,
  samples: TSamplesState,
}

export interface SamplePageIndexComponent {
  handleDelete: (_id: string) => void,
  samples: TSamplesState,
}
