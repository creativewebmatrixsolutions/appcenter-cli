/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ErrorError class.
 * @constructor
 * @member {number} [code] The status code return by the API. It can be 400 or
 * 403 or 500.
 * 
 * @member {string} [message] The reason for the request failed
 * 
 */
function ErrorError() {
}

/**
 * Defines the metadata of ErrorError
 *
 * @returns {object} metadata of ErrorError
 *
 */
ErrorError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Error_error',
    type: {
      name: 'Composite',
      className: 'ErrorError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'Number'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ErrorError;