import d3 from 'd3';
import Koto from 'koto';

export default class Axis extends Koto {

  constructor (selection, axisType, props) {

    super(selection);

    this.configs['scale'] = { value: props.scale };
    this.configs['ticks'] = { value: props.ticks };
    this.configs['orient'] = { value: props.orient };
    this.configs['offset'] = { value: props.offset };

    this.axis = d3.svg.axis();
    this.baseLayer = this.base.append('g').classed(axisType + ' axis', true);

  }

  update (scale, offset) {

    if (scale) {
      this.config('scale', scale);
    }
    if (offset) {
      this.config('offset', offset);
    } else {
      offset = this.config('offset');
    }

    this.axis
      .scale(this.config('scale'))
      .ticks(this.config('ticks'))
      .orient(this.config('orient'));

    this.baseLayer
      .attr('transform', 'translate(' + offset[0] + ',' + offset[1] + ')')
      .call(this.axis);

  }
  
}
