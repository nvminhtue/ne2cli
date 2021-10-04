import type { NextPage } from 'next';
import Link from 'next/link';

import { SamplePageIndexComponent } from 'src/interfaces/Samples/sampleList';

import deleteIcon from '../../../../public/delete-icon.png';

import * as S from './styled';

const SampleRead: NextPage<SamplePageIndexComponent> = ({ samples, handleDelete }) => {
  return (
    <div>
      <h1>Samples</h1>
      <h3>
        Move to <Link href={{ pathname: '/samples/create' }}>create sample</Link>
      </h3>
      <S.List>
        {samples.map((sample: any) => (
          <li key={sample.id}>
            <S.ContentWrapper>
              <Link href={`/samples/${sample.id}/edit`}>
                {sample.name}
              </Link>
              <S.DeleteIcon
                src={deleteIcon}
                alt="delete"
                width={16}
                height={16}
                onClick={() => handleDelete(sample.id)}
              />
            </S.ContentWrapper>
          </li>
        ))}
      </S.List>
    </div>
  );
};

export default SampleRead;
