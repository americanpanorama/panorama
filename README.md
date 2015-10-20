# Panorama visualization toolkit
Visualization components developed for the American Panorama project of the Digital Scholarship Lab at the University of Richmond. [View Examples](http://americanpanorama.github.io/panorama/)


## Install
Ensure your npm version is > `2.7.0` (required for support of npm scoped packages):

`npm --version`

If <= `2.7.0`, update npm:

`sudo npm install npm -g`

Then, install the toolkit:

`npm install @panorama/toolkit`


## Components
The Panorama toolkit comprises a number of components that can be used individually, or wired together with the [Panorama Template](https://github.com/americanpanorama/panorama-template) as a starting point. Below is a list of the components available in the toolkit:


### Legend
Clickable legend that can be used to label and toggle layers of a visualization.
![screenshot](https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png)

#### Usage
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

### CategorizedQuantitiesView
```js
// TODO
```

## Building/running locally
You will first need to install all necessary modules, so run `npm install` in the root directory.

### Build / Package components
This will build `@panorama/toolkit` to `dist` directory.
```
npm run components:build
```

### Develop components
* Components are in `src` folder
* Examples of components are in the `examples/components` folder

To run local development server at [http://localhost:8888/](http://localhost:8888/):
```
npm run components:dev
```

### Update toolkit GitHub Page.
```
npm run components:ghpage
```

### Tests
```
npm run components:test
```

### Publish to NPM
**TODO**
