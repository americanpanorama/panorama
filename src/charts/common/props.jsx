import { PropTypes } from 'react';
import d3 from 'd3';

export const DefaultTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),
  xAccessor: PropTypes.func,
  yAccessor: PropTypes.func,
  selectionAccessor: PropTypes.func,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  xaxis: PropTypes.object,
  yaxis: PropTypes.object,
  interactive: PropTypes.bool,
  tooltip: PropTypes.bool
};

export const DefaultProps = {
  width: 960,
  height: 500,
  margin: {top: 20, right: 30, bottom: 20, left: 30},
  selectionAccessor: d => d.key,
  xAccessor: d => d.key,
  yAccessor: d => d.value,
  xScale: d3.scale.linear(),
  yScale: d3.scale.linear(),
  interactive: true,
  tooltip: false
};

/*----------  Axis props  ----------*/

export const axisMethods = ['orient', 'ticks', 'tickValues',
            'tickSize', 'innerTickSize', 'outerTickSize',
            'tickPadding', 'tickFormat'];

export const tooltipDefaultOptions = {
  closeDelay: 100,
  align: 'top center',
  offset: [0, -10]
};
