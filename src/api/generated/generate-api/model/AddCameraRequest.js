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

/**
 * The AddCameraRequest model module.
 * @module model/AddCameraRequest
 * @version v1
 */
class AddCameraRequest {
    /**
     * Constructs a new <code>AddCameraRequest</code>.
     * @alias module:model/AddCameraRequest
     */
    constructor() { 
        
        AddCameraRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddCameraRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddCameraRequest} obj Optional instance to populate.
     * @return {module:model/AddCameraRequest} The populated <code>AddCameraRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddCameraRequest();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
            }
            if (data.hasOwnProperty('locationId')) {
                obj['locationId'] = ApiClient.convertToType(data['locationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} status
 */
AddCameraRequest.prototype['status'] = undefined;

/**
 * @member {String} destination
 */
AddCameraRequest.prototype['destination'] = undefined;

/**
 * @member {String} locationId
 */
AddCameraRequest.prototype['locationId'] = undefined;






export default AddCameraRequest;

