import { applyMiddleware, createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { ListReducer } from "./ListReducer";
import { ModelReducer } from "./ModelReducer";
// import { createRestMiddleware } from "./middlewares/RestMidlleware";
// import { composeWithDevTools } from "redux-devtools-extension";
import { AsyncMiddleware } from "./middlewares/AsyncMiddleware";

// const restMiddleware = createRestMiddleware(
//   "http://localhost:3500/api/products",
//   "http://localhost:3500/api/users",
//   "http://localhost:3500/api/reviews",
//   "http://localhost:3500/api/orders",
//   "http://localhost:3500/api/categories"
// );

export const TolanDataStore = createStore(
  CommonReducer(ModelReducer, ShopReducer, CartReducer, ListReducer),
  applyMiddleware(AsyncMiddleware)
);
