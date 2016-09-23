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
        let url = (this._isRetina()) ? response.tiles[0].replace(".png", "@2x.png") : response.tiles[0];
        this.leafletElement.setUrl(url);
      }
    }.bind(this));
  }
  
  _isRetina(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
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
