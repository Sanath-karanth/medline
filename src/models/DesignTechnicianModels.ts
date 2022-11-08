export interface IWorkOrderDetailsComponents {
  ComponentName: string;
  ComponentCode: string;
  ComponentDesc: string;
  CapCode: string;
  ExpirationDate: string;
  SequenceNumber: string;
  PhotoName: string;
  ImgPath: string;
  SpecialInstruction: string;
  Quantity: string;
  uom: string;
  SterCode: string;
  StationId: string;
  PickupWarehouse: string;
  MasterSeqId: string;
}
export interface IPictureList extends IWorkOrderDetailsComponents {
  Frame: number;
  ImageAdded?: boolean;
  Selected?: boolean;
  UID?: string;
  ComponentGroupUID?: string;
}
export interface IWorkOrderDetailsResponse extends IDefaultResponse {
  WONumber: string | null;
  TypeOfOrder: string | null;
  KitNumber: string | null;
  ImageKitNumber: string | null;
  OrderQuantity: string | null;
  PlantNumber: string | null;
  SterilizationMethod: string | null;
  PreviousWODetails: string | null;
  Components: IWorkOrderDetailsComponents[];
}
export interface IWorkOrderDetailsRequest {
  WONumber: string;
}
export interface IUserDetails {
  plantNumber: string;
  dtName: string;
}
export interface ISoftBillResponse {
  softBillData: number;
}
export interface ISoftBillRequest {
  userid: number;
}
export interface IDefaultResponse {
  loading?: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}
export interface IUserDetailsResponse extends IDefaultResponse {
  data: IUserDetails;
}
interface IGetSoftBillAction {
  type: string;
  payload: ISoftBillResponse;
}
interface IPictureListAction {
  type: string;
  payload: IPictureList[];
}
interface IGetUserDetailsAction {
  type: string;
  payload: IUserDetailsResponse;
}
interface IWorkOrderDetailsAction {
  type: string;
  payload: IWorkOrderDetailsResponse;
}
interface IUpdateSelectedPictureListItem {
  type: string;
  payload: IPictureList;
}
export interface IDesignTechnicianReducer {
  userDetails: IUserDetailsResponse;
  softBillData: ISoftBillResponse;
  workOrderDetails: IWorkOrderDetailsResponse;
  pictureList: IPictureList[];
  selectedPictureListItem: IPictureList | null;
  selectedComponentItem: IWorkOrderDetailsComponents | null;
}
export type IDesignTechnicianActions =
  | IGetSoftBillAction
  | IGetUserDetailsAction
  | IWorkOrderDetailsAction
  | IPictureListAction
  | IUpdateSelectedPictureListItem;
