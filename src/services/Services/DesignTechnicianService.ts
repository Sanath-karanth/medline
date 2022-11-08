import AxiosHttpRequest from '../AxiosCore';
import { APIEndpoints } from '../../constants/APIEndPointConstants';
import { ISoftBillRequest, IWorkOrderDetailsRequest } from '../../models/DesignTechnicianModels';
import { AxiosResponse } from 'axios';

export const getWorkDetailsApi = async (jsonBody: IWorkOrderDetailsRequest) => {
  try {
    const defaultPlantNumberResponse: AxiosResponse = await AxiosHttpRequest.post(
      APIEndpoints.DESIGN_TECHNICIAN.GET_WORKORDER_DETAILS,
      jsonBody,
      true,
    );
    return defaultPlantNumberResponse.data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const getAllSoftBillApi = async (jsonBody: ISoftBillRequest) => {
  try {
    const defaultPlantNumberResponse: AxiosResponse = await AxiosHttpRequest.post(
      APIEndpoints.DESIGN_TECHNICIAN.GET_SOFTBILL,
      jsonBody,
      true,
    );
    return defaultPlantNumberResponse.data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const getUserDetailsApi = async () => {
  try {
    const defaultPlantNumberResponse: AxiosResponse = await AxiosHttpRequest.get(
      APIEndpoints.DESIGN_TECHNICIAN.GET_USER_DETAILS,
      {},
      true,
    );
    return defaultPlantNumberResponse.data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
