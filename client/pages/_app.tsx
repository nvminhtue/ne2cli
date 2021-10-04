import { NextPage } from 'next';
import { createWrapper } from 'next-redux-wrapper';
import { AppProps } from 'next/app';

import { store } from 'src/store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default createWrapper(() => store).withRedux(MyApp);
