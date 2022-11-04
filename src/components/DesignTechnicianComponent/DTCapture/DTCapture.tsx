import React, { Fragment, FunctionComponent, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Capture as CaptureUI, Button } from '../../../commonui';
import styles from '../../../commonui/Capture/Capture.module.scss';

interface IDTCaptureProps {
  classname?: string;
}

interface IDTCaptureModalProps {
  show?: boolean;
  onHide: () => void;
}

const DTCapture: FunctionComponent<IDTCaptureProps> = () => {
  const [showmodal, setShowmodal] = useState(false);
  const DTCaptureModal: FunctionComponent<IDTCaptureModalProps> = (props) => {
    return (
      <Fragment>
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h5>Modal Description</h5>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {' '}
            <Button
              varientprop={'primary'}
              classnameprop={styles['button-submit']}
              styleprop={{ margin: '4px' }}
              click={props.onHide}
              disableButtonprop={false}
              buttonnameprop={'Close'}
            ></Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <DTCaptureModal show={showmodal} onHide={() => setShowmodal(false)} />
      <CaptureUI classnameprop={styles['dt-capture-frame']}>
        <div>
          <img
            className={styles['Imagenull-logo']}
            src='../../images/Imagenull.png'
            alt='image-preview'
          ></img>
        </div>
        <div className={styles['capture-bottomleft-cont']} onClick={() => setShowmodal(true)}>
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
