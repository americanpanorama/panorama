import * as React from 'react';
import d3 from 'd3';
import { TexturalList } from '../../src/main';

export default class TexturalListExample extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      data: []
    };

    // Some of the smaller options we will
    // send to the List component
    // `keyAccessor` is required
    this.listOptions = {
      keyAccessor: d => d.properties.cartodb_id,
      selected: '1604'
    };

    // formatters just for this example
    this.itemDateFormatter = d3.time.format('%B %e, %Y');
    this.selectedDateFormatter = d3.time.format('%x');

    // Creating a selected entry
    // In a real scenario, you could pass
    // this in as a prop
    // or modify this example
    // with another list
    // and use setState to change the selected diarist
    this.selectedDiarist = {
      name: 'Medorem Crawford'
    };

    // callbacks for our List item
    this.renderItem = this.renderItem.bind(this);
    this.onStoryScroll = this.onStoryScroll.bind(this);
    this.onItemClicked = this.onItemClicked.bind(this);
  }

  componentWillMount() {
    this.dataLoader();
  }

  // load data for list
  // data must be an Array of Objects
  dataLoader() {
    d3.json('data/diary-entries.json', (err, rsp) => {
      if (err) return console.error('TexturalList data loading error!');

      const data = rsp.features.filter((d) => {return d.properties.name === this.selectedDiarist.name;});

      // let's prep our data
      data.forEach((d) => {
        d.properties.date = new Date(d.properties.date);
      });

      data.sort((a,b) => d3.descending(a.date, b.date));

      this.selectedDiarist.entryLength = data.length;
      this.selectedDiarist.begins = data[0].properties.date;

      this.setState({data: data});

    });
  }

  // Required by list
  // Must return back valid React DOM
  renderItem(index) {
    let {data} = this.state;
    const props = data[index].properties;
    return (
      <div>
        <h3>{this.itemDateFormatter(props.date)} <span>{props.cartodb_id}</span></h3>
        <p>{props.entry}</p>
      </div>
    );
  }

  // Callback for when a list item becomes
  // the top most item in the list viewport.
  onStoryScroll(k) {
    console.log('Scroll change: ', k);
  }

  // Callback for a click on a list item
  onItemClicked(item) {
    console.log('Scroll item clicked: ', item);
  }


  render () {
    // Example only
    const beginDate = this.selectedDiarist.begins ? this.selectedDateFormatter(this.selectedDiarist.begins) : '';

    return (
      <div className='textural-list-example'>
        <div className='textural-list-selecteditem'>
          <h3>{this.selectedDiarist.name}</h3>
          <p className='meta'>
            <span className='meta--item'>Diary begins {beginDate}</span>
            <span className='meta--item'>({this.selectedDiarist.entryLength}) entries</span>
          </p>
        </div>
        <div className='list'>
          <TexturalList items={this.state.data} renderItem={this.renderItem} onItemClicked={this.onItemClicked} onStoryScroll={this.onStoryScroll} {...this.listOptions} />
        </div>
      </div>
    );

  }

}
