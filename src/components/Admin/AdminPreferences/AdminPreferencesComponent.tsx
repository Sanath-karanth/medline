import React, { Fragment, FunctionComponent, memo } from 'react';

interface IAdminPreferencesProps {
  userType?: string;
  menufunc?: string;
  menutype?: string;
}

const AdminPreferencesComponent: FunctionComponent<IAdminPreferencesProps> = ({
  menufunc,
  menutype,
}) => {
  return (
    <Fragment>
      <div>
        <h4>Admin Prefereaces</h4>
      </div>
    </Fragment>
  );
};

export default memo(AdminPreferencesComponent);
