# Global





* * *

## Class: CensusModule
Instantiates an instance of the CitySDK Census module.

**availableDataSets**: `object` , Available years and the apis available with those years
**requiredVariables**: `object` , Required Variables for each API that MUST be in each request
**usBoundingBox**:  , Bounding box {object} to allow users to request all geographies within the US, as there is no US boundary map server
**stateCapitals**: `object` , Dictionary of state codes to state capital coordinates. i.e. "AL" -> 32.3617, -86.2792
**aliases**: `object` , Dictionary of aliases, string alias -> object with variable and description
### CensusModule.enable(apiKey) 

Enable function. Stores the API key for this module and sets it as enabled.  It will also compare the CitySDK core's version number to the minimum number required as specified for this module.

**Parameters**

**apiKey**: `string`, The census API key.

**Returns**: `boolean`, True if enabled, false if not enabled.

### CensusModule.parseToVariable(aliasOrVariable) 

Checks to see if a string is in the aliases dictionary and returns the appropriate variable if so.

**Parameters**

**aliasOrVariable**: `string`, A string to parse into a variable string.

**Returns**: `string`, Variable string

### CensusModule.parseToValidVariable(aliasOrVariable, api, year) 

Checks to see if a string is in the aliases dictionary and returns the appropriate VALID variable if so.

**Parameters**

**aliasOrVariable**: `string`, A string to parse into a variable string.

**api**: `string`, The api key being called (acs5, sf1, etc)

**year**: `string`, The year of the desired dataset

**Returns**: `string`, Variable string

### CensusModule.isNormalizable(alias) 

Determines if the alias is normalizable.  This is generally limited to aliases of ACS variables (American Community Survey)

**Parameters**

**alias**: `string`, Determines if the alias is normalizable.  This is generally limited to aliases of ACS variables (American Community Survey)

**Returns**: `boolean`, Returns TRUE if the alias is normalizable (as marked in the alias dictionary), otherwise, false.

### CensusModule.parseRequestStateCode(request) 

Parses the state code in a request object, converting two letter state codes to lat/lng

**Parameters**

**request**: `object`, Object representing an api request


### CensusModule.parseRequestLatLng(request) 

Checks the request object for lat/lng latitude/longitude and x/y fields and moves them to the appropriate locations

**Parameters**

**request**: `object`, Object representing an api request


### CensusModule.ESRItoGEO(esriJSON) 

Converts ESRI JSON to GeoJSON

**Parameters**

**esriJSON**: `string`, Converts ESRI JSON to GeoJSON

**Returns**: `Object`

### CensusModule.GEOtoESRI(geoJSON) 

Converts geoJSON to ESRI JSON

**Parameters**

**geoJSON**: `string`, Converts geoJSON to ESRI JSON

**Returns**: `object`

### CensusModule.getVariableDictionary(api, year, callback) 

Downloads an ACS API's entire dictionary of variables from the Census

**Parameters**

**api**: `string`, Downloads an ACS API's entire dictionary of variables from the Census

**year**: `string`, Downloads an ACS API's entire dictionary of variables from the Census

**callback**: `function`, Downloads an ACS API's entire dictionary of variables from the Census


### CensusModule.latLngToFIPS(lat, lng, callback) 

Converts co-ordinates to Census FIPS via the Geocoder API

**Parameters**

**lat**: `float`, Latitude

**lng**: `float`, Longitude

**callback**: `function`, Callback function


### CensusModule.addressToFIPS(street, city, state, atfCallback) 

Converts a street address to Census FIPS via the Geocoder API

**Parameters**

**street**: `string`, Street Address

**city**: `string`, City

**state**: `string`, State (2-Letter USPS Code)

**atfCallback**: `function`, Callback function


### CensusModule.ZIPtoLatLng(zip, callback) 

Converts a ZIP code to Lat/Lng and calls the callback on it.

**Parameters**

**zip**: `Number`, 5 digit Zip code

**callback**: `function`, Converts a ZIP code to Lat/Lng and calls the callback on it.


### CensusModule.summaryRequest(request, callback) 

Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically

**Parameters**

**request**: `object`, JSON request (see APIRequest)

**callback**: `function`, Makes a request to the ACS5 Summary API. Should be used via APIRequest and not on its own, typically


### CensusModule.tigerwebRequest(request, callback) 

Makes a call to the Census TigerWeb API for Geometry.

**Parameters**

**request**: `object`, Makes a call to the Census TigerWeb API for Geometry.

**callback**: `function`, Makes a call to the Census TigerWeb API for Geometry.


### CensusModule.APIRequest(request, callback) 

Processes a data request by looking at a JSON request

**Parameters**

**request**: `object`, The JSON object of the request

**callback**: `function`, A callback, which accepts a response parameter


### CensusModule.validateRequestGeographyVariables(requestIn, callback) 

Checks the geo-related parts of the request against the geography definition of the API being requested

**Parameters**

**requestIn**: `object`, Checks the geo-related parts of the request against the geography definition of the API being requested

**callback**: `function`, Checks the geo-related parts of the request against the geography definition of the API being requested


### CensusModule.validateRequestGeographyVariablesProcess(requestIn, callback) 

Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.

**Parameters**

**requestIn**: `object`, Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.

**callback**: `function`, Compares the geoDefinition against the request.  Returns false if location variables required by the api are missing.


### CensusModule.GEORequest(request, callback) 

Retrieves data and geographic shapes encoded as geoJSON.

**Parameters**

**request**: `object`, The JSON request

**callback**: `function`, The callback to take the response, which is geoJSON




* * *







**Overview:** The Census Module provides access to the various data sets provided by the Census Bureau. This includes several surveys (ACS, Decennial, etc), the geocoder service (convert locations to FIPS locations, and TigerWeb (map shape data).

