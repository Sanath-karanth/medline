const API_GATEWAY = process.env.REACT_APP_API_GATEWAY_DEV;

export default {
  getPlantNumberListURL: `${API_GATEWAY}/GetPlantNumber`,
  getUserDetailsURL: `${API_GATEWAY}/GetUserDetails`,
  getSoftBillURL: `${API_GATEWAY}/softbill`,
  getWorkOrderDetailsURL: `${API_GATEWAY}/GetWorkOrderDetails`,
};
