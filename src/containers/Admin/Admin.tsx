/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment, useState, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Admin.module.scss';
import { Header } from '../../commonui';
import AdminMenuComponent from '../../components/Admin/AdminMenu/AdminMenuComponent';
import AdminPlantManageComponent from '../../components/Admin/AdminPlantManagement/AdminPlantManageComponent';
import AdminPreferencesComponent from '../../components/Admin/AdminPreferences/AdminPreferencesComponent';

interface IAdminProps {
  classname?: string;
}

const Admin: FunctionComponent<IAdminProps> = () => {
  const [menuname, setMenuName] = useState('plantmanage');

  const func = useCallback(
    (buttontype: string) => {
      console.log('button type is ', buttontype);
      setMenuName(buttontype);
    },
    [menuname],
  );

  return (
    <Fragment>
      <Header />
      <div className={styles['admin-menu-cont']}>
        <Row className='gx-0'>
          <Col xs={1} md={1} className={styles['admin-menu-Col']}>
            <AdminMenuComponent menufunc={func} menutype={menuname} />
          </Col>
          <Col xs={11} md={11} className={styles['admin-content-Col']}>
            {menuname === 'plantmanage' && <AdminPlantManageComponent />}
            {menuname === 'preferences' && <AdminPreferencesComponent />}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Admin;
