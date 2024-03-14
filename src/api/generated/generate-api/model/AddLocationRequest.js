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
 * The AddLocationRequest model module.
 * @module model/AddLocationRequest
 * @version v1
 */
class AddLocationRequest {
    /**
     * Constructs a new <code>AddLocationRequest</code>.
     * @alias module:model/AddLocationRequest
     * @param locationName {String} 
     */
    constructor(locationName) { 
        
        AddLocationRequest.initialize(this, locationName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locationName) { 
        obj['locationName'] = locationName;
    }

    /**
     * Constructs a <code>AddLocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddLocationRequest} obj Optional instance to populate.
     * @return {module:model/AddLocationRequest} The populated <code>AddLocationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddLocationRequest();

            if (data.hasOwnProperty('locationName')) {
                obj['locationName'] = ApiClient.convertToType(data['locationName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locationName
 */
AddLocationRequest.prototype['locationName'] = undefined;






export default AddLocationRequest;
