import React from 'react';
import GridRow from './GridRow.jsx';

const GridBody = (
  props
) => {
  /* Custom Styling config - Start */

  const className = props.className ? ['grid-body', ...props.className] : ['grid-body'];
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
    if (!props.columns) {
      throw 'Property \'columns\' is required if no children are defined for the \'Grid\' component';
    }
    if (!props.data) {
      throw 'Property \'data\' is required if no children are defined for the \'Grid\' component';
    }
    const columns = props.columns ? props.columns : [];
    const rows = props.rows ? props.rows : [];
    const cells = props.cells ? props.cells : [];
    const data = props.data ? props.data : [];
    console.dir(data);
    content = (
      <div className={className} style={style}>
        {data.map(item => {
          let rowClassName = props.rowClassName ? props.rowClassName : [];
          let rowStyle = Object.assign({}, props.rowStyle);
          if (item.rowDefinition) {
            const rowDefinition = rows.find(r => r.id === item.rowDefinition);
            if (rowDefinition) {
              if (rowDefinition.className) {
                rowClassName = [...rowClassName, ...rowDefinition.className];
              }
              if (rowDefinition.style) {
                rowStyle = Object.assign({}, rowStyle, rowDefinition.style);
              }
            }
          }

          return (
            <GridRow className={rowClassName} style={rowStyle} item={item} columns={columns} cells={cells} />
          );
        })}
      </div>
    );
  }

  /* Custom Content config - End */

  // Render content
  return content;
};

GridBody.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  rowClassName: React.PropTypes.array,
  rowStyle: React.PropTypes.object,
  columns: React.PropTypes.array,
  rows: React.PropTypes.array,
  cells: React.PropTypes.array,
  data: React.PropTypes.array
};

export default GridBody;
