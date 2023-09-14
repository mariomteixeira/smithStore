type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuceess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ServiceResponseSuceess<T> | ServiceResponseError;