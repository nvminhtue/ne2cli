import type { NextPage } from 'next';
import { Provider } from 'react-redux';

import SampleComponent from 'src/components/Samples';
import { store } from 'src/store';

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <SampleComponent />
    </Provider>
  );
};

export default Home;
