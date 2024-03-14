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
import UserInformationResponse from './UserInformationResponse';

/**
 * The UserInformationResponseListRestDTO model module.
 * @module model/UserInformationResponseListRestDTO
 * @version v1
 */
class UserInformationResponseListRestDTO {
    /**
     * Constructs a new <code>UserInformationResponseListRestDTO</code>.
     * @alias module:model/UserInformationResponseListRestDTO
     */
    constructor() { 
        
        UserInformationResponseListRestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserInformationResponseListRestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserInformationResponseListRestDTO} obj Optional instance to populate.
     * @return {module:model/UserInformationResponseListRestDTO} The populated <code>UserInformationResponseListRestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserInformationResponseListRestDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UserInformationResponse]);
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
UserInformationResponseListRestDTO.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/UserInformationResponse>} data
 */
UserInformationResponseListRestDTO.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/LinkDTO>} links
 */
UserInformationResponseListRestDTO.prototype['links'] = undefined;






export default UserInformationResponseListRestDTO;
