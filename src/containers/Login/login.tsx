/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../commonui';
import styles from './Login.module.scss';

interface ILoginProps {
  usertype?: any;
}

const login: FunctionComponent<ILoginProps> = () => {
  const clickSubmit = () => {
    console.log('Clicked');
  };
  return (
    <Fragment>
      <div className={styles['login-main-cont']}>
        <Row className='gx-0'>
          <Col xs={12} md={12} className={styles['loginCol']}>
            <form>
              <div>
                <h3>Login Form</h3>
              </div>
              <div>
                <input type='text'></input>
              </div>
              <div>
                <Button
                  varientprop={'outline-primary'}
                  classnameprop={'buttonlogin'}
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
