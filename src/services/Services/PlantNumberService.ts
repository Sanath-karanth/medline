import AxiosHttpRequest from '../AxiosCore';
import { APIEndpoints } from '../../constants/APIEndPointConstants';
import { IDefaultPlantNumberRequest } from '../../models/PlantNumberModels';
import { AxiosResponse } from 'axios';

export const getDefaultPlantApi = async (jsonBody: IDefaultPlantNumberRequest) => {
  try {
    const defaultPlantNumberResponse: AxiosResponse = await AxiosHttpRequest.post(
      APIEndpoints.DESIGN_TECHNICIAN.GET_DEFAULT_PLANT,
      jsonBody,
      true,
    );
    return defaultPlantNumberResponse.data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export const getPlantNumberListApi = async () => {
  try {
    const PlantNumberListResponse: AxiosResponse = await AxiosHttpRequest.get(
      APIEndpoints.PLANT_NUMBER.GET_PLANT_NUMBER_LIST,
      {},
      true,
    );
    return PlantNumberListResponse.data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
