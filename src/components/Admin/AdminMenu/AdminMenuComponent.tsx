import React, { Fragment, FunctionComponent, memo } from 'react';
import styles from '../../../containers/Admin/Admin.module.scss';

interface IAdminMenuProps {
  userType?: string;
  menufunc?: any;
  menutype?: any;
}

const AdminMenuComponent: FunctionComponent<IAdminMenuProps> = ({ menufunc, menutype }) => {
  return (
    <Fragment>
      <div className={styles['admin-menu']}>
        <div
          className={styles['admin-menu-box']}
          style={{ background: menutype === 'plantmanage' ? 'red' : 'transparent' }}
          onClick={() => {
            menufunc('plantmanage');
          }}
        >
          <img src={'./images/home.png'} alt='settings-icon' className={styles['admin-icon']} />
        </div>
        <div
          className={styles['admin-menu-box']}
          style={{ background: menutype === 'preferences' ? 'red' : 'transparent' }}
          onClick={() => {
            menufunc('preferences');
          }}
        >
          <img
            src={'./images/preferences.png'}
            alt='settings-icon'
            className={styles['admin-icon']}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default memo(AdminMenuComponent);
