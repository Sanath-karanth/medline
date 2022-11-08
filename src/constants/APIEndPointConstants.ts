import apiConstants from './APIURLConstants';

const API_GATEWAY = process.env.REACT_APP_API_GATEWAY_DEV;

export const APIEndpoints = {
  DESIGN_TECHNICIAN: {
    GET_SOFTBILL: `${apiConstants.getSoftBillURL}`,
    GET_WORKORDER_DETAILS: `${apiConstants.getWorkOrderDetailsURL}`,
    GET_DEFAULT_PLANT: `${API_GATEWAY}/selectedPlant`,
    GET_USER_DETAILS: `${apiConstants.getUserDetailsURL}`,
  },
  PLANT_NUMBER: {
    GET_PLANT_NUMBER_LIST: `${apiConstants.getPlantNumberListURL}`,
  },
};
