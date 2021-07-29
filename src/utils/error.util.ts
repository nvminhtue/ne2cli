import { plainToClass } from 'class-transformer';
import { camelCase, includes } from 'lodash';
import { EntityNotFoundError } from 'typeorm';

import { ErrorDTO } from 'src/common/error.dto';
import {
  DatabaseErrorCode,
  ErrorConstant,
  ErrorLevelsConstant,
  ErrorTypesConstant,
} from 'src/constants/errors.constant';

export class ErrorUtil {
  static getErrorType(error: any) {
    const errorTypes = Object.keys(error.constraints);
    const highError = errorTypes.find(errType => includes(ErrorLevelsConstant.High, errType));
    if (highError) {
      return highError;
    }

    const mediumError = errorTypes.find(errType => includes(ErrorLevelsConstant.Medium, errType));
    if (mediumError) {
      return mediumError;
    }

    return errorTypes[0];
  }

  static badRequest(
    errorType: string,
    property?: string,
    entity?: string,
    indexes?: number[],
    payload?: object,
  ): ErrorDTO | ErrorDTO[] {
    let codeAndMessage = ErrorTypesConstant[errorType];
    if (codeAndMessage instanceof Function) {
      codeAndMessage = codeAndMessage(payload);
    }
    if (Array.isArray(indexes)) {
      return indexes.map(
        index => plainToClass(ErrorDTO, { entity, property, index, ...codeAndMessage }),
      );
    }
    return plainToClass(ErrorDTO, { entity, property, index: indexes, ...codeAndMessage });
  }

  static queryFailedError(exception, errorCode: number, entity: string): ErrorDTO {
    switch (errorCode) {
      case DatabaseErrorCode.uniqueViolation:
        const property = camelCase(
          exception.detail.match(ErrorConstant.GetPropertyInMessageRegex)[1]
          .split(', ')
          .pop());
        const { code, message } = ErrorTypesConstant.uniqueViolation;
        return plainToClass(ErrorDTO, { code, message, entity, property });
    }
  }

  static entityNotFoundError(error: EntityNotFoundError): ErrorDTO {
    const entity = error.message.match(ErrorConstant.GetEntityInMessageRegex)[0];
    const property = ErrorConstant.ErrorOnPrimaryKey;
    const { code, message } = ErrorTypesConstant.entityNotFound;

    return plainToClass(ErrorDTO, { entity, property, code, message });
  }

  static internalServerError(): ErrorDTO {
    const { code, message } = ErrorTypesConstant.internalServer;

    return plainToClass(ErrorDTO, { code, message });
  }
}
