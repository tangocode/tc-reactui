# Readme

## Usage

npm install
npm start

## Components

### Grid

The Grid component can be use as a stand alone or build from its subcomponents for custom requirements.

###### Properties

  height: React.PropTypes.number
  className: React.PropTypes.array
  style: React.PropTypes.object
  columns: React.PropTypes.array
  headerClassName: React.PropTypes.array
  headerStyle: React.PropTypes.object
  data: React.PropTypes.array
  bodyClassName: React.PropTypes.array
  bodyStyle: React.PropTypes.object
  rowClassName: React.PropTypes.array
  rowStyle: React.PropTypes.object
  showLoading: React.PropTypes.bool
  loadingText: React.PropTypes.bool
  loadingStyle: React.PropTypes.bool
  loadingClassName: React.PropTypes.bool

###### Events

  onSorting: React.PropTypes.func
  onPaging: React.PropTypes.func

#### Grid Subcomponents

##### GridHeader

###### Properties

  className: React.PropTypes.array
  style: React.PropTypes.object
  columns: React.PropTypes.array

###### Events
  
  onSorting: React.PropTypes.func

##### GridBody

###### Properties

  className: React.PropTypes.array
  style: React.PropTypes.object
  rowClassName: React.PropTypes.array
  rowStyle: React.PropTypes.object
  columns: React.PropTypes.array
  rows: React.PropTypes.array
  cells: React.PropTypes.array
  data: React.PropTypes.array

###### Events

##### GridRow

###### Properties

  className: React.PropTypes.array
  style: React.PropTypes.object
  columns: React.PropTypes.array

###### Events

##### GridItem

###### Properties

  item: React.PropTypes.object
  className: React.PropTypes.array
  style: React.PropTypes.object
  value: React.PropTypes.string

###### Events

  onClick: React.PropTypes.func


##### GridLinkItem

###### Properties

  item: React.PropTypes.object
  className: React.PropTypes.array
  style: React.PropTypes.object
  value: React.PropTypes.string

###### Events

  onClick: React.PropTypes.func

##### GridColumnHeader

###### Properties

  column: React.PropTypes.object
  className: React.PropTypes.array
  style: React.PropTypes.object
  field: React.PropTypes.string
  title: React.PropTypes.string
  ascending: React.PropTypes.bool

###### Events

  onClick: React.PropTypes.func
  onSorting: React.PropTypes.func

##### GridImageItem

###### Properties

  item: React.PropTypes.object
  className: React.PropTypes.array
  style: React.PropTypes.object
  image: React.PropTypes.string

###### Events

  onClick: React.PropTypes.func

