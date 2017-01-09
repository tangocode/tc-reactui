import React from 'react';
import TabsCell from './TabsCell.jsx';

class Tabs extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          currentTabIndex: 0,
          lastTabIndex: 0,
      };
  }

  generateContent() {
    const style = Object.assign({}, this.props.style);
    const className = this.props.className ? ['tabs', ...props.className] : ['tabs'];
    let content = (
      <div className={className} style={style}>
        {this.props.children}
      </div>
    );

    // If not children then use default content
    if (!this.props.children) {
      let cells = [];
      if (this.props.metadata) {
        if (this.props.metadata.constructor === Array) {
          cells = this.props.metadata;
        } else {
          if (this.props.metadata.cells) {
            cells = this.props.metadata.cells;
          }
        }
      }

      content = (
        <div className={className} style={style}>

          {cells.map(cell => {
            if(cell.tabIndex == this.state.currentTabIndex) {var cellClassName = ['highlightedTab']}
            else {var cellClassName = ['']}
            return (
              <TabsCell
                cell={cell}
                className={cellClassName}
                tabClicked={ this.tabClicked.bind(this) }
              />
            );
          })}
        </div>
      );
    }
    return content
  }

  tabClicked(currentTabIndex) {
    
    this.props.tabClicked(currentTabIndex);

    let lastIndex = this.state.currentTabIndex;
    let currentIndex = currentTabIndex;

    this.setState({
      currentTabIndex: currentIndex,
      lastTabIndex: lastIndex
    });
  }

  render() {
    return (
      <div>
        {this.generateContent()}
      </div>
    );
  }

};

export default Tabs;
