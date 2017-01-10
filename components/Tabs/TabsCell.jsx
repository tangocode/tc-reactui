import React from 'react';

class TabsCell extends React.Component {

  generateContent() {
    let className = this.props.className ? ['tabs-cell', ...this.props.className] : ['tabs-cell'];
    let style = Object.assign({}, this.props.style);

    if (this.props.width) { style.width = this.props.width; }

    let content = (
      <span className={className} style={style}>
        {this.props.children}
      </span>
    );
    if (!this.props.children) {
      content = (
        <div className={className.join(' ')}  style={style} onClick={ () => { this.props.tabClicked(this.props.cell.tabIndex); }}>
          <span>{this.props.cell.label}</span>
        </div>
      );
    }
    return content;
  }

  render() {
    return (
      <div className={'tabs-cell-outer'}>
        {this.generateContent()}
      </div>
    );
  }

};

TabsCell.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
};

export default TabsCell;

