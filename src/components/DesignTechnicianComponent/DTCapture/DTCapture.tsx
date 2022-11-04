import React, { Fragment, FunctionComponent } from 'react';
import { Capture as CaptureUI } from '../../../commonui';
import styles from '../../../commonui/Capture/Capture.module.scss';

interface IDTCaptureProps {
  classname?: string;
}

const DTCapture: FunctionComponent<IDTCaptureProps> = () => {
  return (
    <Fragment>
      <CaptureUI classnameprop={styles['dt-capture-frame']}>
        <div>
          <img
            className={styles['Imagenull-logo']}
            src='../../images/Imagenull.png'
            alt='image-preview'
          ></img>
        </div>
        <div className={styles['capture-bottomleft-cont']}>
          <img
            className={styles['Imageview-logo']}
            src='../../images/Imageview.png'
            alt='image-preview'
          ></img>
        </div>
      </CaptureUI>
    </Fragment>
  );
};

export default DTCapture;
