/* This shoult not be reviewed as is a development file not included in the app*/
import React from 'react';
import Tabs from './../../components/Tabs/Tabs.jsx';
import TabsHeader from './../../components/Tabs/TabsHeader.jsx';
import TabsColumn from './../../components/Tabs/TabsColumn.jsx';

const SampleTabs = () => {
  const basicTabs = {
    metadata: [
      { field: 'information', title: 'Information'},
      { field: 'scheduling', title: 'Scheduling'},
      { field: 'integrations', title: 'Integrations'},
      { field: 'activity', title: 'Activity'}
    ],
  };


  return (
    <div>
      <Tabs
        metadata={basicTabs.metadata}
      />
    </div>
  );
};

export default SampleTabs;
