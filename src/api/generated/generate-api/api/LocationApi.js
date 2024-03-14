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


import ApiClient from "../ApiClient";
import AddLocationRequest from '../model/AddLocationRequest';
import AddStaffRequest from '../model/AddStaffRequest';
import LocationIQueryableRestDTO from '../model/LocationIQueryableRestDTO';
import LocationInformationResponseRestDTO from '../model/LocationInformationResponseRestDTO';

/**
* Location service.
* @module api/LocationApi
* @version v1
*/
export default class LocationApi {

    /**
    * Constructs a new LocationApi. 
    * @alias module:api/LocationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the idAddPost operation.
     * @callback module:api/LocationApi~idAddPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddStaffRequest} opts.addStaffRequest 
     * @param {module:api/LocationApi~idAddPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationInformationResponseRestDTO}
     */
    idAddPost(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['addStaffRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling idAddPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LocationInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/{id}/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the locationGet operation.
     * @callback module:api/LocationApi~locationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationIQueryableRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/LocationApi~locationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationIQueryableRestDTO}
     */
    locationGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LocationIQueryableRestDTO;
      return this.apiClient.callApi(
        '/Location', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the locationIdDelete operation.
     * @callback module:api/LocationApi~locationIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/LocationApi~locationIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationInformationResponseRestDTO}
     */
    locationIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling locationIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LocationInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/Location/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the locationIdPatch operation.
     * @callback module:api/LocationApi~locationIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLocationRequest} opts.addLocationRequest 
     * @param {module:api/LocationApi~locationIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationInformationResponseRestDTO}
     */
    locationIdPatch(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['addLocationRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling locationIdPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LocationInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/Location/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the locationPost operation.
     * @callback module:api/LocationApi~locationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LocationInformationResponseRestDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLocationRequest} opts.addLocationRequest 
     * @param {module:api/LocationApi~locationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LocationInformationResponseRestDTO}
     */
    locationPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['addLocationRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = LocationInformationResponseRestDTO;
      return this.apiClient.callApi(
        '/Location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
