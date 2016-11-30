import React from 'react';

const TabsColumn = (
  props
) => {
  let className = props.className ? ['grid-column', ...props.className] : ['grid-column'];
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

TabsColumn.propTypes = {
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  column: React.PropTypes.object
};

export default TabsColumn;

