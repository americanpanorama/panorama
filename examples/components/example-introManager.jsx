import * as React from 'react';

import { IntroManager } from '../../src/main';

export default class IntroManagerExample extends React.Component {

  static propTypes = {
    selected: React.PropTypes.string
  }

  constructor (props) {

    super(props);

    this.state = {
      isOpen: false
    };

    this.triggerIntro = this.triggerIntro.bind(this);
    this.onIntroExit = this.onIntroExit.bind(this);

  }

  triggerIntro (event) {

    // render with intro open to specified step
    this.setState({
      isOpen: true,
      step: (event && event.currentTarget) ? parseInt(event.currentTarget.dataset.step) : null,
    });

  }

  onIntroExit () {

    // re-render with intro closed
    this.setState({
      isOpen: false
    });

  }

  render () {

    let introData = {
      open: this.state.isOpen,
      step: this.state.step,
      config: {
        showStepNumbers: false,
        skipLabel: '×',
        nextLabel: '⟩',
        prevLabel: '⟨',
        doneLabel: '×'
      },

      steps: [
        {
          element: '.panorama.chart.area-chart',
          intro: 'Here\'s an area chart.',
          position: 'bottom'
        },
        {
          element: '.panorama.chart.offset-area-chart',
          intro: 'And look! Here\'s an offset area chart, with a bunch of area charts within.',
          position: 'top'
        },
        {
          element: '.panorama.chart.bar-chart.vertical',
          intro: 'Here is a lovely panorama toolkit bar chart.',
          position: 'bottom'
        },
        {
          element: '.panorama.chart.bar-chart.horizontal',
          intro: 'And here is a bar chart, with the intro tooltip floating below.',
          position: 'bottom'
        },
        {
          element: '.panorama.chart.map.choropleth',
          intro: 'This is a map of United States counties, pulled from a <a href="http://geojson.org/">GeoJSON file.</a>',
          position: 'top'
        }
      ],

      onExit: this.onIntroExit
    };

    return (
      <div>
        <a href='#' data-step='1' onClick={ this.triggerIntro }>Click here to start your tour at the first item.</a><br />
        <a href='#' data-step='5' onClick={ this.triggerIntro }>Click here to start your tour at the last item.</a>
        <IntroManager { ...introData } />
      </div>
    );

  }

}
