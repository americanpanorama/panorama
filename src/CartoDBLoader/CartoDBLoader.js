import Queue from 'queue-async';
import CartoDBClient from 'cartodb-client';

/*
 * Lightweight wrapper around cartodb-client that provides a Promise-based interface
 * for making parallel requests to CartoDB given a SQL query and response format for each.
 *
 * cartodb-client, available via npm, is a simple XHR client tailored for use with CartoDB.
 * The functionality here could theoretically be moved into cartodb-client,
 * but for now they remain separate and complementary.
 *
 * @param userId  CartoDB user id. Used as the target account for API requests.
 * @param apiKey  CartoDB API key. If specified, CartoDBLoader will send
 *                  the API key over the wire as a parameter to the GET request to CartoDB.
 *                  Anyone with a web inspector can then see the API key,
 *                  so this should never be used in production!
 */
export default function CartoDBLoader (userId, apiKey) {

  const cartoDBClient = new CartoDBClient(userId);
  
  /** 
   * Use `queue-async` to defer() up an array of queries,
   * and return a Promise that is resolved when all requests have completed.
   * Accepts a list of objects formatted as { query, format }.
   */
  function query (queryConfigs) {

    return new Promise((resolve, reject) => {

      // Run up to 3 requests in parallel
      let queue = Queue(3);
      queryConfigs.forEach((queryConfig) => {
        queue.defer(request, queryConfig);
      });

      queue.awaitAll((error, ...responses) => {
        if (error) {
          reject(error);
        } else {
          resolve(...responses);
        }
      });

    });

  }

  function request (queryConfig, callback) {

    cartoDBClient.sqlRequest(queryConfig.query, function(err, response) {
      if (!err) {
        let innerResponse;
        switch (queryConfig.format.toLowerCase()) {
        case 'geojson':
          innerResponse = response.features;
          break;
        default:
          innerResponse = response.rows;
          break;
        }
        callback(null, innerResponse);
      } else {
        callback(err);
      }
    }, {
      'format': queryConfig.format,
      'dangerouslyExposedAPIKey': apiKey
    });

  }

  return {
    query: query
  };
  
}
