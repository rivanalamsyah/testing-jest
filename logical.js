const isTrue = (a, b) => a && b;

const isFalse = (a, b) => a || b;

const isNot = (a) => !a;

const isNull = (a) => a === null;

const isUndefined = (a) => a === undefined;

module.exports = {
  isTrue,
  isFalse,
  isNot,
  isNull,
  isUndefined
};
