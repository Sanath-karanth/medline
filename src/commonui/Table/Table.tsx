import React, { Fragment, FunctionComponent } from 'react';
import { Table as TableUI } from 'react-bootstrap';
import styles from './Table.module.scss';

interface ITableProps {
  classnameprop?: string;
  children?: any;
}

const Table: FunctionComponent<ITableProps> = ({ classnameprop, children }) => {
  return (
    <Fragment>
      <div className={classnameprop}>
        <TableUI hover bordered size='lg' responsive='lg' className={styles['main-table']}>
          {children}
        </TableUI>
      </div>
    </Fragment>
  );
};

export default Table;
