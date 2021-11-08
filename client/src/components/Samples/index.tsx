import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styled';

const SampleRead: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Sample client</title>
        <meta name="description" content="sample client content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <S.Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </S.Title>
        <h3>
          Move to <Link href="/samples">sample CRUD</Link>
        </h3>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </S.Main>
    </S.Container>
  );
};

export default SampleRead;
