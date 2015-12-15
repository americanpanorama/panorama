## CartoDBTileLayer

<img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'>

Load and render tiles from CartoDB into a [`react-leaflet`](https://github.com/PaulLeCam/react-leaflet) map.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { CartoDBTileLayer } from '@panorama/toolkit';

ReactDOM.render(
  <Map>
    <CartoDBTileLayer
      userId={ /* cartodb user id */ }
      sql={ /* SQL query to generate tiles */ }
      cartocss={ /* CartoCSS to style tiles */ }
    />
  </Map>, document.body);
```
