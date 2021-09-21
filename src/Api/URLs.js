import { DataTypes } from "./../redux/Types";

// const protocol = "http";
// const host = "localhost";
// const port = "3500";

export const RestUrls = {
  // [DataTypes.PRODUCTS]: `${protocol}://${host}:${port}/api/products`,
  // [DataTypes.CATEGORIES]: `${protocol}://${host}:${port}/api/categories`,
  // //orders
  // [DataTypes.ORDERS]: `${protocol}://${host}:${port}/api/orders`,

  //production
  [DataTypes.PRODUCTS]: `/api/products`,
  [DataTypes.CATEGORIES]: `/api/categories`,
  //orders
  [DataTypes.ORDERS]: `/api/orders`,

  //users
  //reviews
};
// //graphql
// export const GraphQlUrl = `${protocol}://${host}:${port}/graphql`;

//graphql production
export const GraphQlUrl = `/graphql`;
