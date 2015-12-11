import { PropTypes } from 'react';
import { tileLayer } from 'leaflet';
import { BaseTileLayer } from 'react-leaflet';

// Not possible until CartoDB releases an npm package for the Core API.
// import { Tiles } from 'cartodb';

// Until then, consumer applications must include the cartodb.js script elsewhere,
// e.g. in index.html as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js"></script>


export default class CartoDBTileLayer extends BaseTileLayer {

  static propTypes = {
    userId: PropTypes.string,
    sql: PropTypes.string,
    cartocss: PropTypes.string
  };

  componentWillMount () {

    super.componentWillMount();

    if (!cartodb) {
      throw new Error('CartoDBTileLayer requires `cartodb`. `cartodb` is not currently available as an npm package and therefore must be loaded as a global, e.g. via a CDN script in your index.html, such as <script src="http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.core.js">');
    }

    this.leafletElement = tileLayer('', this.props);

    this._getCartoDBTilesTemplates(function (error, response) {
      if (error) {
        // TODO: handle error
        console.error(error);
      } else {
        this.leafletElement.setUrl(response.tiles[0]);
      }
    }.bind(this));
  }

  _getCartoDBTilesTemplates (callback) {
    cartodb.Tiles.getTiles({
      type: 'cartodb',
      user_name: this.props.userId,
      sublayers: [{
        sql: this.props.sql,
        cartocss: this.props.cartocss
      }]
    },

    function (tiles, error) {
      if (!tiles || error) {
        if (!error) {
          error = 'Empty response.';
        }
        callback(error, tiles);
      } else {
        callback(null, tiles);
      }
    });
  }

}
