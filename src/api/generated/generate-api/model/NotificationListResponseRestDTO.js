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
import NotificationListResponse from './NotificationListResponse';

/**
 * The NotificationListResponseRestDTO model module.
 * @module model/NotificationListResponseRestDTO
 * @version v1
 */
class NotificationListResponseRestDTO {
    /**
     * Constructs a new <code>NotificationListResponseRestDTO</code>.
     * @alias module:model/NotificationListResponseRestDTO
     */
    constructor() { 
        
        NotificationListResponseRestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationListResponseRestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationListResponseRestDTO} obj Optional instance to populate.
     * @return {module:model/NotificationListResponseRestDTO} The populated <code>NotificationListResponseRestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationListResponseRestDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = NotificationListResponse.constructFromObject(data['data']);
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
NotificationListResponseRestDTO.prototype['message'] = undefined;

/**
 * @member {module:model/NotificationListResponse} data
 */
NotificationListResponseRestDTO.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/LinkDTO>} links
 */
NotificationListResponseRestDTO.prototype['links'] = undefined;






export default NotificationListResponseRestDTO;

