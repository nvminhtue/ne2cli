export const EntityConstant = {
  MaxStringLength: 255,
};

export const ValidationMessages = {
  requiredField: 'This is required field',
  maxLengthExceeded: (value: number) => `This value can not exceed ${value} characters`,
};
