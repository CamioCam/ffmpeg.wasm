let logging = false;
let customLogger = () => {};

const setLogging = (_logging) => {
  logging = _logging;
};

const setCustomLogger = (logger) => {
  customLogger = logger;
};

const log = (type, message) => {
  customLogger({ type, message });
  // Make it so all logging is handled by the callback above
  // if (logging) {
  //   console.log(`[${type}] ${message}`);
  // }
};

module.exports = {
  logging,
  setLogging,
  setCustomLogger,
  log,
};
