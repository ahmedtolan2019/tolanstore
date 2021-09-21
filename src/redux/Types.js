export const DataTypes = {
  PRODUCTS: "products",
  CATEGORIES: "categories",
  ORDERS: "orders",
  USERS: "users",
  REVIEWS: "reviews",
};

export const ActionsTypes = {
  //data

  DATA_LOAD: "data_load",
  DATA_STORE: "data_store",
  //cart
  CART_ADD: "cart_add",
  CART_REMOVE: "cart_remove",
  CART_UPDATE: "cart_update",
  CART_CLEAR: "cart_clear",
  //lists
  LIST_ADD: "list_add",
  LIST_REMOVE: "list_remove",
  LIST_ADD_TO: "list_add_to",
  //model
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  STORE: "STORE",
  //REST
  REST_GET_DATA: "rest_get_data",
  REST_DELETE: "rest_delete",
  REST_UPDATE: "rest_update",
  REST_STORE: "rest_store",
  //pagination and filtration control
  DATA_SET_SORT_PROPERTY: "data_set_sort",
  DATA_SET_PAGESIZE: "data_set_pagesize",
  DATA_SET_PRICE_FILTER: "data_set_price_filter",
};
