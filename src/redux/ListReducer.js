import { ActionsTypes } from "./Types";

let count = 100;

export const ListReducer = (storeData, action) => {
  let newStore = {
    lists: [
      {
        list: { id: 99, name: "Favourites", color: "red" },
        products: [],
        quantity: 0,
      },
    ],
    ...storeData,
  };
  switch (action.type) {
    case ActionsTypes.LIST_ADD:
      // console.log("addlist");
      let existing = newStore.lists.find(
        (item) => item.list.id === action.payload.id
      );
      if (existing) {
        return newStore;
      } else {
        let list = { id: count++, ...action.payload };
        newStore.lists = [
          ...newStore.lists,
          { list, quantity: 0, products: [] },
        ];
        return newStore;
      }

    case ActionsTypes.LIST_REMOVE:
      let selection = newStore.lists.find(
        (item) => item.list === action.payload
      );
      if (selection) {
        newStore.lists.filter((item) => item.list !== action.payload);
      }
      return newStore;
    case ActionsTypes.LIST_ADD_TO:
      newStore.lists = newStore.lists.map((item) => {
        if (item.list.id === action.payload.list.id) {
          if (item.products.find((p) => p.id === action.payload.product.id)) {
            return item;
          } else {
            return {
              list: item.list,
              products: [...item.products, action.payload.product],
              quantity: item.quantity + 1,
            };
          }
        } else {
          return item;
        }
      });

      return newStore;
    default:
      return storeData || {};
  }
};
