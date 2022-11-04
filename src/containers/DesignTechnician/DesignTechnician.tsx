import React, { Fragment, FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Header } from '../../commonui';
import styles from './DesignTechnician.module.scss';
import DTpictureList from '../../components/DesignTechnicianComponent/DTPictureList/DTPictureList';
import DTcapture from '../../components/DesignTechnicianComponent/DTCapture/DTCapture';
import DTsoftbill from '../../components/DesignTechnicianComponent/DTSoftBill/DTSoftbill';
import DToperations from '../../components/DesignTechnicianComponent/DTOperations/DTOperations';

interface IDesignTechnicianProps {
  classname?: string;
}

const DesignTechnician: FunctionComponent<IDesignTechnicianProps> = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles['dt-main-cont']}>
        <Row className='gx-0'>
          <Col xs={9} md={9} className={styles['dt-picture-soft-capture-Col']}>
            <Row className='gx-0'>
              <Col xs={6} md={6} className={styles['dt-picturelist-Col']}>
                <div className={styles['dt-picturelist-cont']}>
                  <div>
                    <img
                      className={styles['list-logo']}
                      src='../../images/List.png'
                      alt='logo'
                    ></img>
                    <span>Picture List</span>
                  </div>
                  <span>Total: 4 frames</span>
                </div>
                <div>
                  <DTpictureList />
                </div>
              </Col>
              <Col xs={6} md={6} className={styles['dt-capture-Col']}>
                <div className={styles['dt-capture-cont']}>
                  <div>
                    <img
                      className={styles['preview-logo']}
                      src='../../images/Preview.png'
                      alt='logo'
                    ></img>
                    <span>Preview</span>
                  </div>
                </div>
                <div>
                  <DTcapture />
                </div>
              </Col>
            </Row>
            <Row className='gx-0'>
              <Col xs={12} md={12}>
                <div className={styles['dt-softbill-cont']}>
                  <div>
                    <img
                      className={styles['bill-logo']}
                      src='../../images/Bill.png'
                      alt='logo'
                    ></img>
                    <span>Softbill</span>
                  </div>
                  <span>Total: 4 frames</span>
                </div>
                <div>
                  <DTsoftbill />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={3} md={3} className={styles['dt-operation-Col']}>
            <div className={styles['dt-operation-cont']}>
              <DToperations />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default React.memo(DesignTechnician);
