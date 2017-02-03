import React, { Component } from 'react';
import GridItem from './GridItem.jsx';

class GridRow extends Component {

  render() {

    const className = this.props.className ? ['col-lg-12 list', ...this.props.className] : ['col-lg-12 list'];
    const style = Object.assign({}, {}, this.props.style);

    let content = (
      <div className={className} style={style}>
        {this.props.children}
      </div>
    );

    if (!this.props.children) {
      if (!this.props.columns) {
        throw 'Property \'columns\' is required if no children are defined for the \'Grid\' component';
      }
      const columns = this.props.columns ? this.props.columns : [];
      const cells = this.props.cells ? this.props.cells : [];

      content = (
        
        <div className={className} style={style} onClick={ () => { this.props.rowClickListener(this.props.item) }}>
          {columns.map(column => {
            // By default asign the field as value
            let value = this.props.item[column.field].value ? this.props.item[column.field].value : this.props.item[column.field];
            let type = this.props.item[column.field].type ? this.props.item[column.field].type : 'text'
            let imgStyle = this.props.item[column.field].imgStyle ? { ...this.props.item[column.field].imgStyle } : null

            // Merge with column row definition
            let itemClassName = [];
            let itemStyle = Object.assign({}, { width: `${100 / this.props.columns.length}%` });
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
            if (typeof this.props.item[column.field] === 'object') {
              // Read the value property as this field is an object
              value = this.props.item[column.field].value;

              if (this.props.item[column.field].cellDefinition) {
                const cellDefinition = cells.find(c => c.id === this.props.item[column.field].cellDefinition);
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
              <GridItem item={this.props.item} value={value} className={itemClassName} style={itemStyle} type={type} imgStyle={imgStyle} />
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
}

GridRow.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  imgStyle: React.PropTypes.object,
  columns: React.PropTypes.array,
  rowClickListener: React.PropTypes.func
};

export default GridRow;
