'use strict';

const sum = (...args) => {
  let res = 0;
  for (const xt of args) {
    res += xt;
  }
  return res;
};

module.exports = { sum };
