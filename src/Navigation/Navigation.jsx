import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import './style.scss';


export default class Navigation extends React.Component {
  
  static propTypes = {
    nav_data: PropTypes.array.isRequired,
    show_menu : PropTypes.bool,
    on_hamburger_click: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
    home_url: PropTypes.string,
    links: PropTypes.array,
    link_separator: PropTypes.string
  }

  static defaultProps = {
    title: 'American Panorama',
    home_url: 'http://dsl.richmond.edu/panorama',
    links: [],
    link_separator: ' ',
    nav_data: {},
    show_menu : false,
    on_hamburger_click: null,
    style: {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      content: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 'auto',
        right: 'auto',
        border: 0,
        background: 'rgba(0,0,0,0.5)',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: 0
      }
    }
  }

  constructor (props) {

    super(props);

  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidUpdate () {}

  computeDimensions () {
    // width of the left and right margins are 10
    return (window.innerWidth - 40 * (this.props.nav_data.length)) / (this.props.nav_data.length);
  }

  render () {

    return (
      <div>

        <div id='hamburger'><img src='http://dsl.richmond.edu/panorama/static/images/hamburger.png' onClick={ this.props.on_hamburger_click } /></div>
  
        <Modal
          isOpen={ this.props.show_menu }
          onRequestClose={ this.props.on_hamburger_click }
          className='nav_header'
          style={ this.props.style }
        >
          
          <div id='nav_header'>
            <div id='navburger'><img src='http://dsl.richmond.edu/panorama/static/images/hamburger.png' onClick={ this.props.on_hamburger_click } /></div>
  
            { (this.props.title && this.props.home_url) ? <h1><a href={ this.props.home_url }>{ this.props.title }</a></h1> : '' }
            <h2>
              { 
                this.props.links.map((item, i) => {
                  return (
                    <a href={ item.url } key={ 'pan_nav_links_' + i }>{ (i < this.props.links.length - 1) ? item.name + this.props.link_separator : item.name }</a>
                  );
                })
              }
            </h2>    

            <div id='maps'>
              {
                this.props.nav_data.map((item, i) => {
                  return (
                    <div className='pan_nav_item'  key={ 'pan_nav_item_' + i } style={{width: this.computeDimensions() + 'px'}}>
                      <a href={ item.url }><img src={item.screenshot } style={{width: this.computeDimensions() + 'px'}} /></a><br/> 
                      <h4>
                        <a href={ item.url }>{ item.title }</a>
                      </h4>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </Modal>
      </div>


    );
  }


}
