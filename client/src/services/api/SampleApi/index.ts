import RestService from '../RestService';

interface ISample {
  name: string,
}

export class SampleService extends RestService {
  getSamples(): Promise<ISample[]> {
    return this.get({ url: 'samples'});
  }

  getSample(id: string): Promise<ISample> {
    return this.get({ url: `samples/${id}`});
  }

  createSample(data: ISample): Promise<ISample> {
    return this.post({ url: 'samples', data }, { enableFlashMessageOnError: true });
  }

  deleteSample(id: string): Promise<ISample> {
    return this.delete({ url: `samples/${id}`}, { enableFlashMessageOnError: true });
  }
}

export const SampleApi = new SampleService();
