const API_GATEWAY = process.env.REACT_APP_API_GATEWAY_DEV;

export default {
  getPlantNumberListURL: `${API_GATEWAY}/getPlantNumber`,
};
