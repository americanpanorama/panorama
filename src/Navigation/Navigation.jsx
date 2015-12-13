import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import './style.scss';


export default class Navigation extends React.Component {
  
  static propTypes = {
    nav_data: PropTypes.object.isRequired,
    show_menu : PropTypes.boolean,
    on_hamburger_click: PropTypes.func
  }

  static defaultProps = {
    nav_data: {},
    show_menu : false,
    on_hamburger_click: null
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
        >
          
          <div id='nav_header'>
            <div id='navburger'><img src='http://dsl.richmond.edu/panorama/static/images/hamburger.png' onClick={ this.props.on_hamburger_click } /></div>
  
            <h1><a href='/panorama/'>American Panorama</a></h1>
            {
              this.props.nav_data.map((item, i) => {
                return (
                  <div className='pan_nav_item' style={{width: this.computeDimensions() + 'px'}}>
                    <img src={item.screenshot } style={{width: this.computeDimensions() + 'px'}} /><br/> 
                    <h4>
                      <a href='{ this.url }'>{ item.title }</a>
                    </h4>
                  </div>
                );
              })
            }
          </div>
        </Modal>
      </div>


    );
  }

}