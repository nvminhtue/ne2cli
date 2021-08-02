import { Transform } from 'class-transformer';

export function Default(defaultValue: any) {
  return Transform(
    value => value === null || value === undefined ? defaultValue : value, { toClassOnly: true },
  );
}
