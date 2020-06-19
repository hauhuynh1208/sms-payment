import React from 'react';
import SMSPage from './SMSPage';
import Moment from 'moment';

const example = {
  smsId: {
    type: 'String',
    unique: true,
    required: true,
  },
  address: {
    type: 'String',
    required: true,
  },
  body:
    'SD TK 0123456789000 +100,000,000VND luc 19-06-2020 09:34:00. SD 1,100,000,000. Ref abc',
  time: '1592562883',
  folderName: 'String',
  readState: true,
  status: 'new', // new, mark
  edits: 'Array[String]',
  bankName: 'Vietcombank',
  note: 'note',
};

class SMS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [example],
    };
    this.columns = [
      {
        dataField: 'body',
        text: 'Content',
      },
      {
        dataField: 'readState',
        text: 'Read',
        sort: true,
        formatter: (cell, row, rowIndex) => {
          return cell ? 'Yes' : 'No';
        },
      },
      {
        dataField: 'status',
        text: 'Status',
        sort: true,
      },
      {
        dataField: 'bankName',
        text: 'Bank',
        sort: true,
      },
      {
        dataField: 'time',
        text: 'Time',
        sort: true,
        formatter: (cell, row, rowIndex) => {
          return Moment.unix(cell).format('DD/MM/YYYY HH:mm:ss');
        },
      },
    ];
    this.defaultSorted = [
      {
        dataField: 'time',
        order: 'asc',
      },
    ];
  }
  render() {
    const { messages } = this.state;
    return (
      <SMSPage
        messages={messages}
        columns={this.columns}
        defaultSorted={this.defaultSorted}
      />
    );
  }
}

export default SMS;
