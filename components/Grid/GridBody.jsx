import React, { Component } from 'react';
import GridRow from './GridRow.jsx';

class GridBody extends Component {

  constructor(props) {
    super(props)
    this.rowClickListener = this.rowClickListener.bind(this);
  }

  rowClickListener(rowData) {
    this.props.rowClickListener(rowData)
  }

  render() {

    /* Custom Styling config - Start */

    const className = this.props.className ? [...this.props.className] : [];
    const style = Object.assign({}, this.props.style);

    /* Custom Styling config - End */

    /* Custom Content config - Start */

    // Set children as content
    let content = (
      <div className={className} style={style}>
        {this.props.children}
      </div>
    );

    // If not children then use default content
    if (!this.props.children) {
      if (!this.props.columns) {
        throw 'Property \'columns\' is required if no children are defined for the \'Grid\' component';
      }
      if (!this.props.data) {
        throw 'Property \'data\' is required if no children are defined for the \'Grid\' component';
      }
      const columns = this.props.columns ? this.props.columns : [];
      const rows = this.props.rows ? this.props.rows : [];
      const cells = this.props.cells ? this.props.cells : [];
      const data = this.props.data ? this.props.data : [];

      content = (
        <div className={className} style={style}>
          {data.map(item => {
            let rowClassName = this.props.rowClassName ? this.props.rowClassName : [];
            let rowStyle = Object.assign({}, this.props.rowStyle);
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
              <GridRow 
                className={rowClassName} 
                style={rowStyle} 
                item={item} 
                columns={columns} 
                cells={cells} 
                rowClickListener = {this.rowClickListener}
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
  }
};

GridBody.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  rowClassName: React.PropTypes.array,
  rowStyle: React.PropTypes.object,
  columns: React.PropTypes.array,
  rows: React.PropTypes.array,
  cells: React.PropTypes.array,
  data: React.PropTypes.array,
  rowClickListener: React.PropTypes.func
};

export default GridBody;
