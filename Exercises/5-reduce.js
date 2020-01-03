'use strict';

const sum = (...args) =>
  args.reduce((res, arg) => (res + arg), 0);


module.exports = { sum };
