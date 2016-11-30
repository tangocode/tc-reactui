import React from 'react';
import GridHeader from './GridHeader.jsx';
import GridBody from './GridBody.jsx';

const Grid = (
  props
) => {
  /* Custom Styling config - Start */

  const className = props.className ? ['grid', ...props.className] : ['grid'];
  const style = Object.assign({}, props.style);

  /* Custom Styling config - End */

  /* Custom Content config - Start */

  // Set children as content
  let content = (
    <div className={className} style={style}>
      {props.children}
    </div>
  );

  // If not children then use default content
  if (!props.children) {
    let columns = [];
    let rows = [];
    let cells = [];
    if (props.metadata) {
      if (props.metadata.constructor === Array) {
        columns = props.metadata;
      } else {
        if (props.metadata.columns) {
          columns = props.metadata.columns;
        }
        if (props.metadata.rows) {
          rows = props.metadata.rows;
        }
        if (props.metadata.cells) {
          cells = props.metadata.cells;
        }
      }
    }
    const data = props.data ? props.data : [];
    content = (
      <div className={className} style={style}>
        <GridHeader className={props.headerClassName} style={props.headerStyle} columns={columns} cells={cells} />
        <GridBody className={props.bodyClassName} style={props.bodyStyle} rowClassName={props.rowClassName} rowStyle={props.rowStyle} columns={columns} rows={rows} cells={cells} data={data} />
      </div>
    );
  }

  /* Custom Content config - End */

  // Render content
  return (
    <div>
      {content}
    </div>
  );
};

Grid.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  columns: React.PropTypes.array,
  headerClassName: React.PropTypes.array,
  headerStyle: React.PropTypes.object,
  data: React.PropTypes.array,
  bodyClassName: React.PropTypes.array,
  bodyStyle: React.PropTypes.object,
  rowClassName: React.PropTypes.array,
  rowStyle: React.PropTypes.object
};

export default Grid;
