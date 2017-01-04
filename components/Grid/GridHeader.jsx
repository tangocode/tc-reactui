import React from 'react';
import GridColumnHeader from './GridColumnHeader.jsx';

const GridHeader = (
  props
) => {
  /* Custom Styling config - Start */

  const className = props.className ? ['col-lg-12 client-list', ...props.className] : ['col-lg-12 client-list'];
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
    const columns = props.columns ? props.columns : [];
    const cells = props.cells ? props.cells : [];
    content = (
      <div className={className} style={style}>
        {columns.map(column => {
          let columnClassName = [];
          let columnStyle = Object.assign({}, { width: `${100 / props.columns.length}%` });
          if (column.headerDefinition) {
            const cellDefinition = cells.find(c => c.id === column.headerDefinition);
            if (cellDefinition) {
              if (cellDefinition.className) {
                columnClassName = [...columnClassName, ...cellDefinition.className];
              }
              if (cellDefinition.style) {
                columnStyle = Object.assign({}, columnStyle, cellDefinition.style);
              }
            }
          }

          return (
            <GridColumnHeader column={column} className={columnClassName} style={columnStyle} field={column.field} title={column.title} ascending={column.ascending} onSorting={props.onSorting}/>
          );
        })}
      </div>
    );
  }

  /* Custom Content config - End */

  // Render content
  return content;
};

GridHeader.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  columns: React.PropTypes.array,
  onSorting: React.PropTypes.func
};

export default GridHeader;
