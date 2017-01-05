/* This shoult not be reviewed as is a development file not included in the app*/
import React from 'react';
import Tabs from './../../components/Tabs/Tabs.jsx';
import TabsCell from './../../components/Tabs/TabsCell.jsx';


const SampleTabs = () => {

  const basicTabs = {
    metadata: [
      { tabID: '1', label: 'Information'},
      { tabID: '2', label: 'Scheduling'},
      { tabID: '3', label: 'Integrations'},
      { tabID: '4', label: 'Activity'}
    ]
  };


  const classNames = [];
  // classNames will be property of component that can override a default style

  const style = []

  // renderTab(id) {

  //   if id = 1
  //     return jsx1
  //   if id = 2


  // }

  return (
    <div>
      <Tabs
        metadata={basicTabs.metadata}
        //
        // className kxzckm;cz
        // callback retrun id
      />
    </div>
  );
};

export default SampleTabs;
