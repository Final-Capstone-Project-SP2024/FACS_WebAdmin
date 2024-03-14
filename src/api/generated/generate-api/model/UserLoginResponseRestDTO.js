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
import LinkDTO from './LinkDTO';
import UserLoginResponse from './UserLoginResponse';

/**
 * The UserLoginResponseRestDTO model module.
 * @module model/UserLoginResponseRestDTO
 * @version v1
 */
class UserLoginResponseRestDTO {
    /**
     * Constructs a new <code>UserLoginResponseRestDTO</code>.
     * @alias module:model/UserLoginResponseRestDTO
     */
    constructor() { 
        
        UserLoginResponseRestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserLoginResponseRestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserLoginResponseRestDTO} obj Optional instance to populate.
     * @return {module:model/UserLoginResponseRestDTO} The populated <code>UserLoginResponseRestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserLoginResponseRestDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = UserLoginResponse.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [LinkDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
UserLoginResponseRestDTO.prototype['message'] = undefined;

/**
 * @member {module:model/UserLoginResponse} data
 */
UserLoginResponseRestDTO.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/LinkDTO>} links
 */
UserLoginResponseRestDTO.prototype['links'] = undefined;






export default UserLoginResponseRestDTO;
