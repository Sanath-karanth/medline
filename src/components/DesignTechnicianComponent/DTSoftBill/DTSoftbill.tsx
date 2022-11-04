import React, { Fragment, FunctionComponent } from 'react';
import { Table as SoftBillTable } from '../../../commonui';
import styles from '../../../commonui/Table/Table.module.scss';

interface IDTSoftbillProps {
  classname?: string;
}

const DTSoftbill: FunctionComponent<IDTSoftbillProps> = () => {
  return (
    <Fragment>
      <div>
        <SoftBillTable classnameprop={styles['dt-softbill-table']}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>twitter</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>twitter</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>twitter</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>twitter</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </SoftBillTable>
      </div>
    </Fragment>
  );
};

export default React.memo(DTSoftbill);
