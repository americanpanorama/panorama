# Panorama visualization toolkit
Visualization components developed for the American Panorama project of the Digital Scholarship Lab at the University of Richmond.


# install
`npm install @panorama/toolkit`


#Components
The Panorama toolkit comprises a number of components that can be used individually, or wired together with the [Panorama Template](https://github.com/americanpanorama/panorama-template) as a starting point. Below is a list of the components available in the toolkit:


## Legend
Clickable legend that can be used to label and toggle layers of a visualization.
![screenshot](https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png)

### usage
```js
import * as React from 'react';
import { Legend } from 'panorama';

var legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	initialSelection: 'narratives'
};

React.render(<Legend data={legendData}/>, document.body);
```

## CategorizedQuantitiesView
```js
// TODO
```

### usage

# building/running locally
1. `npm install`
2. `npm start`
3. Open `http://localhost:8888/` in a browser.

# running tests
**TODO**
