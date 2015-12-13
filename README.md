# American Panorama toolkit
Visualization components developed for [American Panorama](http://dsl.richmond.edu/panorama/), from the Digital Scholarship Lab at the University of Richmond. [View Examples](http://americanpanorama.github.io/panorama/)

The toolkit is designed for use in the creation of historical maps such as those in the American Panorama Atlas. The components within can be installed via [npm](https://npmjs.com/) and integrated into any web-facing project. American Panorama also includes a [template](https://github.com/americanpanorama/panorama-template) that can be used as a starting point for maps in the American Panorama Atlas, and for other projects that aim to use Panorama components.

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
  
---

## Building/running locally
You will first need to install all necessary modules, so run `npm install` in the root directory.

### Build / Package components
This will build `@panorama/toolkit` to `dist` directory.
```
npm run build:dist
```

### Developing components
All components are in the `src/` folder; examples of components are in the `examples/components/` folder.

#### 1. Add the component
To create a new component, add a folder to `src/` with the name of the component, e.g. `MyComponent/`. Within, create two files:
* `MyComponent.jsx` (The React component)
* `style.scss` (Any required styles for the component)

Ensure that `MyComponent.jsx` imports the style sheet toward the top of the file, like so:
```
import './style.scss';
```

When you are ready to test your component, expose its module to the toolkit bundler by adding it to [`src/main.js`](./src/main.js). `import` the module at the top of the file, and add the module name to the `export default` block below.

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

```
npm run publish:dist
npm run publish:examples
```


### Running tests

TODO
```
npm test
```

### Publish to NPM
```bash
$ npm login
> Username: panorama
> Password: TODO: how to share npm password with contributors?
> Email: ericsoco@stamen.com
$ npm run publish:dist
```

### Acknowledgements
TODO: DSL/Richmond, Stamen, Mellon Foundation
