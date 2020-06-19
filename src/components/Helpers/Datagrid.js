import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

const { SearchBar } = Search;
class Datagrid extends Component {
  constructor(props, context) {
    super(props, context);
    this.rowEvents = {};
    this.options = {
      paginationSize: 4,
      pageStartIndex: 0,
      alwaysShowAllBtns: true, // Always show next and previous button
      withFirstAndLast: false, // Hide the going to First and Last page button
      hideSizePerPage: false, // Hide the sizePerPage dropdown always
      hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      paginationTotalRenderer: this.customTotal,
      sizePerPageList: [
        {
          text: '25',
          value: 25,
        },
        {
          text: '50',
          value: 50,
        },
        {
          text: '100',
          value: 100,
        },
        {
          text: 'All',
          value: this.props.data.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };
    this.state = {
      openCtxMenu: false,
      ctxMenuCoord: null,
      ctxMenuRow: null,
      ctxMenuIdx: null,
      rowEvents: null,
    };
    this.customTotal = this.customTotal.bind(this);
  }

  componentDidMount() {
    let rowEvents = this.props.rowEvents || {};
    if (this.props.ctxMenuOptions) {
      let func = rowEvents.onContextMenu;
      rowEvents.onContextMenu = (e, row, rowIndex) => {
        if (func) func(e, row, rowIndex);
        e.preventDefault();
        this.toggleContextMenu(e);
        this.setState({ ctxMenuRow: row, ctxMenuIdx: rowIndex });
      };
    }
    this.setState({ rowEvents });
  }

  customTotal = (from, to, size) => {
    return (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} results
      </span>
    );
  };

  render() {
    const { columns, data, keyField } = this.props;
    //prettier-ignore
    const { rowEvents } = this.state;
    return (
      <ToolkitProvider keyField={keyField} data={data} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar
              placeholder="Search"
              {...this.props.searchProps}
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              hover
              condensed
              rowEvents={rowEvents}
              bootstrap4={true}
              headerClasses="table-header"
              noDataIndication={this.props.noDataIndication}
              selectRow={this.props.selectRow}
              defaultSorted={this.props.defaultSorted}
              rowStyle={this.props.rowStyle}
              pagination={paginationFactory(this.options)}
              filter={filterFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    );
  }
}

export default Datagrid;
