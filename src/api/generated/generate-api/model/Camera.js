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
import Location from './Location';
import Record from './Record';

/**
 * The Camera model module.
 * @module model/Camera
 * @version v1
 */
class Camera {
    /**
     * Constructs a new <code>Camera</code>.
     * @alias module:model/Camera
     */
    constructor() { 
        
        Camera.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Camera</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Camera} obj Optional instance to populate.
     * @return {module:model/Camera} The populated <code>Camera</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Camera();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('cameraDestination')) {
                obj['cameraDestination'] = ApiClient.convertToType(data['cameraDestination'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = Location.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('locationID')) {
                obj['locationID'] = ApiClient.convertToType(data['locationID'], 'String');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [Record]);
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
            if (data.hasOwnProperty('deleteBy')) {
                obj['deleteBy'] = ApiClient.convertToType(data['deleteBy'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Camera.prototype['id'] = undefined;

/**
 * @member {String} status
 */
Camera.prototype['status'] = undefined;

/**
 * @member {String} cameraDestination
 */
Camera.prototype['cameraDestination'] = undefined;

/**
 * @member {module:model/Location} location
 */
Camera.prototype['location'] = undefined;

/**
 * @member {String} locationID
 */
Camera.prototype['locationID'] = undefined;

/**
 * @member {Array.<module:model/Record>} records
 */
Camera.prototype['records'] = undefined;

/**
 * @member {Date} lastModified
 */
Camera.prototype['lastModified'] = undefined;

/**
 * @member {String} modifiedBy
 */
Camera.prototype['modifiedBy'] = undefined;

/**
 * @member {String} deleteBy
 */
Camera.prototype['deleteBy'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
Camera.prototype['isDeleted'] = undefined;

/**
 * @member {Date} createdDate
 */
Camera.prototype['createdDate'] = undefined;

/**
 * @member {String} createdBy
 */
Camera.prototype['createdBy'] = undefined;






export default Camera;

