import React from 'react';
import GridItem from './GridItem.jsx';

const GridRow = (
  props
) => {
  const className = props.className ? ['grid-row', ...props.className] : ['grid-row'];
  const style = Object.assign({}, {}, props.style);

  let content = (
    <div className={className} style={style}>
      {props.children}
    </div>
  );
  if (!props.children) {
    if (!props.columns) {
      throw 'Property \'columns\' is required if no children are defined for the \'Grid\' component';
    }
    const columns = props.columns ? props.columns : [];
    const cells = props.cells ? props.cells : [];
    content = (
      <div className={className} style={style}>
        {columns.map(column => {
          // By default asign the field as value
          let value = props.item[column.field];

          // Merge with column row definition
          let itemClassName = [];
          let itemStyle = Object.assign({}, { width: `${100 / props.columns.length}%` });
          if (column.rowDefinition) {
            const cellDefinition = cells.find(c => c.id === column.rowDefinition);
            if (cellDefinition) {
              if (cellDefinition.className) {
                itemClassName = [...itemClassName, ...cellDefinition.className];
              }
              if (cellDefinition.style) {
                itemStyle = Object.assign({}, itemStyle, cellDefinition.style);
              }
            }
          }

          // Merge with item cell definition
          if (typeof props.item[column.field] === 'object') {
            // Read the value property as this field is an object
            value = props.item[column.field].value;

            if (props.item[column.field].cellDefinition) {
              const cellDefinition = cells.find(c => c.id === props.item[column.field].cellDefinition);
              if (cellDefinition) {
                if (cellDefinition.className) {
                  itemClassName = [...itemClassName, ...cellDefinition.className];
                }
                if (cellDefinition.style) {
                  itemStyle = Object.assign({}, itemStyle, cellDefinition.style);
                }
              }
            }
          }

          return (
            <GridItem item={props.item[column.field]} value={value} className={itemClassName} style={itemStyle} />
          );
        })}
      </div>
    );
  }

  return content;
};

GridRow.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  columns: React.PropTypes.array
};

export default GridRow;
