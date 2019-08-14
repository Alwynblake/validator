'use strict';

class Validator {
  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) {
    return typeof input === 'object';
  }

  isArray(input, valueType) {
    return typeof (input, valueType) ==='[]';
  }

  isBoolean(input) {
    return typeof input ==='boolean';
  }

  isNumber(input) {
    return typeof input ==='number';
  }

  isFunction(input) {
    return typeof input ==='function';
  }

  isTruthy(input) {
    return typeof input ==='true';
  }

  // Vinicio - checks an object against a schema
  // isValid(data, schema)
  // isValidObject in my demo code
  isValid(data) {
  }
}

module.exports = Validator;