import React from 'react';
import TabsHeader from './TabsHeader.jsx';

const Tabs = (
  props
) => {
  /* Custom Styling config - Start */
    // props contain data and metaData that were passed when component was launched
    console.log(props)

    // if classes exist, then className is an array of classes include grid. Else className is just grid
    const className = props.className ? ['grid', ...props.className] : ['grid'];

    //style will be an empty object or whatever is passed through props.style
    const style = Object.assign({}, props.style);
    console.log(style)
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
        <TabsHeader className={props.headerClassName} style={props.headerStyle} columns={columns} cells={cells} />
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

Tabs.propTypes = {
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

export default Tabs;
