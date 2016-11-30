import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import GridRow from './GridRow.jsx';

const GridRowTarget = {
  drop(props) {
    props.dropCallback();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DropableGridRow extends Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    const newProps = Object.assign({}, this.props, {
      style: Object.assign({}, this.props.style, {
        borderColor: isOver ? '#f3a536' : this.props.style.borderColor
      })
    });

    return connectDropTarget(
      <div>
        <GridRow {...newProps} />
      </div>
    );
  }
}

DropableGridRow.propTypes = {
  isOver: PropTypes.bool.isRequired
};

export default DropTarget('ROW', GridRowTarget, collect)(DropableGridRow);
