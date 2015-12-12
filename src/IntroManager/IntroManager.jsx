import { introJs } from 'intro.js';
import React, { PropTypes } from 'react';
import './style.scss';

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
    config: PropTypes.object,
    onExit: PropTypes.func
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
    },
    onExit: null
  }

  constructor (props) {

    super(props);

    this.onIntroExit = this.onIntroExit.bind(this);

    this.initIntro();

  }

  initIntro () {

    this.intro = introJs(document.querySelector('body'));
    this.intro.onexit(this.onIntroExit);
    this.intro.oncomplete(this.onIntroExit);
    this.introIsOpen = false;

  }

  onIntroExit () {

    this.introIsOpen = false;
    if (this.props.onExit) {
      this.props.onExit();
    }

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

      // Intro.js manages its own state when open.
      if (this.introIsOpen) { return; }


      if (!this.intro._introItems) {

        // initialize only once
        let options = {
          steps: this.props.steps
        };
        options = Object.assign(options, this.props.config);
        this.intro.setOptions(options);

        // start from the specified step
        this.intro.goToStep(this.props.step).start();

      } else {

        // after initialization, Intro.js does a poor job
        // of accurately tracking the current step,
        // so we have to do this dance.
        if (!this.props.step || this.props.step === 1) {
          this.intro.start();
        } else {
          this.intro.goToStep(this.props.step-1).start();
        }

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
