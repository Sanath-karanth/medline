/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment } from 'react';

interface ICaptureProps {
  classnameprop: string;
  children?: any;
}

const Capture: FunctionComponent<ICaptureProps> = ({ classnameprop, children }) => {
  return (
    <Fragment>
      <div className={classnameprop}>{children} </div>
    </Fragment>
  );
};

export default React.memo(Capture);
