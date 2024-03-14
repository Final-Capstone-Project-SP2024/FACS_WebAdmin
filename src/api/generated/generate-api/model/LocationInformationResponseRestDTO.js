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
import LocationInformationResponse from './LocationInformationResponse';

/**
 * The LocationInformationResponseRestDTO model module.
 * @module model/LocationInformationResponseRestDTO
 * @version v1
 */
class LocationInformationResponseRestDTO {
    /**
     * Constructs a new <code>LocationInformationResponseRestDTO</code>.
     * @alias module:model/LocationInformationResponseRestDTO
     */
    constructor() { 
        
        LocationInformationResponseRestDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocationInformationResponseRestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationInformationResponseRestDTO} obj Optional instance to populate.
     * @return {module:model/LocationInformationResponseRestDTO} The populated <code>LocationInformationResponseRestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationInformationResponseRestDTO();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = LocationInformationResponse.constructFromObject(data['data']);
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
LocationInformationResponseRestDTO.prototype['message'] = undefined;

/**
 * @member {module:model/LocationInformationResponse} data
 */
LocationInformationResponseRestDTO.prototype['data'] = undefined;

/**
 * @member {Array.<module:model/LinkDTO>} links
 */
LocationInformationResponseRestDTO.prototype['links'] = undefined;






export default LocationInformationResponseRestDTO;
