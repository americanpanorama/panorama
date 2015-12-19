import * as React from 'react';
import d3 from 'd3';
import { Punchcard } from '../../src/main';

export default class PunchcardExample extends React.Component {

  constructor () {
    super();
    this.state = {data: [],
      loading:true,
      selected: null};

    this.punchcardOptions = {
      radiusMaxValue: 1,
      colorAccessor: d => d.aggregateNormalizedValue,
      valueAccessor: d => d.normalizedValue,
      colorScale: d3.scale.ordinal().range(['rgb(188, 35, 64)', 'rgb(228, 104, 75)', 'rgb(187, 27, 105)', 'rgb(103, 116, 99)', 'rgb(26, 169, 143)', 'rgb(10, 103, 150)', 'rgb(67, 40, 93)', 'rgb(86, 96, 99)']),
      textValueFormatter: d3.format(',0'),
      selectAccessor: d => d.name
    };

    this.header = {
      title: '',
      subtitle: '',
      caption: '',
    };

    this.onItemClick = this.onItemClick.bind(this);
  }

  dataLoader() {
    d3.json('data/punchcard.json', (err, rsp) => {
      if (err) {
        this.setState({loading: false});
        return console.error('Punchcard data loading error!');
      }

      let max = 0;
      rsp.categories.forEach((d) => {
        max = Math.max(max, d3.max(d.commodities, v => v.normalizedValue));
      });

      this.punchcardOptions.radiusMaxValue = max;
      this.punchcardOptions.colorScale.domain([1, d3.max(rsp.categories, this.punchcardOptions.colorAccessor)]);
      this.header = {
        title: rsp.header.title || '',
        subtitle: rsp.header.subtitle || '',
        caption: rsp.header.caption || '',
      };

      this.setState({data: rsp.categories, loading: false});
    });
  }

  componentWillMount() {
    this.dataLoader();
  }

  onItemClick(d) {
    if (d.name !== this.state.selected) {
      this.setState({selected: d.name});
    }
  }

  render () {
    return (
      <div>
        <div className='punchcard-header'>
          <h2 className='col'>{ this.header.title ? this.header.title.toUpperCase() : '' }</h2>
          <h3 className='col'><span className='subtitle'>{ this.header.subtitle }</span><span className='caption'>{ this.header.caption }</span></h3>
        </div>
        <Punchcard data={this.state.data} onItemClick={this.onItemClick} loading={this.state.loading} selected={this.state.selected} {...this.punchcardOptions} />
      </div>
    );

  }

}
