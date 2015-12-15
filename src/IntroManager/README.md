## IntroManager

<img src='https://cloud.githubusercontent.com/assets/1127259/11770141/742b39c4-a1ac-11e5-914f-9dc2966158ed.png'>

React wrapper for [intro.js](https://usablica.github.io/intro.js/), a simple walkthrough builder library that highlights and annotates elements as defined by selectors.

#### Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { IntroManager } from '@panorama/toolkit';

let introManagerConfig = {
  open: true,
  step: 1,
  config: {
    showStepNumbers: false,
    skipLabel: '×',
    nextLabel: '⟩',
    prevLabel: '⟨',
    doneLabel: '×'
  },
  
  steps: [
    {
      "element": ".left-column .top-row.template-tile",
      "intro": "Some copy describing the first element.",
      "position": "right"
    },
    {
      "element": ".right-column .top-row.template-tile",
      "intro": "<p>Some <strong>HTML</strong>copy for the second element.</p>",
      "position": "left"
    },
    {
      "element": ".left-column .bottom-row.template-tile",
      "intro": "Saved the best element for last.",
      "position": "top"
    }
  ],

  onExit: () => {
    // @panorama/toolkit components strive to be stateless.
    // Therefore, consumers of IntroManager are expected to
    // pass open/closed state into the component.
    this.setState({
      intro: {
        open: false
      }
    });
  }
}

ReactDOM.render(<IntroManager {...introManagerConfig}/>, document.body);
```
