import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';
import TexturalListItem from './TexturalListItem';

import './style.scss';

export default class TexturalList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    keyAccessor: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func,
    selected: PropTypes.string,
    height: PropTypes.any,
    isItemDirty: PropTypes.func,
    onStoryScroll: PropTypes.func,
    sensitivity: PropTypes.number
  }

  static defaultProps = {
    selected: null,
    height: 400,
    sensitivity: 30
  }

  constructor (props) {
    super(props);
    this.selectedKey = null;
    this.currentKey = null;
    this.handleScroll = this.handleScroll.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount () {
    this.listContainer = ReactDom.findDOMNode(this.refs.list);
    this.listContainer.addEventListener('scroll', this.handleScroll, false);;
  }

  componentWillUnmount () {
    this.listContainer.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate () {
    let {selected} = this.props;
    this.buildItemCache();

    if (!this.anchors.length) return;
    if (selected !== this.selectedKey) {
      this.selectedKey = selected;
      this.setScrollPosition();
    }
  }

  buildItemCache() {
    this.anchors = [];
    this.anchorMap = {};
    const listItems = this.listContainer.querySelectorAll('.textural-list--item');

    [].forEach.call(listItems, (item) => {
      const o = {
        t: item.offsetTop,
        key: item.getAttribute('data-id')
      };

      this.anchorMap[o.key] = item;
      this.anchors.push(o);
    });

  }

  setScrollPosition() {
    if (!this.selectedKey || !this.listContainer) return;
    var pos = (this.selectedKey in this.anchorMap) ?
                    this.anchorMap[this.selectedKey].offsetTop : null;
    if (pos) this.listContainer.scrollTop = pos;
  }

  handleScroll() {
    let {onStoryScroll, sensitivity} = this.props;
    const top = this.listContainer.scrollTop;
    const prev = this.currentKey;
    const scrollHeight = this.listContainer.scrollHeight;
    const clientHeight = this.listContainer.clientHeight;
    let dist;

    if (this.anchors) {
      if (top <= 0) {
        this.currentKey = this.anchors[0].key;
      } else if (scrollHeight - top === clientHeight) {
        this.currentKey = this.anchors[this.anchors.length - 1].key;
      } else {
        this.anchors.forEach((anchor) => {
          dist = top - anchor.t;
          if (dist < sensitivity && dist > -sensitivity && this.currentKey !== anchor.key){
            this.currentKey = anchor.key;
          }
        });
      };

      if ((prev !== this.currentKey)){
        if (typeof onStoryScroll === 'function') onStoryScroll(this.currentKey);
      }
    }
  }

  getClosestItemNode(elm) {
    for ( ; elm && elm !== document; elm = elm.parentNode ) {
      if ( elm.classList.contains( 'textural-list--item' )) {
        return elm;
      }
    }
    return false;
  }

  getDataItemForKey(key) {
    let {items, keyAccessor} = this.props;
    const matches = items.filter((d) => {
      return this.coerceKey(keyAccessor(d)) === key;
    });

    return (matches.length) ? matches : null;
  }

  onClickHandler(evt) {
    let {onItemClicked} = this.props;
    const target = evt.target || null;

    if (!target) return;

    const node = target.classList.contains( 'textural-list--item' ) ? target : this.getClosestItemNode(target);

    if (!node) return;

    const key = node.getAttribute('data-id');

    if (!key) return;

    const matches = this.getDataItemForKey(key);

    if (!matches.length) return;

    if (typeof onItemClicked === 'function') {
      onItemClicked(matches);
    }
  }

  renderItems () {
    let {renderItem, items, keyAccessor, isItemDirty} = this.props;
    const keyAccessorIsFn = (typeof keyAccessor === 'function') ? true : false;
    const hasIsItemDirty = (typeof isItemDirty === 'function') ? true : false;

    return items.map((item, idx) => {
      const dirty = hasIsItemDirty ? isItemDirty(item) : true;
      const key = (keyAccessorIsFn) ? keyAccessor(item) : idx;
      return <TexturalListItem key={key} renderItem={renderItem} index={idx} identifier={this.coerceKey(key)} dirty={dirty} />;
    });
  }

  coerceKey(key) {
    return '' + key;
  }

  isNumeric(val) {
    return !isNaN(val);
  }

  render () {
    let {height} = this.props;
    const innerStyle = this.isNumeric(height) ? {maxHeight: height} : null;
    return (
      <div className='panorama textural-list'>
        <div ref='list' className='textural-list--inner' style={innerStyle} onClick={this.onClickHandler}>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
