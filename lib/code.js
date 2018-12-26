function formatCode(code, results, message = 'success', error = '') {
  let _obj = {
    statusCode: code,
    results: results,
    error: error,
    message: message,
  }
  return _obj;
};

module.exports = {
  formatCode: formatCode,
};