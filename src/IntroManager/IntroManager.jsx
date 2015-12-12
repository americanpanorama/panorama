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

    let introManager = this;

    this.intro = introJs(document.querySelector('body'));
    this.introIsOpen = false;
    this.hasBeenOpened = false;

    this.intro.onexit(() => {
      introManager.introIsOpen = false;
      if (introManager.props.onExit) {
        introManager.props.onExit();
      }
    });

    this.intro.oncomplete(() => {
      this.intro.exit();
      // TODO: there is still a bug here;
      // after completing the intro, the overlay no longer appears and navigation ceases to work.
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
      };
      options = Object.assign(options, this.props.config);

      this.intro.setOptions(options);
      this.intro.refresh();

      if (this.props.step) {
        if (!this.introIsOpen) {
          // step specfied, but intro not currently open;
          // open it and jump immediately to specified step
          
          // Turns out Intro.js is full of bugs.
          // Sometimes it treats steps as zero-indexed,
          // other times it treats them as one-indexed.
          // This logic handles all the cases.
          if (!this.hasBeenOpened) {
            this.hasBeenOpened = true;
            this.intro.goToStep(this.props.step).start();
          } else {
            if (this.props.step === 1) {
              this.intro.start();
            } else {
              this.intro.goToStep(this.props.step-1).start();
            }
          }

        } else {
          // intro already open; just go to step
          this.intro.goToStep(this.props.step);//.nextStep();
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
