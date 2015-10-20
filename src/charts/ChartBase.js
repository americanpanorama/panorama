import d3 from 'd3';
import Koto from 'koto';
import Axis from './Axis';

export default class ChartBase extends Koto {
  constructor(selection){
    super(selection);

    this.configs['width'] = {value: 600};
    this.configs['height'] = {value: 400};
    this.configs['margin'] = {value: {top: 20, right: 30, bottom: 20, left: 30}};

    this.xAxis = new Axis(this.base, 'x');
    this.yAxis = new Axis(this.base, 'y');

    this.xScale = d3.scale.ordinal();
    this.yScale = d3.scale.linear();
  }

  updateScales(data) {

  }

  updateDimensions() {

  }

  destroy() {
    this.base.remove();
    this.base = null;
  }
}
