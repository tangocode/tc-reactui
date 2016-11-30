import React from 'react';

const TabsCell = (
  props
) => {
  let className = props.className ? ['tabs-cell', ...props.className] : ['tabs-cell'];
  let style = Object.assign({}, props.style);
  if (props.width) { style.width = props.width; }

  let content = (
    <span className={className} style={style}>
      {props.children}
    </span>
  );
  if (!props.children) {
    content = (
      <span className={className} style={style}>{props.title}</span>
    );
  }

  return content;
};

TabsCell.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  // column: React.PropTypes.object
};

export default TabsCell;

