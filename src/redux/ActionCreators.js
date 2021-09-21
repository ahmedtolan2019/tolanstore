// import { data as intialData } from "./initialData";
import { ActionsTypes, DataTypes } from "./Types";
import { RestDataSource } from "./../Api/REST/RestDataSource";

const dataSource = new RestDataSource();
let idCounter = 100;
export const loadData = (dataType, params) => {
  return {
    type: ActionsTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then((response) => ({
      dataType,
      data: response.data,
      total: Number(response.headers["x-total-count"]),
      params,
    })),
  };
};

//pagination and filtration Control
export const setPageSize = (newSize) => {
  return {
    type: ActionsTypes.DATA_SET_PAGESIZE,
    payload: newSize,
  };
};
export const setSortProperty = (newProperty) => {
  return {
    type: ActionsTypes.DATA_SET_SORT_PROPERTY,
    payload: newProperty,
  };
};
export const filterPrice = (minPrice, maxPrice) => {
  // console.log("filter");
  return {
    type: ActionsTypes.DATA_SET_PRICE_FILTER,
    payload: {
      priceStart: minPrice,
      priceEnd: maxPrice,
    },
  };
};

//Cart
export const addToCart = (product, quantity) => ({
  type: ActionsTypes.CART_ADD,
  payload: {
    product,
    quantity: quantity ? quantity : 1,
  },
});
export const updateCartQuantity = (product, quantity) => ({
  type: ActionsTypes.CART_UPDATE,
  payload: {
    product,
    quantity,
  },
});
export const removeFromCart = (product) => ({
  type: ActionsTypes.CART_REMOVE,
  payload: product,
});
export const clearCart = () => ({
  type: ActionsTypes.CART_CLEAR,
});

//List
export const addList = (list) => ({
  type: ActionsTypes.LIST_ADD,
  payload: list,
});
export const removeList = (list) => ({
  type: ActionsTypes.LIST_REMOVE,
  payload: list,
});
export const addToList = (list, product) => ({
  type: ActionsTypes.LIST_ADD_TO,
  payload: {
    list,
    product,
  },
});

export const placeOrder = (order) => ({
  type: ActionsTypes.DATA_STORE,
  payload: dataSource.StoreData(DataTypes.ORDERS, order).then((response) => ({
    dataType: DataTypes.ORDERS,
    data: response.data,
  })),
});

//model Action Creators
/* => products, category, reviews , users , orders => store, delete , update from dataStore*/
export const createSaveEvent = (dataType, payload) => {
  if (!payload.id) {
    return {
      type: ActionsTypes.STORE,
      dataType: dataType,
      payload: {
        ...payload,
        id: idCounter++,
      },
    };
  } else {
    return {
      type: ActionsTypes.UPDATE,
      dataType: dataType,
      payload: payload,
    };
  }
};

export const saveProduct = (product) => {
  return createSaveEvent(DataTypes.PRODUCTS, product);
};
export const saveUser = (user) => {
  return createSaveEvent(DataTypes.USERS, user);
};
export const saveReview = (review) => {
  return createSaveEvent(DataTypes.REVIEWS, review);
};
export const saveCategory = (category) => {
  return createSaveEvent(DataTypes.CATEGORIES, category);
};
export const saveOrder = (order) => {
  return createSaveEvent(DataTypes.ORDERS, order);
};

export const deleteOne = (dataType, one) => {
  return {
    type: ActionsTypes.DELETE,
    dataType: dataType,
    payload: one.id,
  };
};

//rest creators
// export const rest_getData = (dataType) => ({
//   type: ActionsTypes.REST_GET_DATA,
//   dataType: dataType,
// });
