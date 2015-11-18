import { introJs } from 'intro.js';
import React, { PropTypes } from 'react';

// import './style.scss';

export default class IntroManager extends React.Component {

  static propTypes = {
    open: PropTypes.bool,
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    steps: PropTypes.arrayOf(PropTypes.shape({
        'element': PropTypes.string,
        'intro': PropTypes.string,
        'position': (props, propName, componentName) => {
          if (!/top|right|bottom|left/.test(props[propName])) {
            return new Error('`position` must be one of \'top\', \'right\', \'bottom\', or \'left\'.');
          }
        }
      })).isRequired,
    config: PropTypes.object
  }

  static defaultProps = {
    open: false,
    step: 0,
    steps: [],
    config: {
      'showStepNumbers': false,
      'skipLabel': '×',
      'nextLabel': '⟩',
      'prevLabel': '⟨',
      'doneLabel': '×'
    }
  }

  constructor (props) {

    super(props);

    this.intro = introJs(document.querySelector("body"));
    this.introIsOpen = false;
    this.intro.onexit(() => {
      this.introIsOpen = false;
    });

  }

  componentWillMount () {

    //

  }

  componentDidMount () {

    //

  }

  componentWillUnmount () {

    //

  }

  componentDidUpdate () {

    if (this.props.open) {

      // reset intro.js options every time props change --
      // treat it as stateless, the React way.
      let options = {
        steps: this.props.steps
      }
      options = Object.assign(options, this.props.config);

      this.intro.setOptions(options);
      this.intro.refresh();

      if (this.props.step) {
        if (!this.introIsOpen) {
          // step specfied, but intro not currently open;
          // open it and jump immediately to specified step
          this.intro.goToStep(this.props.step).start();
        } else {
          // intro already open; just go to step
          this.intro.goToStep(this.props.step).nextStep();
        }
      } else {
        // no step specified; just start from the beginning
        this.intro.start();
      }

      this.introIsOpen = true;

    } else {
      this.intro.exit();

    }

  }

  getDefaultState () {

    return {};

  }

  render () {

    return (
      <div className='panorama intro-manager'></div>
    );

  }

}
