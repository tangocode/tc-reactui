/* This shoult not be reviewed as is a development file not included in the app*/
import React, { Component } from 'react';
import Tabs from './../../components/Tabs/Tabs.jsx';
import TabsCell from './../../components/Tabs/TabsCell.jsx';


class SampleTabs extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      basicTabs: {
        metadata: [
          { tabID: 'information', label: 'Information', tabIndex: 0},
          { tabID: 'scheduling', label: 'Scheduling', tabIndex: 1},
          { tabID: 'integrations', label: 'Integrations', tabIndex: 2},
          { tabID: 'activity', label: 'Activity', tabIndex: 3}
        ]
      }
    };
    this.tabSelect = this.tabSelect.bind(this);
  }

  tabSelect(activeTabIndex) {
    this.setState({ activeTab: activeTabIndex});
  }

  render() {
    return (
      <div>
        <Tabs
          metadata={this.state.basicTabs.metadata}
          tabClicked={this.tabSelect}
        />
      </div>
    );
  }
};

export default SampleTabs;
