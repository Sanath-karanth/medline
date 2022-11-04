/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../commonui';
import styles from './Header.module.scss';

interface IHeaderProps {
  usertype?: any;
}

const Header: FunctionComponent<IHeaderProps> = () => {
  return (
    <Fragment>
      <div className={styles['header-main-cont']}>
        <Row className='gx-0'>
          <Col xs={1} md={1} className={styles['header-logo-Col']}>
            <img className={styles['header-logo']} src='../../images/MedLine.png' alt='logo'></img>
          </Col>
          <Col xs={11} md={11} className={styles['header-data-Col']}>
            <div className={styles['header-main']}>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
                <span className={styles['header-verticalDivider']}></span>
              </div>
              <div className={styles['header-sub-main']}>
                <div className={styles['header-data-cont']}>
                  <span>Order type</span>
                  <span>New</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr className={styles['header-hr-line']}></hr>
    </Fragment>
  );
};

export default React.memo(Header);
