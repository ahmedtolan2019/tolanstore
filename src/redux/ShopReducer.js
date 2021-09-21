import { ActionsTypes, DataTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionsTypes.DATA_LOAD:
      // console.log("reducer", action);
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      };
    //pagination Control
    case ActionsTypes.DATA_SET_PAGESIZE:
      return { ...storeData, pageSize: action.payload };
    case ActionsTypes.DATA_SET_SORT_PROPERTY:
      return { ...storeData, sortKey: action.payload };
    case ActionsTypes.DATA_SET_PRICE_FILTER:
      return {
        ...storeData,
        priceStart: action.payload.priceStart,
        priceEnd: action.payload.priceEnd,
      };
    case ActionsTypes.DATA_STORE:
      if (action.payload.dataType === DataTypes.ORDERS) {
        return {
          ...storeData,
          order: { ...action.payload.data },
        };
      }
      break;
    default:
      return storeData || {};
  }
};
