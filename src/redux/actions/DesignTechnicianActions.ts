import { Dispatch } from '@reduxjs/toolkit';
import { ActionTypes } from '../../constants/ActionTypeConstants';
import {
  IDesignTechnicianActions,
  ISoftBillResponse,
  IWorkOrderDetailsResponse,
  ISoftBillRequest,
  IWorkOrderDetailsRequest,
  IUserDetailsResponse,
  IUserDetails,
  IPictureList,
} from '../../models/DesignTechnicianModels';
import { IRootStateType } from '../../models/RootReducerModels';
import {
  getAllSoftBillApi,
  getUserDetailsApi,
  getWorkDetailsApi,
} from '../../services/Services/DesignTechnicianService';

const updateSelectedPictureListItemAction = (pictureListItem: IPictureList) => {
  return async (dispatch: Dispatch<IDesignTechnicianActions>) => {
    dispatch({
      type: ActionTypes.UPDATE_SELECTED_PICTURE_LIST_ITEM,
      payload: pictureListItem,
    });
  };
};

const updatePictureListAction = (pictureListData: IPictureList[]) => {
  const pictureListClone = JSON.parse(JSON.stringify(pictureListData));
  return async (dispatch: Dispatch<IDesignTechnicianActions>) => {
    dispatch({
      type: ActionTypes.UPDATE_SELECTED_PICTURE_LIST_ITEM,
      payload: pictureListClone,
    });
  };
};

const getWorkOrderDetailsAction = (jsonBody: IWorkOrderDetailsRequest) => {
  return async (dispatch: Dispatch<IDesignTechnicianActions>) => {
    const workOrderDetails: IWorkOrderDetailsResponse = {
      loading: false,
      success: false,
      message: null,
      error: false,
      WONumber: null,
      TypeOfOrder: null,
      KitNumber: null,
      ImageKitNumber: null,
      OrderQuantity: null,
      PlantNumber: null,
      SterilizationMethod: null,
      PreviousWODetails: null,
      Components: [],
    };
    dispatch({
      type: ActionTypes.GET_WORKORDER_DETAILS,
      payload: workOrderDetails,
    });
    const response: IWorkOrderDetailsResponse = await getWorkDetailsApi(jsonBody);
    response.loading = false;
    if (response.success) {
      dispatch({
        type: ActionTypes.GET_WORKORDER_DETAILS,
        payload: response,
      });
    } else {
      dispatch({
        type: ActionTypes.GET_WORKORDER_DETAILS,
        payload: response,
      });
    }
  };
};

const getSoftBillData = () => {
  return async (dispatch: Dispatch<IDesignTechnicianActions>) => {
    const softBillData: ISoftBillResponse = { softBillData: 3 };
    const softBillRequest: ISoftBillRequest = { userid: 1 };
    try {
      const softBillResponse: ISoftBillResponse = await getAllSoftBillApi(softBillRequest);
      return softBillResponse;
      dispatch({
        type: ActionTypes.GET_SOFTBILL_DATA,
        payload: softBillResponse,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_SOFTBILL_DATA,
        payload: softBillData,
      });
    }
  };
};

const savePictureListData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_SOFTBILL_DATA,
        payload: 10,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_SOFTBILL_DATA,
        payload: error,
      });
    }
  };
};

const updateSoftBillData = () => {
  return async (dispatch: Dispatch<IDesignTechnicianActions>, getState: () => IRootStateType) => {
    console.log(getState());
    const softBi: ISoftBillResponse = { softBillData: 20 };
    try {
      dispatch({
        type: ActionTypes.UPDATE_SOFTBILL_DATA,
        payload: softBi,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_SOFTBILL_DATA,
        payload: softBi,
      });
    }
  };
};

const getUserDetails = () => {
  return async (dispatch: Dispatch<IDesignTechnicianActions>) => {
    const userDetailsResponse: IUserDetailsResponse = {
      loading: true,
      success: false,
      message: null,
      data: {} as IUserDetails,
      error: false,
    };
    dispatch({
      type: ActionTypes.GET_USER_DETAILS,
      payload: userDetailsResponse,
    });
    const response: IUserDetailsResponse = await getUserDetailsApi();
    response.loading = false;
    if (response.success) {
      dispatch({
        type: ActionTypes.GET_USER_DETAILS,
        payload: response,
      });
    } else {
      dispatch({
        type: ActionTypes.GET_USER_DETAILS,
        payload: response,
      });
    }
  };
};

export default {
  getUserDetails,
  getSoftBillData,
  savePictureListData,
  updateSoftBillData,
  getWorkOrderDetailsAction,
  updatePictureListAction,
  updateSelectedPictureListItemAction,
};
