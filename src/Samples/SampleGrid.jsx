/* This shoult not be reviewed as is a development file not included in the app*/
import React, { Component } from 'react';
import Grid from './../../components/Grid/Grid.jsx';
import GridHeader from './../../components/Grid/GridHeader.jsx';
import GridBody from './../../components/Grid/GridBody.jsx';
import GridRow from './../../components/Grid/GridRow.jsx';
import GridItem from './../../components/Grid/GridItem.jsx';
import GridImageItem from './../../components/Grid/GridImageItem.jsx';
import GridLinkItem from './../../components/Grid/GridLinkItem.jsx';

class SampleGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      basicGrid: {
        metadata: [
          { field: 'name', title: 'Name', ascending: true},
          { field: 'description', title: 'Description', ascending: false}
        ],
        data: [
          { name: 'Daniel', description: 'developer'},
          { name: 'Tom', description: 'Developer' },
          { name: 'Daniel', description: 'ceveloper'},
          { name: 'Tom', description: 'Ceveloper' },
          { name: 'Daniel', description: 'Zeveloper'},
          // Image example
          { name: {
            value: '',
            type: 'image',
            imgStyle: { marginTop: '0px', height: '35px', marginLeft: '20px' }
          }, description: 'zeveloper'},
          { name: {value: 'Tom'}, description: 'teveloper' },
          { name: 'daniel', description: 'Teveloper'},
          { name: 'tom', description: 'Developer' },
          { name: '  NATHANIEL', description: 'Developer'},
          { name: 'Tom ', description: 'Developer' },
          { name: ' r aniel ', description: 'Developer'},
          { name: ' ', description: 'Developer' },
          { name: 'Daniel', description: 'Developer'},
          { name: 'Tom', description: 'Developer' },
          { name: 'Daniel', description: 'Developer'},
          { name: 'Tom', description: 'Developer' },
          { name: 'Daniel', description: 'Developer'},
          { name: 'Tom', description: 'Developer' }
        ]
      }
    };
    this.paging = this.paging.bind(this);
    this.onBasicGridChange = this.onBasicGridChange.bind(this);
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
        { name: 'Daniel', description: 'Developer'},
        { name: 'Tom', description: 'Developer' }
      ]
    };

    const customRowStyle = {
      metadata: {
        columns: [
          { field: 'name', title: 'Name' },
          { field: 'description', title: 'Description' }
        ],
        rows: [
          { id: 'even', style: { backgroundColor: 'whitesmoke' } },
          { id: 'odd', style: { backgroundColor: 'lightgray', color: 'white' } }
        ]
      },
      data: [
        {
          name: 'Daniel',
          description: 'Developer',
          rowDefinition: 'even'
        },
        {
          name: 'Tom',
          description: 'Developer',
          rowDefinition: 'odd'
        }
      ]
    };

    const customCellStyle = {
      metadata: {
        columns: [
          {
            field: 'name',
            title: 'Name',
            headerCellDefinition: 'nameHeader',
            columnCellDefinition: 'nameColumn'
          }, {
            field: 'description',
            title: 'Description',
            headerCellDefinition: 'descriptionHeader',
            columnCellDefinition: 'descriptionColumn'
          }
        ],
        rows: [
          { id: 'even', style: { backgroundColor: 'whitesmoke' } },
          { id: 'odd', style: { backgroundColor: 'lightgray', color: 'white' } }
        ],
        cells: [
          { id: 'nameHeader', style: { width: '30%', color: 'red' }},
          { id: 'nameColumn', style: { width: '30%' }},
          { id: 'nameError', style: { color: 'red' }},
          { id: 'descriptionHeader', style: { width: '70%' }},
          { id: 'descriptionColumn', style: { width: '70%' }}
        ]
      },
      data: [
        {
          name: {value: 'Daniel', cellDefinition: 'nameError'},
          description: 'Developer',
          rowDefinition: 'even'
        }, {
          name: 'Tom',
          description: 'Developer',
          rowDefinition: 'odd'
        }
      ]
    };

    const customGridHeader = {
      metadata: {
        columns: [
          { field: 'name', title: 'Name' },
          { field: 'description', title: 'Description' }
        ],
        rows: [
          { id: 'even', style: { backgroundColor: 'whitesmoke' } },
          { id: 'odd', style: { backgroundColor: 'lightgray', color: 'white' } }
        ],
        cells: [
          { id: 'nameError', style: { color: 'red' } }
        ]
      },
      data: [
        {
          name: {value: 'Daniel', cellDefinition: 'nameError'},
          description: 'Developer',
          rowDefinition: 'even'
        }, {
          name: 'Tom',
          description: 'Developer',
          rowDefinition: 'odd'
        }
      ]
    };

    const customGridRows = {
      metadata: {
        columns: [
          {
            field: 'name',
            title: 'Name',
            headerCellDefinition: 'nameHeader',
            columnCellDefinition: 'nameColumn'
          }, {
            field: 'description',
            title: 'Description',
            headerCellDefinition: 'descriptionHeader',
            columnCellDefinition: 'descriptionColumn'
          }
        ],
        cells: [
          { id: 'nameHeader', style: { width: '30%', color: 'red' }},
          { id: 'nameColumn', style: { width: '30%' }},
          { id: 'nameError', style: { color: 'red' }},
          { id: 'descriptionHeader', style: { width: '70%' }},
          { id: 'descriptionColumn', style: { width: '70%' }}
        ]
      },
      data: [
        {
          name: {value: 'Daniel', cellDefinition: 'nameError'},
          description: 'Developer'
        }, {
          name: 'Tom',
          description: 'Developer'
        }
      ]
    };

    return (
      <div>
        <h2>Basic grid</h2>
        {/* <textarea style={{height: 100, width: '95%', padding: 10, margin:10}} value={JSON.stringify(this.state.basicGrid)} onChange={this.onBasicGridChange} /> */}
        <Grid
          metadata={this.state.basicGrid.metadata}
          data={this.state.basicGrid.data}
          onPaging={this.paging}
          showLoading={this.state.loading}
          height={300}
        />

        <h2>Basic grid with sorting</h2>
        <Grid
          metadata={this.state.basicGrid.metadata}
          data={this.state.basicGrid.data}
          // metadata={sortingGrid.metadata}
          // data={sortingGrid.data}
        />

        <h2>Custom row style</h2>
        <Grid
          metadata={customRowStyle.metadata}
          data={customRowStyle.data}
        />

        <h2>Custom cell style</h2>
        <Grid
          metadata={customCellStyle.metadata}
          data={customCellStyle.data}
        />

        <h2>Custom Grid</h2>
        <Grid>
          <GridHeader>
           <GridItem style={{width: '30%'}} >
             <input type='button' value='name'/>
          </GridItem>
           <GridItem style={{width: '70%'}} title='Description' />
          </GridHeader>
          <GridBody style={{width: '100%'}}>
            <GridRow>
             <GridItem style={{width: '30%'}} value='Daniel' />
             <GridItem style={{width: '70%'}} value='Developer' />
            </GridRow>
            <GridRow style={{display: 'flex', justifyContent: 'center', backgroundColor: 'whitesmoke'}}>
              <h1>custom row</h1>
            </GridRow>
            <GridRow>
             <GridItem style={{width: '30%'}} value='Tom' />
             <GridItem style={{width: '70%'}} value='Developer' />
            </GridRow>
          </GridBody>
        </Grid>

        <h3>Custom Header default Rows</h3>
        <Grid>
          <GridHeader>
           <GridItem style={{width: '30%'}} title='Name' />
           <GridItem style={{width: '70%'}} title='Description' />
          </GridHeader>
          <GridBody columns={customGridHeader.metadata.columns} rows={customGridHeader.metadata.rows} cells={customGridHeader.metadata.cells} data={customGridHeader.data} />
        </Grid>

        <h3>Custom Rows default header</h3>
        <Grid>
          <GridHeader columns={customGridRows.metadata.columns} cells={customGridRows.metadata.cellss}/>
          <GridRow>
           <GridItem style={{width: '30%'}} value='Daniel' />
           <GridItem style={{width: '70%'}} value='Developer' />
          </GridRow>
          <GridRow style={{display: 'flex', justifyContent: 'center', backgroundColor: 'whitesmoke', height: 50}}>
            <GridItem>
              custom row
            </GridItem>
          </GridRow>
          <GridRow>
           <GridItem style={{width: '30%'}} value='Tom' />
           <GridItem style={{width: '70%'}} value='Developer' />
          </GridRow>
          <GridRow>
           <GridLinkItem style={{width: '30%'}} value='Other' onClick={() => alert('clicked')} />
           <GridImageItem style={{width: '70%'}} image='moran-logo.png' onClick={() => alert('clicked')} />
          </GridRow>
        </Grid>
      </div>
    );
  }
};

export default SampleGrid;
