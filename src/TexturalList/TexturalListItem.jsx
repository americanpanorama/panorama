import React, { PropTypes, Component } from 'react';

export default class TexturalListItem extends Component {

  static propTypes = {
    renderItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    dirty: PropTypes.bool,
    identifier: PropTypes.string
  }

  static defaultProps = {
    dirty: true
  }

  constructor (props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.dirty;
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidUpdate () {}

  render () {
    let {renderItem, index, identifier} = this.props;
    return (
      <div className='textural-list--item' data-id={identifier}>
        {renderItem(index)}
      </div>
    );

  }
}
