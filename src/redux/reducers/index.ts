import { combineReducers } from '@reduxjs/toolkit';
import designTechnicianReducer from './DesignTechnicianReducers';
import plantNumberReducer from './PlantNumberReducers';

const rootReducer = combineReducers({
  designTechnician: designTechnicianReducer,
  plantNumber: plantNumberReducer,
});

export default rootReducer;
