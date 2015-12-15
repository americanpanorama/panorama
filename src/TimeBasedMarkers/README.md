## TimeBasedMarkers

<img src='https://cloud.githubusercontent.com/assets/1127259/11805256/32ba2428-a2bf-11e5-9b91-f7b15e223127.jpg'>

Load and render GeoJSON features into a [`react-leaflet`](https://github.com/PaulLeCam/react-leaflet) map. Toggle features by timestamp.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { TimeBasedMarkers } from '@panorama/toolkit';

let geoJson = {
  "features": [
    {
      "properties": {
        "end_year": "2000-01-01T00:00:00Z",
        "cartodb_id": 1,
        "startzoom": 8,
        "endzoom": 12,
        "maptype": "icon",
        "type": "place secondary",
        "justify": "right",
        "location": "Terre Haute .",
        "start_year": "1832-01-01T00:00:00Z"
      },
      "geometry": {
        "coordinates": [
          9.689345,
          -4.778362
        ],
        "type": "Point"
      },
      "type": "Feature"
    },
    {
      "properties": {
        "end_year": "2000-01-01T00:00:00Z",
        "cartodb_id": 1,
        "startzoom": 8,
        "endzoom": 12,
        "maptype": "label",
        "type": "place secondary",
        "justify": "right",
        "location": "Terre Haute .",
        "start_year": "1832-01-01T00:00:00Z"
      },
      "geometry": {
        "coordinates": [
          9.689345,
          -4.778362
        ],
        "type": "Point"
      },
      "type": "Feature"
    },
    // ...
  ],
  "type": "FeatureCollection"
};

let timeBasedMarkersConfig = {
  features: geoJson,
	currentDate: new Date(selectedYear, 0)
};

ReactDOM.render(
  <Map>
    <TimeBasedMarkers { ...timeBasedMarkersConfig }/>
  </Map>, document.body);
```
