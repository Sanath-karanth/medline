import React, { Fragment, FunctionComponent, memo } from 'react';

interface IAdminPlantManageProps {
  userType?: string;
  menufunc?: string;
  menutype?: string;
}

const AdminPlantManageComponent: FunctionComponent<IAdminPlantManageProps> = ({
  menufunc,
  menutype,
}) => {
  return (
    <Fragment>
      <div>
        <h4>Admin Plant Management</h4>
      </div>
    </Fragment>
  );
};

export default memo(AdminPlantManageComponent);
