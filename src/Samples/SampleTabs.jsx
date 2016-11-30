/* This shoult not be reviewed as is a development file not included in the app*/
import React from 'react';
import Tabs from './../../components/Tabs/Tabs.jsx';
import TabsCell from './../../components/Tabs/TabsCell.jsx';


const SampleTabs = () => {

  const basicTabs = {
    metadata: [
      { tabID: '1', highlighted: true, title: 'Information'},
      { tabID: '2', highlighted: false, title: 'Scheduling'},
      { tabID: '3', highlighted: false, title: 'Integrations'},
      { tabID: '5', highlighted: false, title: 'Activity'}
    ]
  };


  const classNames = ['fuck-off'];

  // renderTab(id) {

  //   if id = 1
  //     return jsx1
  //   if id = 2


  // }

  return (
    <div>
      <Tabs
        metadata={basicTabs.metadata}
        // className
        // callback retrun id
      />
    </div>
  );
};

export default SampleTabs;
