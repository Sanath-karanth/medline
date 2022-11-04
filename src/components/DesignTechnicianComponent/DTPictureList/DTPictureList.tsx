import React, { Fragment, FunctionComponent } from 'react';
import { Table as PictureListTable } from '../../../commonui';
import styles from '../../../commonui/Table/Table.module.scss';

interface IDTPictureListProps {
  classname?: string;
}

const DTPictureList: FunctionComponent<IDTPictureListProps> = () => {
  return (
    <Fragment>
      <div>
        <PictureListTable classnameprop={styles['dt-picturelist-table']}>
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
        </PictureListTable>
      </div>
    </Fragment>
  );
};

export default React.memo(DTPictureList);
