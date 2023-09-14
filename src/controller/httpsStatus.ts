const statusHTTP = (status: string): number => {
  const statusHTTPs : Record<string, number> = {
    INVALID_DATA: 400,
    UNHAUTHORIZED: 401,
    NOT_FOUND: 404,
    BAD_REQUEST: 422,
  };
  return statusHTTPs[status];
};

export default statusHTTP;