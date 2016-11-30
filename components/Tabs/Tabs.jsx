import React from 'react';
import TabsCell from './TabsCell.jsx';

const Tabs = (props) => {

    const className = props.className ? ['tabs', ...props.className] : ['tabs'];
    const style = Object.assign({}, props.style);
    console.log(style)

  let content = (
    <div className={className} style={style}>
      {props.children}
    </div>
  );

  // If not children then use default content
  if (!props.children) {
    let cells = [];
    if (props.metadata) {
      if (props.metadata.constructor === Array) {
        cells = props.metadata;
      } else {
        if (props.metadata.cells) {
          cells = props.metadata.cells;
        }
      }
    }

    content = (
      <div className={className} style={style}>
        {cells.map(cell => {
          return (
            <TabsCell
              cell={cell}
              title={cell.title}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

Tabs.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  cells: React.PropTypes.array,
};

export default Tabs;
