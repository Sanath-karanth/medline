/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Header } from '../../commonui';
import styles from './PlantNumber.module.scss';

interface ILoginProps {
  usertype?: any;
}

const login: FunctionComponent<ILoginProps> = () => {
  const clickSubmit = () => {
    console.log('Clicked');
  };
  return (
    <Fragment>
      <Header />
      <div className={styles['pn-main-cont']}>
        <Row className='gx-0'>
          <Col xs={5} md={5} className={styles['pn-logo-Col']}></Col>
          <Col xs={7} md={7} className={styles['pn-data-Col']}>
            <form>
              <div className={styles['pn-header-cont']}>
                <h3 className={styles['pn-header']}>Welcome</h3>
              </div>
              <div className={styles['pn-subheader-cont']}>
                <h3 className={styles['pn-subheader']}>User</h3>
              </div>
              <div className={styles['pn-label-cont']}>
                <label className={styles['pn-label']}>Enter Name</label>
              </div>
              <div className={styles['pn-input-cont']}>
                <input type='text'></input>
              </div>
              <div className={styles['pn-button-cont']}>
                <Button
                  varientprop={'outline-primary'}
                  classnameprop={styles['button-submit']}
                  styleprop={{ margin: '4px' }}
                  click={clickSubmit}
                  disableButtonprop={false}
                  buttonnameprop={'Login'}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default login;
