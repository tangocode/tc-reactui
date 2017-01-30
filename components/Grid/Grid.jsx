import React, { Component } from 'react';
import GridHeader from './GridHeader.jsx';
import GridBody from './GridBody.jsx';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data ? this.props.data : [],
      showLoading: this.props.showLoading
    }
    this.sortLocal = this.sortLocal.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDivScroll = this.handleDivScroll.bind(this);
    this.containerDidMount = this.containerDidMount.bind(this);
    this.rowClickListener = this.rowClickListener.bind(this);
  }

  sortLocal(field, ascending) {
    let sortedData;
    if (ascending) {
      sortedData = this.state.data.sort((a, b) => {
        const aFormatted = a[field].value ? a[field].value.toUpperCase().trim() : a[field].toUpperCase().trim()
        const bFormatted = b[field].value ? b[field].value.toUpperCase().trim() : b[field].toUpperCase().trim()
        if (aFormatted < bFormatted) return -1;
        if (aFormatted > bFormatted) return 1;
        return 0;
      });
    } else {
      sortedData = this.state.data.sort((a, b) => {
        const aFormatted = a[field].value ? a[field].value.toUpperCase().trim() : a[field].toUpperCase().trim()
        const bFormatted = b[field].value ? b[field].value.toUpperCase().trim() : b[field].toUpperCase().trim()
        if (aFormatted > bFormatted) return -1;
        if (aFormatted < bFormatted) return 1;
        return 0;
      });
    }
    this.setState({ data: sortedData });
  }

  handleScroll() {
    if (this.props.onPaging) {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        this.props.onPaging();
      }
    }
  }

  handleDivScroll() {
    if (this.props.onPaging && this.container.scrollTop + 300 >= this.container.scrollHeight) {
      this.props.onPaging();
    }
  }

  rowClickListener(rowData) {
    this.props.rowClickListener ? this.props.rowClickListener(rowData) : null;
  }

  componentDidMount() {
    if (!this.props.height) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (!this.props.height) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  containerDidMount(container) {
    if (container) {
      this.container = container;
      if (this.props.height) {
        container.addEventListener('scroll', this.handleDivScroll);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        data: nextProps.data
      });
    }
    if (nextProps.showLoading !== undefined) {
      this.setState({
        showLoading: nextProps.showLoading
      });
    }
  }

  render() {
    /* Custom Styling config - Start */

    const className = this.props.className ? [...this.props.className] : [];
    let style = Object.assign({}, this.props.style);
    if (this.props.height) {
      style = Object.assign({}, style, {
        height: '300',
        overflowY: 'scroll'
      });
    }

    /* Custom Styling config - End */

    /* Custom Content config - Start */

    let loading = (<div />);
    if (this.state.showLoading) {
      const loadingClassName = this.props.loadingClassName ? ['load', ...this.props.loadingClassName] : ['load'];
      const loadingStyle = Object.assign({}, this.props.loadingStyle);
      const loadingText = this.props.loadingText ? this.props.loadingText : 'Loading...';
      loading = (
        <div className='col-lg-12'>
          <h4 className={loadingClassName} style={loadingStyle}>{loadingText}</h4>
        </div>
      );
    }

    // Set children as content
    let content = (
      <div className={className} style={style} ref={this.containerDidMount}>
        {this.props.children}
        {loading}
      </div>
    );

    // If not children then use default content
    if (!this.props.children) {
      let columns = [];
      let rows = [];
      let cells = [];
      if (this.props.metadata) {
        if (this.props.metadata.constructor === Array) {
          columns = this.props.metadata;
        } else {
          if (this.props.metadata.columns) {
            columns = this.props.metadata.columns;
          }
          if (this.props.metadata.rows) {
            rows = this.props.metadata.rows;
          }
          if (this.props.metadata.cells) {
            cells = this.props.metadata.cells;
          }
        }
      }
      let onSorting = this.sortLocal;
      if (this.props.onSorting) {
        onSorting = this.props.onSorting;
      }
      content = (
        <div className={className} style={style} ref={this.containerDidMount}>
          <GridHeader className={this.props.headerClassName} style={this.props.headerStyle} columns={columns} cells={cells} onSorting={onSorting} />
          <GridBody className={this.props.bodyClassName} style={this.props.bodyStyle} rowClassName={this.props.rowClassName} rowStyle={this.props.rowStyle} columns={columns} rows={rows} cells={cells} data={this.state.data} rowClickListener={this.rowClickListener}/>
          {loading}
        </div>
      );
    }

    /* Custom Content config - End */

    // Render content
    return (
      <div>
        {content}
      </div>
    );
  }
};

Grid.propTypes = {
  height: React.PropTypes.number,
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  columns: React.PropTypes.array,
  headerClassName: React.PropTypes.array,
  headerStyle: React.PropTypes.object,
  data: React.PropTypes.array,
  bodyClassName: React.PropTypes.array,
  bodyStyle: React.PropTypes.object,
  rowClassName: React.PropTypes.array,
  rowStyle: React.PropTypes.object,
  onSorting: React.PropTypes.func,
  onPaging: React.PropTypes.func,
  showLoading: React.PropTypes.bool,
  loadingText: React.PropTypes.bool,
  loadingStyle: React.PropTypes.bool,
  loadingClassName: React.PropTypes.bool,
  rowClickListener: React.PropTypes.func
};

export default Grid;
