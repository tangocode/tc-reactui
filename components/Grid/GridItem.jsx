import React from 'react';

const GridItem = (
  props
) => {
  let className = props.className ? ['grid-item', ...props.className] : ['grid-item'];
  let style = Object.assign({}, {}, props.style);

  let content = (
    <span className={className} style={style}>
      {props.children}
    </span>
  );
  if (!props.children) {
    content = (
      <span className={className} style={style}>{props.value}</span>
    );
  }

  return content;
};

GridItem.propTypes = {
  item: React.PropTypes.object,
  className: React.PropTypes.array,
  style: React.PropTypes.object
};

export default GridItem;
