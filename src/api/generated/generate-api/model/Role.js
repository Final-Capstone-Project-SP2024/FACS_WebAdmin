/**
 * DressUpExchange-API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The Role model module.
 * @module model/Role
 * @version v1
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     */
    constructor() { 
        
        Role.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'Number');
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} roleId
 */
Role.prototype['roleId'] = undefined;

/**
 * @member {String} roleName
 */
Role.prototype['roleName'] = undefined;

/**
 * @member {Array.<module:model/User>} users
 */
Role.prototype['users'] = undefined;






export default Role;
