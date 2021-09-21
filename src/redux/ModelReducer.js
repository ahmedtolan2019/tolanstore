import { ActionsTypes } from "./Types";

export const ModelReducer = (storeData, action) => {
  switch (action.type) {
    case ActionsTypes.STORE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].concat([action.payload]),
      };
    case ActionsTypes.UPDATE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case ActionsTypes.DELETE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].filter((item) =>
          item.id !== action.payload.id ? action.payload : item
        ),
      };

    default:
      return storeData || {};
  }
};
