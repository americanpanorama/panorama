import d3 from 'd3';
import Koto from 'koto';

export default class Axis extends Koto {
  constructor(selection, axisType){
    super(selection);

    this.configs['scale'] = {value: d3.scale.linear()};
    this.configs['ticks'] = {value: 5};
    this.configs['orient'] = {value: 'bottom'};
    this.configs['offset'] = {value: [0,0]};

    this.axis = d3.svg.axis();
    this.baseLayer = this.base.append('g').classed(axisType + ' axis', true);
  }

  update() {
    this.axis
      .scale(this.configs['scale'].value)
      .ticks(this.configs['ticks'].value)
      .orient(this.configs['orient'].value);

    var offset = this.configs['offset'].value;

    this.baseLayer
      .attr('transform', 'translate(' + offset[0] + ',' + offset[1] + ')')
      .call(this.axis);
  }
}
