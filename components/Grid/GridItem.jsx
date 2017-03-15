import React, { Component } from 'react';

class GridItem extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e, item) {
    if (this.props.clickItemHandler) {
      e.stopPropagation();
      this.props.forceNoUpdate();
      this.props.clickItemHandler.clickHandler(item);
    }
  }
  render() {
    /* Custom Styling config - Start */
    let className = this.props.className ? [...this.props.className] : [];
    let style = Object.assign({}, {}, this.props.style);
    let imgStyle = this.props.imgStyle ? { ...this.props.imgStyle } : { height: '30px', margin: '5px -4px !important' }
    /* Custom Styling config - End */

    /* Custom Content config - Start */

    let content = (
      <div
          className={className}
          style={style}
          onClick={e => this.clickHandler(e, this.props.item)}>
      {this.props.children}
      </div>
    );
    if (!this.props.children) {
      content = (
        <div
          className={className}
          style={style}
          onClick={e => this.clickHandler(e, this.props.item)}>
        {(this.props.type === 'image') ? (
          <img src={this.props.value} style={imgStyle}/>
        ) : (
          <p>{this.props.value}</p>
        )}
        </div>
      );
    }

    /* Custom Content config - End */

    return content;
  }
}

GridItem.propTypes = {
  item: React.PropTypes.object,
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  imgStyle: React.PropTypes.object,
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string
};

export default GridItem;
