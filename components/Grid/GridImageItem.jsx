import React, { Component } from 'react';
import GridItem from './GridItem.jsx';

class GridImageItem extends GridItem {
  render() {

    /* Custom Styling config - Start */

    let className = this.props.className ? [...this.props.className] : [];
    let style = Object.assign({}, {}, this.props.style);

    /* Custom Styling config - End */

    /* Custom Content config - Start */

    let content = (
      <div className={className} style={style} >
        <img src={this.props.image} onClick={this.props.onClick}/>
      </div>
    );

    /* Custom Content config - End */

    return content;
  }
}

GridImageItem.propTypes = {
  item: React.PropTypes.object,
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  image: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default GridImageItem;
