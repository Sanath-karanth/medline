import { Dispatch } from '@reduxjs/toolkit';
import { ActionTypes } from '../../constants/ActionTypeConstants';
import {
  IDefaultPlantNumberResponse,
  IPlantNumberActions,
  IDefaultPlantNumberRequest,
  IPlantNumberListResponse,
} from '../../models/PlantNumberModels';
import {
  getDefaultPlantApi,
  getPlantNumberListApi,
} from '../../services/Services/PlantNumberService';

const getDefaultPlantNumber = () => {
  return async (dispatch: Dispatch<IPlantNumberActions>) => {
    const defaultPlantNumberResponse: IDefaultPlantNumberResponse = {
      loading: true,
      error: false,
      defaultPlantNumber: null,
      success: false,
      message: null,
    };
    const getDefaultPlantNumberRequest: IDefaultPlantNumberRequest = { userid: 1 };
    try {
      const defaultPlantNumberResponse: IDefaultPlantNumberResponse = await getDefaultPlantApi(
        getDefaultPlantNumberRequest,
      );
      dispatch({
        type: ActionTypes.GET_DEFAULT_PLANT_NUMBER,
        payload: defaultPlantNumberResponse,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_DEFAULT_PLANT_NUMBER,
        payload: defaultPlantNumberResponse,
      });
    }
  };
};

const getPlantNumberList = () => {
  return async (dispatch: Dispatch<IPlantNumberActions>) => {
    const plantNumberListResponse: IPlantNumberListResponse = {
      loading: true,
      success: false,
      message: null,
      Plant: [],
      WorkOrder: [],
      error: false,
    };
    dispatch({
      type: ActionTypes.GET_PLANT_NUMBER_LIST,
      payload: plantNumberListResponse,
    });
    const response: IPlantNumberListResponse = await getPlantNumberListApi();
    response.loading = false;
    if (response.success) {
      dispatch({
        type: ActionTypes.GET_PLANT_NUMBER_LIST,
        payload: response,
      });
    } else {
      dispatch({
        type: ActionTypes.GET_PLANT_NUMBER_LIST,
        payload: response,
      });
    }
  };
};

export default { getDefaultPlantNumber, getPlantNumberList };
