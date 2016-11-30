import React from 'react';
import TabsColumn from './TabsColumn.jsx';

const TabsHeader = (
  props
) => {

  const className = props.className ? ['grid-header', ...props.className] : ['grid-header'];
  const style = Object.assign({}, props.style);

  let content = (
    <div className={className} style={style}>
      {props.children}
    </div>
  );

  if (!props.children) {
    if (!props.columns) {
      throw 'Property \'columns\' is required if no children are defined for the \'Tabs\' component';
    }
    const columns = props.columns ? props.columns : [];
    const cells = props.cells ? props.cells : [];
    content = (
      <div className={className} style={style}>
        {columns.map(column => {
          let columnClassName = [];
          let columnStyle = Object.assign({}, { width: `${100 / props.columns.length}%` });
          // if (column.headerDefinition) {
            // const cellDefinition = cells.find(c => c.id === column.headerDefinition);
            // if (cellDefinition) {
            //   if (cellDefinition.className) {
            //     columnClassName = [...columnClassName, ...cellDefinition.className];
            //   }
            //   if (cellDefinition.style) {
            //     columnStyle = Object.assign({}, columnStyle, cellDefinition.style);
            //   }
            // }
          // }

          return (
            <TabsColumn column={column} className={columnClassName} style={columnStyle} title={column.title}/>
          );
        })}
      </div>
    );
  }

  /* Custom Content config - End */

  // Render content
  return content;
};

TabsHeader.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  columns: React.PropTypes.array
};

export default TabsHeader;
