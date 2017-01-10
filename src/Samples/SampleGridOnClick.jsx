/* This shoult not be reviewed as is a development file not included in the app*/
import React, { Component } from 'react';
import Grid from './../../components/Grid/Grid.jsx';
import GridHeader from './../../components/Grid/GridHeader.jsx';
import GridBody from './../../components/Grid/GridBody.jsx';
import GridRow from './../../components/Grid/GridRow.jsx';
import GridItem from './../../components/Grid/GridItem.jsx';
import GridImageItem from './../../components/Grid/GridImageItem.jsx';
import GridLinkItem from './../../components/Grid/GridLinkItem.jsx';

class SampleGridOnClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.paging = this.paging.bind(this);
    this.onBasicGridChange = this.onBasicGridChange.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
  }

  rowClickListener(rowData) {
  	console.log(rowData)
  }

  paging() {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false})
      alert("Loading finish");
    }, 50000);
  }

  onBasicGridChange(event) {
    try{
        this.setState({basicGrid: JSON.parse(event.target.value)})
    }catch(e){
        console.log('error parsing json');
        console.dir(e);
    }    
    
  }

  render() {
    const sortingGrid = {
      metadata: [
        { field: 'name', title: 'Name', ascending: true},
        { field: 'description', title: 'Description'}
      ],
      data: [
        { name: 'Daniel', description: 'Developer1'},
        { name: 'Tom', description: 'Developer2' }
      ]
    };  

    return (
      <div>

        <h2>Basic grid with sorting</h2>
        <Grid
          metadata={sortingGrid.metadata}
          data={sortingGrid.data}
          rowClickListener={this.rowClickListener}
        />
  
      </div>
    );
  }
};

export default SampleGridOnClick;
