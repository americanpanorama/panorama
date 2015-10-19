'use strict';

jest.dontMock('../Legend');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Legend from '../Legend';

describe('Legend', () => {
  let legend;

  function renderLegend(props) {
    return TestUtils.renderIntoDocument(<Legend data={ props } />);
  }

  describe('renders data', () => {
    beforeEach(() => {
      const props = {
        items: [
          'narratives',
          'cotton',
          'sugar'
        ],
        initialSelection: 'narratives'
      };

      legend = renderLegend(props);
    });

    it('silly test', () => {
      expect(legend.props.data.initialSelection);
    });

    it('sillier test', () => {
      expect(legend.props.data.items.length).toBeGreaterThan(1);
    });
  });
});