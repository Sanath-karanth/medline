/* eslint-disable no-duplicate-imports */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Header } from '../../commonui';
import styles from './WorkOrderNumber.module.scss';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PlantNumberActions, DesignTechnicianActions } from '../../redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  IRootStateType,
  IReactSelectOptionList,
  IReactSelectedOption,
} from '../../models/RootReducerModels';
import { IPlantNumberListResponse, IPlantNumberReducer } from '../../models/PlantNumberModels';
import {
  IDesignTechnicianReducer,
  IUserDetailsResponse,
} from '../../models/DesignTechnicianModels';
import UserTypeConstants from '../../constants/UserTypeConstants';

const PlantNumber: FunctionComponent = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const dispatch = useDispatch();
  const userType: string = location.state.user;

  let userName = 'DT Name';
  if (userType === UserTypeConstants.LL) {
    userName = 'LL Name';
  }

  const [selectedOption, setSelectedOption] = useState<IReactSelectedOption | null>(null);
  const { getPlantNumberList } = bindActionCreators(PlantNumberActions, dispatch);
  const { getUserDetails } = bindActionCreators(DesignTechnicianActions, dispatch);
  const PlantNumberStore: IPlantNumberReducer = useSelector(
    (state: IRootStateType) => state.plantNumber,
  );
  const userDetailsStore: IDesignTechnicianReducer = useSelector(
    (state: IRootStateType) => state.designTechnician,
  );
  const plantNumberList: IPlantNumberListResponse = PlantNumberStore.plantNumberList;
  const userDetails: IUserDetailsResponse = userDetailsStore.userDetails;
  const { dtName, plantNumber } = userDetails.data;

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  let dropDownOptions: IReactSelectOptionList | [] = [];

  if (plantNumberList.success) {
    dropDownOptions =
      (plantNumberList &&
        plantNumberList.Plant.map((i) => {
          return { label: i.PlantId, value: i.PlantId };
        })) ||
      [];
  }
  const submitWorkOrder = () => {
    if (userType === UserTypeConstants.LL) {
      navigate('/line-leader/new-order', { state: { user: 'LL' } });
    } else {
      navigate('/design-technician/new-order', { state: { user: 'LL' } });
    }
  };

  useEffect(() => {
    getPlantNumberList();
    getUserDetails();
  }, []);

  useEffect(() => {
    setSelectedOption({ value: plantNumber, label: plantNumber });
  }, [plantNumber]);

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
                <h3 className={styles['pn-subheader']}>{userName || dtName}</h3>
              </div>
              <div className={styles['pn-label-cont']}>
                <label className={styles['pn-label']}>
                  Please Enter Work Order number to Continue
                </label>
              </div>
              <div className={styles['pn-input-cont']}>
                <Select
                  className='basic-single'
                  classNamePrefix='select'
                  value={selectedOption}
                  onChange={(option) => handleChange(option)}
                  name='color'
                  options={dropDownOptions}
                />
              </div>
              <div className={styles['pn-button-cont']}>
                <Button
                  varientprop={'outline-primary'}
                  classnameprop={styles['button-submit']}
                  styleprop={{ margin: '4px' }}
                  click={submitWorkOrder}
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

export default PlantNumber;
