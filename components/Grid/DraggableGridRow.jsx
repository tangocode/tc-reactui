import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import GridRow from './GridRow.jsx';

const GridRowSource = {
  beginDrag: (props) => {
    props.draggedCallback();
    return {};
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class DraggableGridRow extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <GridRow {...this.props} />
      </div>
    );
  }
}

DraggableGridRow.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource('ROW', GridRowSource, collect)(DraggableGridRow);
