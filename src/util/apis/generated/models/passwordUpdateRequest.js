/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a PasswordUpdateRequest.
 */
class PasswordUpdateRequest {
  /**
   * Create a PasswordUpdateRequest.
   * @member {string} newPassword The new password that will be set for the
   * user. Needs to be at least 8 characters long and contain at least one
   * lower- and one uppercase letter.
   * @member {string} [oldPassword] The old password, if needed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PasswordUpdateRequest
   *
   * @returns {object} metadata of PasswordUpdateRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PasswordUpdateRequest',
      type: {
        name: 'Composite',
        className: 'PasswordUpdateRequest',
        modelProperties: {
          newPassword: {
            required: true,
            serializedName: 'new_password',
            type: {
              name: 'String'
            }
          },
          oldPassword: {
            required: false,
            serializedName: 'old_password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PasswordUpdateRequest;
