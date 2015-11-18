import { EventEmitter } from 'events';

export const PanoramaEventTypes = {

  Legend: {
    selected: 'Legend:selected'
  },

  ItemSelector: {
    selected: 'ItemSelector:selected'
  },

  ChartSlider: {
    selected: 'ChartSlider:selected'
  }

};

export const PanoramaDispatcher = {

  Legend: {
    selected: (value, index) => {
      PanoramaDispatcher.emit(PanoramaEventTypes.Legend.selected, value, index);
    }
  },

  ItemSelector: {
    selected: (value, index) => {
      PanoramaDispatcher.emit(PanoramaEventTypes.ItemSelector.selected, value, index);
    }
  },

  ChartSlider: {
    selected: (value) => {
      PanoramaDispatcher.emit(PanoramaEventTypes.ChartSlider.selected, value);
    }
  },

};

// Mixin EventEmitter functionality
Object.assign(PanoramaDispatcher, EventEmitter.prototype);
