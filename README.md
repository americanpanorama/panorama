# American Panorama toolkit
Visualization components developed for [American Panorama](http://dsl.richmond.edu/panorama/), from the Digital Scholarship Lab at the University of Richmond. [View Examples](http://americanpanorama.github.io/panorama/)

The toolkit is designed for use in the creation of historical maps such as those in the American Panorama Atlas. The components within can be installed via [npm](https://npmjs.com/) and integrated into any web-facing project. American Panorama also includes a [template](https://github.com/americanpanorama/panorama-template) that can be used as a starting point for maps in the American Panorama Atlas, and for other projects that aim to use Panorama components. All of the components within that are "views" (meaning they appear in the DOM) are [React](https://facebook.github.io/react/) components.

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

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### CartoDBLoader

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### CartoDBTileLayer

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### DiscreteBarChart

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### Donut

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### HashManager

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### HorizontalDiscreteBarChart

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### IntroManager

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### ItemSelector

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### LeafletChoropleth

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### Legend

![screenshot](https://cloud.githubusercontent.com/assets/1127259/10005832/610e48b0-606e-11e5-91ee-af887393e22d.png)

Clickable legend that can be used to label and toggle layers of a visualization.


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

### MapChoropleth

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### OffsetAreaChart

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### Punchcard

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### TimeBasedMarkers

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
```

### Tooltip

![screenshot](https://cdn0.iconfinder.com/data/icons/feather/96/circle-check-32.png)

TODO: description and screenshot


#### Usage
```js
// TODO: usage
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

##### Component design

As a general rule, React components should be stateless, and should derive their state from `this.props`. [This article](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) describes the pattern in more detail. Be sure to specify a `static propTypes` block at the top of the class that both documents and enforces the public API of your component. As much as possible, avoid using state (either React's `this.state` or property instances, e.g. `this.someVar`). This ensures maximum flexibility and reusability of your component, and minimizes state-related bugs; state will always flow into the component from the component's parent (usually the root `App.jsx` file).

#### 2. Add an example

Add an example for your component to `examples/`.
TODO

#### 3. Build

To test your component on the examples page, fire up the local development server (running on [http://localhost:8888/](http://localhost:8888/)):
```
npm start
```

#### 4. Export

TODO: test against latest by pointing your project at GH repo
TODO: publish (update) to npm

This will build `@panorama/toolkit` to `dist` directory.
```
npm run build:dist
```


```
npm run publish:dist
npm run publish:examples
```



### Publish to NPM
```bash
$ npm login
> Username: panorama
> Password: TODO: how to share npm password with contributors?
> Email: ericsoco@stamen.com
$ npm run publish:dist
```

---

## Acknowledgements
TODO: DSL/Richmond, Stamen, Mellon Foundation
