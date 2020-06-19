import React from 'react';
import Backend from '../../Layouts/Backend';
import Button from '../../UI/Button/Button';
import Datagrid from '../../Helpers/Datagrid';

export default (props) => {
  const { messages, columns, defaultSorted } = props;
  return (
    <Backend>
      <div className="content-inner">
        {/* <Button id="sms-actions" classes="btn-primary">
          Actions
        </Button> */}
        <Datagrid
          data={messages}
          keyField="time"
          columns={columns}
          defaultSorted={defaultSorted}
        />
      </div>
    </Backend>
  );
};
