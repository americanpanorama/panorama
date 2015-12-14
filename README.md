# American Panorama toolkit
Visualization components developed for [American Panorama](http://dsl.richmond.edu/panorama/), from the Digital Scholarship Lab at the University of Richmond. [View Examples](http://americanpanorama.github.io/panorama/)

The toolkit is designed for use in the creation of historical maps such as those in the American Panorama Atlas. The components within can be installed via [npm](https://npmjs.com/) and integrated into any web-facing project. American Panorama also includes a [template](https://github.com/americanpanorama/panorama-template) that can be used as a starting point for maps in the American Panorama Atlas, and for other projects that aim to use Panorama components. All of the components within that are "views" (meaning they appear in the DOM) are [React](https://facebook.github.io/react/) components.

For a higher-level overview of the architecture of the [American Panorama](http://dsl.richmond.edu/panorama/) atlas, see: [ARCHITECTURE](ARCHITECTURE.md)

For various server-side database queries that are outside the scope of the toolkit, but which are useful for preparing data for your visualizations, see: [USEFUL QUERIES](USEFUL_QUERIES.md)

---

## Installing components in your project

You might consider starting with the American Panorama [template](https://github.com/americanpanorama/panorama-template). Whether or not you do, please follow these instructions to bring the American Panorama components into your project.

### Install the correct version of Node.js
Ensure that your Node version matches that present in `.nvmrc`.
[`nvm`](https://github.com/creationix/nvm) is the easiest way to do this,
especially when using projects that require multiple versions of Node (see the
`nvm` repo for installation instructions):

```bash
$ nvm install
Found '/Users/seth/src/americanpanorama/panorama-template/.nvmrc' with version <0.12.7>
######################################################################## 100.0%
Now using node v0.12.7 (npm v2.11.3)
```

NOTE: you'll need to run `nvm install` (or `nvm use`) in each shell instance.

Ensure your npm version is > `2.7.0` (required for support of npm scoped packages):

`npm --version`

If <= `2.7.0`, update npm:

`sudo npm install npm -g`

### Install the toolkit
Then, install the toolkit:

`npm install @panorama/toolkit`

---

## Components
The Panorama toolkit comprises a number of components that can be used individually, or wired together with the [Panorama Template](https://github.com/americanpanorama/panorama-template) as a starting point. Below is a list of the components available in the toolkit.

### PanoramaDispatcher

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### AreaChart

<a href='./src/AreaChart/AreaChart.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770149/7448e974-a1ac-11e5-90b6-3185c3630552.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { AreaChart } from '@panorama/toolkit';

let areaChartConfig = {
  data: areaChartData,

  width: 600,
  height: 200,

  // Optionally specify custom margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify accessors to match your data format
  xAccessor: d => d.time,
  yAccessor: d => d.value,

  // Optionally specify custom scales
  xScale: d3.scale.linear()
    .domain([minTime, maxTime]),
  yScale: d3.scale.linear()
    .domain(minValue, maxValue])
};

ReactDOM.render(<AreaChart {...areaChartConfig}/>, document.body);
```

### CartoDBLoader

<a href='./src/CartoDBLoader/CartoDBLoader.js'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### CartoDBTileLayer

<a href='./src/CartoDBTileLayer/CartoDBTileLayer.jsx'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### DiscreteBarChart

<a href='./src/DiscreteBarChart/DiscreteBarChart.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770147/743ed722-a1ac-11e5-87ab-5d4b9ea673e9.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { DiscreteBarChart } from '@panorama/toolkit';

let discreteBarChartConfig = {
	// TODO
};

ReactDOM.render(<DiscreteBarChart {...discreteBarChartConfig}/>, document.body);
```

### Donut

<a href='./src/Leaflet/Donut/Donut.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770150/744a4ec2-a1ac-11e5-8d45-c932e155ae0c.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { Donut } from '@panorama/toolkit';

let donutConfig = {
	// TODO
};

ReactDOM.render(<Donut {...donutConfig}/>, document.body);
```

### HashManager

<a href='./src/HashManager/HashManager.js'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### HorizontalDiscreteBarChart

<a href='./src/HorizontalDiscreteBarChart/HorizontalDiscreteBarChart.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770146/743552f6-a1ac-11e5-9ec1-884458177541.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { HorizontalDiscreteBarChart } from '@panorama/toolkit';

let hoizontalBarChartConfig = {
	// TODO
};

ReactDOM.render(<HorizontalDiscreteBarChart {...hoizontalBarChartConfig}/>, document.body);
```

### IntroManager

<a href='./src/IntroManager/IntroManager.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770141/742b39c4-a1ac-11e5-914f-9dc2966158ed.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { IntroManager } from '@panorama/toolkit';

let introManagerConfig = {
	// TODO
};

ReactDOM.render(<IntroManager {...introManagerConfig}/>, document.body);
```

### ItemSelector

<a href='./src/ItemSelector/ItemSelector.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770143/7432a538-a1ac-11e5-8e89-890621d263ca.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { ItemSelector } from '@panorama/toolkit';

let introManagerConfig = {
	// TODO
};

ReactDOM.render(<ItemSelector {...introManagerConfig}/>, document.body);
```

### LeafletChoropleth

<a href='./src/Leaflet/Choropleth/Choropleth.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770148/7447819c-a1ac-11e5-8e39-7a89049d6e27.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { LeafletChoropleth } from '@panorama/toolkit';

let leafletChoroplethConfig = {
	// TODO
};

ReactDOM.render(<LeafletChoropleth {...leafletChoroplethConfig}/>, document.body);
```

### Legend

<a href='./src/Legend/Legend.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png'></a>

Clickable legend that can be used to label and toggle layers of a visualization.


#### Usage
```js
import * as React from 'react';
import { Legend } from '@panorama/toolkit';

let legendData = {
	items: [
		'narratives',
		'cotton',
		'sugar'
	],
	selectedItem: this.state.selectedItem || 'narratives'
};

ReactDOM.render(<Legend { ...legendData } onItemSelected={ this.onItemSelected }/>, document.body);
```

### MapChoropleth

<a href='./src/MapChoropleth/MapChoropleth.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770142/74317d52-a1ac-11e5-99bb-d38fbcf7fa02.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { MapChoropleth } from '@panorama/toolkit';

let mapChoroplethConfig = {
  // TODO
};

ReactDOM.render(<MapChoropleth {...mapChoroplethConfig}/>, document.body);
```

### Navigation

<a href='./src/Navigation/Navigation.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770145/7434fc84-a1ac-11e5-9bf4-8a797d19fb8d.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { Navigation } from '@panorama/toolkit';

let navigationConfig = {
	// TODO
};

ReactDOM.render(<Navigation {...navigationConfig}/>, document.body);
```

### OffsetAreaChart

<a href='./src/OffsetAreaChart/OffsetAreaChart.jsx'><img src='https://cloud.githubusercontent.com/assets/1127259/11770144/7433df16-a1ac-11e5-9226-d3d64e98142a.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { AreaChart } from '@panorama/toolkit';

let offsetAreaChartConfig = {
  width: 600,
  height: 300,

  // optional; used to draw baselines and metadata presence circles
  data: offsetAreaChartData.offsetAreaChartMetadata,

  // d3 conventional margins
  margin: { top: 10, right: 10, bottom: 10, left: 10 },

  // Optionally specify custom scales
  xScale: d3.scale.linear()
    .domain([minTime, maxTime]),
  yScale: d3.scale.linear()
    .domain(minValue, maxValue])

  // accessor for start and end of baselines
  xAccessor: (d, i) => i ? d.endTime : d.startTime,

  // accessor for metadata presence circles
  metadataAccessor: d => d.metadataTimes,

  // hide axes
  axisProps: null,

  // data and accessors used to render each AreaChart
  areaChartData: offsetAreaChartData.areaChartsData,
  areaChartConfig: {
    xAccessor: d => d.time,
    yAccessor: d => d.value,
  },

  // colors applied to AreaCharts
  colorPalette: [
    '#466834',
    '#C163D5',
    '#D34E2B'
  ],

  // optionally specify an initially selected chart
  selectedChartId: 22,

  // id of each chart
  chartIdAccessor: d => d.length ? d[0].chartId : d.chartId
};

ReactDOM.render(<OffsetAreaChart {...offsetAreaChartConfig}/>, document.body);
```

### Punchcard

<a href='./src/Punchcard/Punchcard.jsx'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { Punchcard } from '@panorama/toolkit';

let punchcardConfig = {
	// TODO
};

ReactDOM.render(<Punchcard {...punchcardConfig}/>, document.body);
```

### TimeBasedMarkers

<a href='./src/TimeBasedMarkers/TimeBasedMarkers.jsx'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { TimeBasedMarkers } from '@panorama/toolkit';

let timeBasedMarkersConfig = {
	// TODO
};

ReactDOM.render(<TimeBasedMarkers {...timeBasedMarkersConfig}/>, document.body);
```

### Tooltip

<a href='./src/Leaflet/Tooltip/Tooltip.jsx'><img src='https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png'></a>

TODO: description and screenshot


#### Usage
```js
import * as React from 'react';
import { Tooltip } from '@panorama/toolkit';

let tooltipConfig = {
	// TODO
};

ReactDOM.render(<Tooltip {...tooltipConfig}/>, document.body);
```

---

## Developing components

Developing new components and modifying existing components requires intermediate knowledge of JavaScript and [React](https://facebook.github.io/react/), as well as basic familiarity with [npm](https://npmjs.com/). To get started, clone this repo, `cd` into the root directory, and install all necessary modules via `npm install`.

All components are in the `src/` folder; examples of components are in the `examples/components/` folder. Note that American Panorama components are written in ES6 and use Babel to transpile to ES5 JavaScript. **TODO: link to ES6 primer**

#### 1. Add the component

To create a new component, add a folder to `src/` with the name of the component, e.g. `MyComponent/`. Within, create two files:
* `MyComponent.jsx`: The React component
* `style.scss`: Any required styles for the component (optional)

Ensure that `MyComponent.jsx` imports the style sheet toward the top of the file, like so:
```
import './style.scss';
```

_Note: if your component is not a view component, it does not need to use React; just create a vanilla JavaScript (`.js`) file instead. See [`HashManager.js`](./src/HashManager/) for an example._

When you are ready to test your component, expose its module to the toolkit bundler by adding it to [`src/main.js`](./src/main.js). `import` the module at the top of the file, and add the module name to the `export default` block below.

##### A note on component design:

As a general rule, React components should be stateless, and should derive their state from `this.props`. [This article](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) describes the pattern in more detail. Be sure to specify a `static propTypes` block at the top of the class that both documents and enforces the public API of your component. As much as possible, avoid using state (either React's `this.state` or property instances, e.g. `this.someVar`). This ensures maximum flexibility and reusability of your component, and minimizes state-related bugs; state will always flow into the component from the component's parent (usually the root `App.jsx` file).

Try to avoid adding any but the most basic styles to your component's `style.scss` file. Consumers of your component should be able to customize appearance as desired, so avoid being overly-specific with your CSS rules, and add classes to any elements that might be styled by an end user so that they can be selected in CSS.

#### 2. Add an example and documentation

Add an example for your component to `examples/`. Create a React component in `examples/components/` that will load and display your new component. Pass any required and optional props into your new component from this file. Then, `import` your example component into [`examples/app.js`](./examples/app.js).

Add documentation for your component to [this README](#Components).


#### 3. Build

To test your component on the examples page, fire up a local development server by running `npm start` from the root directory. The server runs on [http://localhost:8888/](http://localhost:8888/); open a browser to that page to see the examples page.


#### 4. Export

There are a few ways to make your component available to other projects.

##### A. Push builds to GitHub

You can point a project's `package.json` to a GitHub repository in order to pull down and use the `HEAD` of that repo as the dependency. To do this with the American Panorama toolkit, you would add this to the `package.json` of your project (not to the toolkit itself!):

```
"dependencies": {
    "@panorama/toolkit": "americanpanorama/panorama",
    ...
}
```

Since the toolkit's [`package.json`](./package.json) specifies `dist/components.js` as the entry point for any application using the toolkit via npm, we need to ensure that our new component is built into `dist/components.js` and pushed to GitHub. To build your new component, run `npm run build:dist` from the root directory. (*Note: This will lint all the source as well -- watch for and fix any build or lint errors before proceeding!*).

Then, `git commit` the build and `git push` it to the toolkit repo.

Finally, switch over to your application that is using `@panorama/toolkit` and uninstall and reinstall the toolkit with these commands:

```
npm uninstall @panorama/toolkit
npm install @panorama/toolkit
```

Now, your new component will be available to your project.

##### B. `npm link`

You can also link one local project directly to another via `npm link`. The procedure is explained [here](https://docs.npmjs.com/cli/link); basically this involves setting up a system-wide pointer to your local install of `@panorama/toolkit` and then symlinking to that install from your application using the toolkit.

This process is less foolproof than pushing builds to GitHub because `npm link` also symlinks dependencies from `@panorama/toolkit`'s `node_modules` folder, and this can cause conflicts between / multiple copies of dependencies in the toolkit and in your application. That said, if you get it working it allows you to develop your new component and consume it in your application simultaneously, without the build/push steps above.

##### C. Publish to npm

Once you're satisfied with the state of your new component, and you have a working example in place, it's time to make it available to the npm-using public! The toolkit has scripts (run from the root directory) set up to ease this process. Here's a quick overview of the process automated by those scripts.

##### `npm run publish:dist`

**Be certain you know what you're doing and are sure the toolkit is in working order before you run this script!** Publishing broken code can break other people's projects if they run `npm install`, and then you will get angry emails. We don't want angry emails.

*Before running this script, you'll have to be logged into npm with username: `panorama` / email: `ericsoco@stamen.com`.* Contact a `@panorama/toolkit` administrator for the password. You can either login via [`npm login`](https://docs.npmjs.com/cli/adduser) or via [npm's website](https://www.npmjs.com/login).

This script will automatically bump the toolkit version and publish the repo in its current state to npm. It runs [`.bin/publish-dist.sh`](./.bin/publish-dist.sh), which does these things:

- rebuild the components
- patch the version (`M.m.p` -> `M.m.(p+1)`)
- commit and push those changes to GitHub
- publish to npm

The script is fairly robust, but if you see any errors, you may need to run these steps manually. They're all visible in [the script](./.bin/publish-dist.sh).

##### `npm run publish:examples`

This script updates the [examples page](http://americanpanorama.github.io/panorama/). It runs [`.bin/publish-examples.sh`](./.bin/publish-examples.sh), which simply builds and deploys the examples. There's not much to it, and it's much less risky than `npm run publish:dist`.

---

## Acknowledgements
TODO: DSL/Richmond, Stamen, Mellon Foundation
