# Component: Legend
Clickable legend that can be used to label and toggle layers of a visualization.

![screenshot](https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png)

# install
`npm install @panorama/legend`

# usage
```js
var React  = require('react'),
    Legend = require('Legend');

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

# building/running locally
1. `npm install`
2. `npm start`
3. Open `http://localhost:8888/` in a browser.

# running tests
**TODO**
