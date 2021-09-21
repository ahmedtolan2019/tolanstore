//method to check if the action is promise or not
const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

//async middle ware
export const AsyncMiddleware = () => (next) => (action) => {
  // console.log("action", action);
  if (isPromise(action.payload)) {
    action.payload.then((result) => next({ ...action, payload: result }));
  } else {
    next(action);
  }
};
