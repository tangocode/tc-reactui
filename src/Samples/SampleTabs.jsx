/* This shoult not be reviewed as is a development file not included in the app*/
import React from 'react';
import Tabs from './../../components/Tabs/Tabs.jsx';
import TabsCell from './../../components/Tabs/TabsCell.jsx';


const SampleTabs = () => {

  const basicTabs = {
    metadata: [
      { tabID: 'information', label: 'Information', tabIndex: 1},
      { tabID: 'scheduling', label: 'Scheduling', tabIndex: 2},
      { tabID: 'integrations', label: 'Integrations', tabIndex: 3},
      { tabID: 'activity', label: 'Activity', tabIndex: 4}
    ]
  };


  const classNames = []; // classNames will be property of component that can override a default style
  const style = []

  return (
    <div>
      <Tabs
        metadata={basicTabs.metadata}
      />
    </div>
  );
};

export default SampleTabs;
