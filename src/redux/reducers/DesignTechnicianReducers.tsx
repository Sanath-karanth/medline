import { ActionTypes } from '../../constants/ActionTypeConstants';
import {
  IDesignTechnicianActions,
  IDesignTechnicianReducer,
  IUserDetails,
} from '../../models/DesignTechnicianModels';

const initialState: IDesignTechnicianReducer = {
  softBillData: { softBillData: 10 },
  userDetails: {
    loading: false,
    message: null,
    data: {} as IUserDetails,
    error: false,
    success: false,
  },
  pictureList: [],
  selectedPictureListItem: null,
  selectedComponentItem: null,
  workOrderDetails: {
    loading: false,
    message: null,
    error: false,
    success: false,
    WONumber: null,
    TypeOfOrder: null,
    KitNumber: null,
    ImageKitNumber: null,
    OrderQuantity: null,
    PlantNumber: null,
    SterilizationMethod: null,
    PreviousWODetails: null,
    Components: [],
  },
};

const reducer = (state = initialState, action: IDesignTechnicianActions) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SELECTED_PICTURE_LIST_ITEM: {
      return {
        ...state,
        selectedPictureListItem: action.payload,
      };
    }
    case ActionTypes.GET_WORKORDER_DETAILS: {
      return {
        ...state,
        workOrderDetails: action.payload,
      };
    }
    case ActionTypes.UPDATE_PICTURE_LIST: {
      return {
        ...state,
        pictureList: action.payload,
      };
    }
    case ActionTypes.GET_SOFTBILL_DATA: {
      return {
        ...state,
        softBillData: action.payload,
      };
    }
    case ActionTypes.UPDATE_SOFTBILL_DATA: {
      return {
        ...state,
        softBillData: action.payload,
      };
    }
    case ActionTypes.GET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
